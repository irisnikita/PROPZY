import React, { useEffect, useState } from 'react'
import classnames from 'classnames';
import { message } from 'antd'
import { FacebookProvider, Share, Like, ShareButton } from 'react-facebook';
import { connect } from 'react-redux'
import YouTubeSubscribe from 'components/YoutubeSubscribe'

import { getUser } from 'store/user/userSlice'

// Styles
import styles from './styles.module.scss'

import { accountService } from '../../../../_service';

import * as userServices from '../../../../services/user'

//import Like from 'react-facebook/dist/Like';

import { appConfig, notificationTypes } from 'constant'

const API_KEY = 'AIzaSyAp_L-1kufbnEMyZN2o2LqwYJKkBIjHjcM';

const permisions = [
    { key: "1", icon: '/svg/icons/share.svg', type: "share", label: 'Chia sẻ bài post', description: 'Chia sẻ thành công, thêm 1 lượt' },
    { key: "2", icon: '/svg/icons/facebook.svg', type: "like-face", label: 'Like Propzy Fanpage', description: 'Sẽ thêm 1 lượt' },
    { key: "3", icon: '/svg/icons/zalo.svg', type: "follow-zalo", label: 'Follow Zalo OA', description: 'Sẽ thêm 1 lượt' },
    { key: "4", icon: '/svg/icons/youtube.svg', type: "subcribe-youtube", label: 'Subcribe Youtube channel', description: 'Sẽ thêm 1 lượt' },
    { key: "5", icon: '/svg/icons/people.svg', type: "invite-people", label: 'Mời bạn bè tham gia mini game thành công', description: 'Sẽ thêm tối đa 10 lượt' },
]

