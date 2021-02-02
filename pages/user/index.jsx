// Libraries
import Header from '../../containers/Header';
import Footer from '../../containers/Footer'
import Axios from 'axios';
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { appConfig } from '../../constant'
import Link from 'next/link'
import classnames from 'classnames'
import Slider from 'react-slick'
import { Row, Col, Modal, Badge } from 'antd'
import Head from 'next/head'

import LuckMoney from 'components/LuckyMoney'

// Components
import Permision from '../../components/User/components/Permision'
import Notification from '../../components/User/components/Notification'

// Services 
import * as userServices from 'services/user'
import * as prizeServices from 'services/prize'

import React, { useEffect, useState } from 'react';




import { getUser } from '../../store/user/userSlice'

const tabs = [
    { key: 'tab-1', name: 'GIẢI THƯỞNG', image: '/svg/prize-user.svg' },
    { key: 'tab-2', name: 'NHIỆM VỤ', image: '/svg/mission-user.svg' },
    { key: 'tab-3', name: 'THÔNG BÁO', image: '/svg/nofi-user.svg' },
]

const User = (props) => {
    const [showModal, setShowModal] = React.useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [user, setUser] = useState({})
    const [prizes, setPrizes] = useState([])
    const [tabSelected, setTabSelected] = useState(tabs[0])
    const [isOpenLuckyMoney, setOpenLuckyMoney] = useState(false);

    const router = useRouter()


    useEffect(() => {
        getDataUser()
    }, []);

    useEffect(() => {
        if (router) {
            console.log('router', router)
            const { tab } = router.query;

            const selectedTab = tabs.find(cTab => cTab.key === tab)
            if (selectedTab) {
                setTabSelected(selectedTab)
            }
        }
    }, [router])

    useEffect(() => {
        if (!isEmpty(user)) {
            getUserPrizes()
        }
    }, [user])

    const getUserPrizes = async () => {
        const newPrizes = await prizeServices.getPrizeByUser({
            id: user.email
        })

        if (newPrizes && newPrizes.data) {
            const { data } = newPrizes;
            setPrizes(data)
        }
    }


    const onCloseLuckyMoney = (newProps) => {
        setOpenLuckyMoney(false)
        getUserPrizes();
        getDataUser();

        if (newProps === 'open-next') {
            setTimeout(() => {
                setOpenLuckyMoney(true)
            }, 200)
        }
    }


    const getDataUser = async () => {
        if (localStorage.getItem(appConfig.LOCAL_EMAIL)) {
            const user = await userServices.get({
                id: localStorage.getItem(appConfig.LOCAL_EMAIL)
            })

            if (user && user.data && user.data.email) {
                props.getUser({ ...user.data })
                setUser({ ...user.data })
            } else {
                router.push('/')
            }
        } else {
            router.push('/')
        }
    }

    const sendCoupons = async () => {
        const coupons = await userServices.sendMailCoupons({
            user: user,
            coupons: prizes
        })

        if (coupons && coupons.data) {
            Modal.success({
                title: 'Gửi mã thành công',
                content: 'Đã gửi mã coupon về email của bạn, vui lòng kiểm tra email',
                okText: 'Xác nhận',
                closable: true
            })
        }
    }

    const showRenderContentTab = () => {
        switch (tabSelected.key) {
            case 'tab-1':
                return (
                    <>
                        <Row gutter={[10, 10]} style={{ justifyContent: 'center' }}>
                            {prizes && prizes.length ? prizes.map((prize, index) => {
                                return (
                                    <Col xs={{ span: 12 }} md={{ span: 6 }}>
                                        <div key={prize.name + index}>
                                            <img src={prize.image} alt="" />
                                        </div>
                                    </Col>
                                )
                            }) : (
                                    <div className='relative place-self-center mx-40 text-center'>
                                        <p className='text-white '>Bạn chưa nhận được giải thưởng nào</p>
                                    </div>
                                )}
                        </Row>
                        {/* <div className="flex w-full justify-center items-center md:w-10/12 mt-10">
                            {prizes && prizes.length ? prizes.map((prize, index) => {
                                return (
                                    <div key={prize.name + index} style={{ width: 200 }}>
                                        <img src={prize.image} alt="" />
                                    </div>
                                )
                            }) : (
                                    <div className='relative place-self-center mx-40 text-center'>
                                        <p className='text-white '>Bạn chưa nhận được giải thưởng nào</p>
                                    </div>
                                )}
                        </div> */}
                        <div onClick={sendCoupons} className='mx-auto btn-orange-small mt-3'>
                            XEM MÃ COUPON
                </div>
                        <a className='text-white my-10'>{`Bạn còn ${user && user.turn >= 0 ? user.turn : 0} lượt chơi `}</a>
                        <Link href='/#propzytree-lixi'>

                            <div className="btn-orange">HÁI LÌ XÌ NGAY</div>
                        </Link>
                    </>
                )
            case 'tab-2':
                return false ? (
                    <div style={{ minHeight: '50vh' }} className='text-white font-bold text-3xl flex items-center'>Comming soon</div>
                ) : (
                        <div className='w-full'>
                            <div className='justify-center flex items-center'>
                                <div className="w-full md:w-7/12 space-y-5">
                                    <Permision />
                                </div>
                            </div>
                        </div>
                    )
            case 'tab-3':
                return false ? (
                    <div style={{ minHeight: '50vh' }} className='text-white font-bold text-3xl flex items-center'>Comming soon</div>
                ) : (
                        <div className='w-full'>
                            <div className='justify-center flex items-center'>
                                <div className="w-full md:w-7/12 space-y-5">
                                    <Notification />
                                </div>
                            </div>
                        </div>
                    )
            default:
                break;
        }
    }

    return (
        <div>
            <div className='home-page__wrap'>
                <Head>
                    <title>Hái Lì Xì Với Propzy - Khai Xuân Đón Lộc</title>
                    <link rel="icon" href="https://propzy.vn/assets/images/icons/favicon.ico?v=2.2" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                    <meta property='og:image' content={`/images/Thumbnail.png`} />
                    <meta property='og:title' content={'Hái Lì Xì Với Propzy - Khai Xuân Đón Lộc'} />
                    <meta property='og:description' content='Tham gia ngay Hái Lì Xì “Có nhà là có Tết – Propzy Care hết” để rinh nhiều phần quà hấp dẫn lên đến 1 tỷ đồng. Đăng ký xem nhà (Thuê) trước ngày 28/02/2021 để nhận gói ưu đãi Propzy CARE trị giá 2.000.000 VNĐ. Khám phá ngay' />
                </Head>
                <Header />

                <section className='home-page__main'>
                    <div className='main-content--2 px-5 md:px-0 pt-20 flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-end pb-10 space-x-10 px-10 md:px-0 md:space-x-20'>
                            {tabs.length && tabs.map(tab => {
                                return (
                                    <div key={tab.key} style={{ transition: 'all 200ms' }} onClick={() => { setTabSelected(tab) }} className={classnames({
                                        'space-y-5 cursor-pointer md:w-full text-center': true,
                                        'transform scale-125': tab.key === tabSelected.key
                                    })}>
                                        {tab.key === 'tab-3' ? (
                                            <Badge count={user.notifications ? user.notifications.length : 0} size='default' offset={[-14, 37]}>
                                                <img src={tab.image} alt="" />
                                            </Badge>
                                        ) : (
                                                <img src={tab.image} alt="" />
                                            )}
                                        <p className='f-Sans-pro text-white font-bold md:text-lg mb-20'>{tab.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        {showRenderContentTab()}
                    </div>
                </section>
                <Footer />
                <LuckMoney isOpen={isOpenLuckyMoney} id={'flip-lucky0=-money'} onClose={onCloseLuckyMoney} />
            </div>
        </div>
    )
};

const mapDispatchToProps = {
    getUser
}

export default connect(null, mapDispatchToProps)(User);