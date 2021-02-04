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

    const onClickOpenTab = (index) => {
        setTapOpen(index)
    }

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
                            FOLLOW NGAY
                    </a>
                    </div>
                )
            case 'share':

                return (
                    <div className={classnames({
                        'flex items-center': true,
                        'pointer-events-none opacity-50': user.sharefb
                    })} onClick={() => updatePermission(permision)}>
                        <ShareButton onResponse={(response) => { console.log('response', response) }} className='rounded-md bg-blue-500 px-5 py-2 text-white' href="https://www.facebook.com/propzyvietnam/posts/2973131149576685">
                            Chia sẻ
                        </ShareButton>
                    </div>
                )
            case 'subcribe-youtube':
                return (
                    <div id='fjiew' className={classnames({
                        'flex items-center': true,
                        'pointer-events-none opacity-50': user.subytb
                    })} >
                        <YouTubeSubscribe
                            onClick={() => updatePermission(permision)}
                            channelid={channelid}
                            theme={"default"}
                            layout={"full"}
                            count={"default"}
                        />
                    </div>
                )
            case 'like-face':
                return (
                    // <div className={classnames({
                    //     'flex items-center': true,
                    //     'pointer-events-none opacity-50': user.likefb
                    // })}>
                    //     <div>

                    //         <Like href="https://www.facebook.com/propzyvietnam" colorScheme="dark" showFaces />

                    //     </div>
                    // </div >

                    <div className={classnames({
                        'flex justify-end': true,
                        'pointer-events-none opacity-50': user.likefb
                    })}>
                        <a onClick={() => updatePermission(permision)} href='https://www.facebook.com/propzyvietnam' target='_blank' className="btn-orange w-20 px-10">
                            LIKE NGAY
                        </a>
                    </div>

                    //     onClick={() => updatePermission(permision)}
                    // >
                    //     <div >
                    //         <Like href="https://www.facebook.com/propzyvietnam" colorScheme="dark" showFaces />
                    //     </div>
                    // </div >
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