const Permision = (props) => {
    // Props

    let channelid = "UCeIN3NL1ms3rSB6jWYUr19g";

    const { user = '' } = props;

    const [tabOpen, setTapOpen] = useState(0);
    const [gapiReady, setGapiReady] = useState(false)

    const onClickOpenTab = (index) => {
        setTapOpen(index)
    }

    // useEffect(() => {
    //     loadYoutubeApi()
    // }, [])

    // useEffect(() => {
    //     // if (gapiReady) {
    //     //     excute()
    //     // }
    // }, [gapiReady])

    // const loadYoutubeApi = () => {
    //     const script = document.createElement("script");
    //     script.src = "https://apis.google.com/js/client.js";

    //     script.onload = () => {
    //         gapi.load('client', () => {
    //             gapi.client.setApiKey(API_KEY);
    //             gapi.load("client:auth2", function () {
    //                 gapi.auth2.init({ client_id: "58120078236-5bsquu7njtio04eq533ik836js3lqjgf.apps.googleusercontent.com" });
    //             });
    //         });
    //     };

    //     document.body.appendChild(script);
    // }

    // function authenticate() {
    //     return gapi.auth2.getAuthInstance()
    //         .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
    //         .then(function () { console.log("Sign-in successful"); },
    //             function (err) { console.error("Error signing in", err); });
    // }
    // function loadClient() {
    //     gapi.client.setApiKey(API_KEY);
    //     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    //         .then(function () {
    //             // excute()
    //             console.log("GAPI client loaded for API");
    //             console.log(gapi)
    //             setGapiReady(true)
    //         },
    //             function (err) { console.error("Error loading GAPI client for API", err); });
    // }

    // const onClickScrubileYoutube = () => {
    //     authenticate().then(loadClient);
    // }

    // Make sure the client is loaded and sign-in is complete before calling this method.
    // function excute() {
    //     return gapi.client.youtube.subscriptions.insert({
    //         "part": [
    //             "snippet"
    //         ],
    //         "resource": {
    //             "snippet": {
    //                 "resourceId": {
    //                     "kind": "youtube#channel",
    //                     "channelId": "UCVSG6bty9aR8_2pa6TAoUNQ"
    //                 }
    //             }
    //         }
    //     })
    //         .then(function (response) {
    //             // Handle the results here (response.result has the parsed body).
    //             console.log("Response", response);
    //         },
    //             function (err) { console.error("onClickScrubileYoutube error", err); });
    // }

    const onClickCoppyLink = () => {
        const el = document.createElement("textarea");
        const elLink = document.getElementById('link-invite')
        el.value = elLink.innerText;

        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        message.success('Sao chép link chia sẻ thành công')
    }

    const updatePermission = async (permission) => {
        let draftNotification = notificationTypes.find(notification => notification.type === permission.type)
        console.log('them turn')
        const updatePermission = await userServices.updatePermission({
            id: permission.type,
            email: user.email
        })

        if (updatePermission) {
            const createNotification = await userServices.createNotification({
                userEmail: user.email,
                notification: draftNotification
            })

            if (createNotification) {
                props.getUser(createNotification.data)
            }
        }
    }

    const showRenderContentTab = (permision) => {

        switch (permision.type) {
            case 'follow-zalo':
                return (
                    <div className={classnames({
                        'flex justify-end': true,
                        'pointer-events-none opacity-50': user.subzalo
                    })}>
                        <a onClick={() => updatePermission(permision)} href='http://zalo.me/propzy' target='_blank' className="btn-orange w-20 px-10">
                            FLOW NGAY
                    </a>
                    </div>
                )
            case 'share':

                return (
                    <div className={classnames({
                        'flex items-center': true,
                        'pointer-events-none opacity-50': user.sharefb
                    })} onClick={() => updatePermission(permision)}>
                        <ShareButton onResponse={(response) => { console.log('response', response) }} className='rounded-md bg-blue-500 px-5 py-2 text-white' href="https://www.facebook.com/propzyvietnam">
                            Chia sẻ
                        </ShareButton>
                    </div>
                )
            case 'subcribe-youtube':
                return (
                    <div className={classnames({
                        'flex items-center': true,
                        'pointer-events-none opacity-50': user.subytb
                    })} onClick={() => updatePermission(permision)}>
                        <YouTubeSubscribe
                            channelid={channelid}
                            theme={"default"}
                            layout={"full"}
                            count={"default"}
                        />
                    </div>
                )
            case 'like-face':
                return (
                    <div className={classnames({
                        'flex items-center': true,
                        'pointer-events-none opacity-50': user.likefb
                    })}>
                        <div onClick={() => updatePermission(permision)}>
                            <Like href="https://www.facebook.com/propzyvietnam" colorScheme="dark" showFaces />
                        </div>
                    </div >
                )
            case 'invite-people':
                return (
                    <div className={classnames({
                        'flex justify-between items-center': true,
                        'opacity-50': +user.sharefriend === 10,
                        'pointer-events-none': +user.sharefriend === 10
                    })}>
                        <div className='font-semibold text-white'>
                            <div>
                                <strong className='text-lg'>Link chia sẻ:</strong> &nbsp;
                            <span id='link-invite'>{`${appConfig.URL}?linkShare=${user.invitelink}`}</span>
                            </div>
                            <div className='text-base'>
                                Còn lại {10 - user.sharefriend} lượt chia sẻ
                           </div>
                        </div>
                        <button className={
                            classnames({
                                "btn-orange": true
                            })
                        } onClick={onClickCoppyLink}>Sao chép</button>
                    </div>
                )

            default:
                break;
        }

        return (
            <div>
                hello
            </div>
        )
    }

    return (
        <FacebookProvider appId="838159696723984" >
            {permisions.map((permision, index) => {
                return (
                    <div key={permision.key} className='relative' >
                        <div className="default__input max flex justify-between">
                            <div className="flex items-center space-x-5">
                                <img src={permision.icon} alt="" />
                                <span>{permision.label}</span>
                            </div>
                            <div className='space-x-5 flex items-center cursor-pointer' onClick={() => onClickOpenTab(index)}>
                                <span>{permision.description}</span>
                                <img src='/svg/icons/caret-down.svg' />
                            </div>
                        </div>
                        <div className={classnames({
                            [styles['pane_open']]: true,
                            'rounded-b-md': true,
                            [styles['active']]: index === tabOpen
                        })}>
                            {showRenderContentTab(permision)}
                        </div>
                    </div>
                )
            })}
        </FacebookProvider>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userSlice.user
    }
}

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Permision)