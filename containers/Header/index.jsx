// Libraries
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import { Formik } from 'formik'
import moment from 'moment'
// Redux toolkit
import { getUser } from 'store/user/userSlice';

// Services 
import * as userServices from 'services/user'

import { appConfig, notificationTypes } from 'constant'

const Header = (props) => {
    // State
    const [isChangeHeader, setChangeHeader] = useState(false);
    const [menuItemSelected, setMenuItemSelected] = useState({})
    const [isOpenModal, setOpenModal] = useState(false)
    const [isActive, setActive] = useState('home')
    console.log("Header -> isActive", isActive)

    const menu = [
        { key: 'home', label: 'TRANG CHỦ', link: '/', location: 'home-container' },
        { key: 'introduce', label: 'GIỚI THIỆU', link: '/', location: 'propzythree-step' },
        { key: 'rule', label: 'THỂ LỆ', link: '/', location: 'rule-event' },
        { key: 'contact', label: 'LIÊN HỆ ', link: '/', location: 'contact-us' },
        { key: 'see-prize', label: 'XEM QUÀ', link: '/user' },
    ]
    const router = useRouter();

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        // // Get data user
        getDataUser();

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, []);

    useEffect(() => {
        let draftMenuItem = menu.find(item => item.link === router.pathname)

        draftMenuItem && setMenuItemSelected(draftMenuItem)
    }, [router])

    const getDataUser = async () => {
        if (localStorage.getItem(appConfig.LOCAL_EMAIL)) {
            const user = await userServices.get({
                id: localStorage.getItem(appConfig.LOCAL_EMAIL)
            })

            if (!isEmpty(user)) {
                props.getUser({ ...user.data })
            }
        }
    }

    const onScroll = (e) => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }

        let windowScollY = window.scrollY;
        console.log("onScroll -> windowScollY", windowScollY)

        for (let i = 0; i < menu.length - 1; i++) {
            const elementPrevious = document.getElementById(menu[i].location);
            const elementNext = document.getElementById(menu[i + 1].location);

            if (elementPrevious && elementNext) {
                if (windowScollY >= elementPrevious.offsetTop && windowScollY <= elementNext.offsetTop) {
                    setActive(menu[i].key)
                    break;
                }
            }
        }
    }

    const scrollToElement = (element) => {
        router.push(`/#${element}`)
        // if (document.getElementById(element)) {

        //     document.getElementById(element).scrollIntoView({ block: 'start' });
        // }
    }

    const onClickSeePrize = () => {
        if (isEmpty(props.user)) {
            setOpenModal(true)
        } else {
            router.push('/user')
        }
    }

    const showRenderMenu = () => {
        return menu.length ? menu.map(item => {
            return item.location ? (
                <li
                    key={item.key}
                    className={classnames({
                        'cursor-pointer': true,
                        'text__color--orange': isActive === item.key
                    })}
                    onClick={() => scrollToElement(item.location)}
                >
                    <a>{item.label}</a>
                </li>
            ) :
                item.key === 'see-prize' ? (
                    <a className={classnames({
                        'text__color--orange': item.key === menuItemSelected.key
                    })} key={item.key} onClick={onClickSeePrize}>{item.label}</a>
                ) : (
                        <li key={item.key} className={classnames({
                            'text__color--orange': item.key === menuItemSelected.key
                        })}>
                            <Link href={item.link}>
                                <a>{item.label}</a>
                            </Link>
                        </li>
                    )

        }) : null
    }

    return (
        <header className='relative'>
            <div className={classnames({
                'transition-all duration-300': true,
                "fixed z-40 f-Sans-pro w-full text-white": true,
                'bg-white text-gray-900': isChangeHeader
            })}>
                <div
                    className={classnames({
                        'default__header static mx-auto w-10/12 flex justify-center md:justify-between': true,
                    })}
                >
                    <Link href='/'>
                        <div className='md:w-max cursor-pointer w-6/12 bg-white px-2 pt-2 pb-1 rounded-b-xl' >
                            <img className='md:w-full mx-auto w-8/12' src="/svg/logo.svg" alt="" />
                        </div>
                    </Link>
                    <ul className='menu-header__list hidden md:flex font-semibold list-reset items-center space-x-10 pr-5'>
                        {showRenderMenu()}
                    </ul>
                </div>
            </div>
            <Modal
                visible={isOpenModal}
                // onOk={handleOk}
                onCancel={() => setOpenModal(false)}
                footer={null}
            >
                <div className='font-semibold text-xl text__color--orange mt-10'>
                    ĐĂNG KÝ ĐỂ NHẬN THÊM 2 LƯỢT CHƠI
                    </div>
                <Formik
                    initialValues={{ email: '', name: '', phone: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Vui lòng nhập tên'
                        }

                        if (!values.phone) {
                            errors.phone = 'Vui lòng nhập số điện thoại'
                        } else if (values.phone.length < 0 && values.phone.length > 11) {
                            errors.phone = 'Vui lòng nhập số điện thoại hợp lệ'
                        }

                        if (!values.email) {
                            errors.email = 'Vui lòng nhập email';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Địa chỉ email không đúng';
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        let userUpdateNotification = null;

                        if (localStorage.getItem('linkShare')) {
                            userUpdateNotification = notificationTypes.find(notification => notification.type === 'invite-people');
                        }

                        let draftValues = {
                            ...values,
                            invitelink: localStorage.getItem('linkShare') || '',
                            userUpdateNotification
                        }

                        let notification = notificationTypes.find(notification => notification.type === 'register');

                        const user = await userServices.create({ ...draftValues, notifications: [notification] });
                        // sendMail()
                        if (user && user.data) {
                            if (user.data.email) {
                                router.push('/user')
                                props.getUser(user.data)
                                localStorage.setItem('user-email', user.data.email);
                            } else {
                                Modal.error({
                                    title: 'Đăng ký thất bại',
                                    content: 'Email đăng ký đã tồn tại, xin vui lòng đăng ký email khác',
                                    okText: '  Đăng ký lại',
                                    closable: true
                                })
                            }

                        } else {
                            Modal.error({
                                title: 'Đăng ký thất bại',
                                content: 'Email đăng ký đã tồn tại, xin vui lòng đăng ký email khác',
                                okText: '  Đăng ký lại',
                                closable: true
                            })
                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-3 mt-3">
                                    <input name="name" type="text" value={values.name} onChange={handleChange} className={classnames('second__input', 'w-full')} placeholder='Họ và tên' />
                                    {errors.name && touched.name && <div className='text-red-600 my-1'>{errors.name}</div>}
                                    <input name="email" type="text" value={values.email} onChange={handleChange} className={classnames('second__input', 'w-full')} placeholder='Email' />
                                    {errors.email && touched.email && <div className='text-red-600 my-1'>{errors.email}</div>}
                                    <input name="phone" type="tel" value={values.phone} onChange={handleChange} className={classnames('second__input', 'w-full')} placeholder='Số điện thoại' />
                                    {errors.phone && touched.phone && <div className='text-red-600 my-1'>{errors.phone}</div>}
                                    <div className="flex justify-end w-full">
                                        <button type='submit'
                                            className="btn-orange min-h-0 py-4 min-w-0 px-10 rounded-md"
                                        // onClick={onClickRegisterUser}
                                        >
                                            ĐĂNG KÝ
                                                </button>
                                    </div>
                                </div>
                            </form>
                        )}
                </Formik>

            </Modal>
        </header>
    );
};

const mapStateToProps = (state) => ({
    user: state.userSlice.user
})

const mapDispatchToProps = { getUser }

export default connect(mapStateToProps, mapDispatchToProps)(Header);