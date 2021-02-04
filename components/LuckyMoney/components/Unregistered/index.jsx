// Libraries
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
import classnames from 'classnames';
import axios from 'axios'
import { isEmpty } from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { Formik } from 'formik';
import moment from 'moment'
import { Modal, Dropdown, Menu, InputNumber } from 'antd'

// Redux toolkit
import { selectUser, getUser } from 'store/user/userSlice'

// App config
import { appConfig, notificationTypes } from 'constant'

// Services
import * as userServices from 'services/user'
import * as prizeServices from 'services/prize'


// Styles
import styles from 'components/LuckyMoney/styles.module.scss';

const prizes = [
    { key: 'VN_Moving', name: 'VN Moving', area: 'HCM (City Wide)', detail: 'Giảm 500K cho khách đặt chuyển nhà', voucher: 500000, quantity: 99999, image: '/svg/lucky-money/copy-lucky-money/voucher-500k.svg' },
    { key: 'HomeAZ', name: 'HomeAZ', area: 'HCM (City Wide)', detail: 'Giảm 600K cho khách đặt mua nệm trên app HomeAZ', voucher: 600000, quantity: 99999, image: '/svg/lucky-money/copy-lucky-money/coupon-600k.svg' },
    { key: 'GoDee', name: 'Godee', area: 'HCM (City Wide)', detail: 'Tặng 25 chuyến xe miễn phí (30k/ chuyến) cho khách hàng', voucher: 750000, quantity: 99999, image: '/svg/lucky-money/copy-lucky-money/godee.svg' },
    { key: 'Lalamove', name: 'Lalamove', area: 'HCM (City Wide)', detail: 'Giảm 75K cho khách đặt chuyển nhà', voucher: 750000, quantity: 300, image: '/svg/lucky-money/copy-lucky-money/75k-lalamove.svg' },
    { key: 'Jupviec', name: 'JupViec.vn', area: 'HCM (City Wide)', detail: 'Giảm 75K cho khách đặt dọn nhà', voucher: 750000, quantity: 700, image: '/svg/lucky-money/copy-lucky-money/75k-giup-viec.svg' },
]

const Unregistered = (props) => {
    // Props
    const { onClose, callbackUser } = props;
    const dispatch = useDispatch();

    // State 
    const [isOpenRegister, setOpenRegister] = useState(false);
    const [isRegisterSuccess, setRegisterSuccess] = useState(false);
    const [isRegisterRent, setRegisterRent] = useState(false);
    const [error, setError] = useState(false);
    const [prizeSelected, setPrizeSelected] = useState({});
    const [user, setUser] = useState({});
    const [form, setForm] = useState({
        email: '',
        name: '',
        phone: 0,
        price: '',
        demand: ''
    })
    const [listPrize, setListPrize] = useState([]);


    useEffect(() => {
        randomPrize()
        // getListPrizes()
    }, [])

    useEffect(() => {
        if (!isEmpty(user)) {
            updateTurnUser();
            props.callbackUser(user)
        }
    }, [user])

    const onClickPrice = (e) => {
        setForm({
            ...form,
            price: e.key
        })
    }

    const onClickDemand = (e) => {
        setForm({
            ...form,
            demand: e.key
        })
    }

    const listPrice = (
        <Menu onClick={onClickPrice} defaultSelectedKeys={'6-9 triệu'}>
            <Menu.Item key='6-9 triệu' value="6-9 triệu">6-9 triệu</Menu.Item>
            <Menu.Item key='9-12 triệu' value="9-12 triệu">9-12 triệu</Menu.Item>
            <Menu.Item key='12-15 triệu' value="12-15 triệu">12-15 triệu</Menu.Item>
            <Menu.Item key='Trên 15 triệu' value="Trên 15 triệu">Trên 15 triệu</Menu.Item>
        </Menu>
    )

    const listDemand = (
        <Menu onClick={onClickDemand}>
            <Menu.Item key='Thuê'>Thuê</Menu.Item>
            <Menu.Item key='Mua'>Mua</Menu.Item>
        </Menu>
    )


    const updateTurnUser = async () => {
        const updateTurn = await userServices.update({
            id: user.email,
            turn: +user.turn
        });

        if (updateTurn && updateTurn.data) {
            props.getUser(updateTurn.data)
        }
    }

    const getListPrizes = async () => {
        const listPrizes = await prizeServices.getListCoupon();

        if (listPrizes && listPrizes.data) {
            setListPrize(listPrizes.data)
        }
    }


    const randomPrize = () => {
        const random = Math.floor(Math.random() * prizes.length);

        setPrizeSelected(prizes[random])
    }

    // Set Local Storage
    const saveUser = (user) => {
        localStorage.setItem('user-email', user.email);
    }

    const sendMail = async (name, email, user, coupon) => {
        const sendMail = await userServices.sendMail({
            email,
            name,
            user,
            coupon
        })
        if (sendMail) {
        }
    }

    // Function
    const onClickRegisterUser = async () => {
        const user = await userServices.create({ ...form });
        // sendMail()
        if (user && user.data) {
            saveUser(user.data)
            setUser(user.data)
            setRegisterSuccess(true)
        }
    }

    const onClickAdvisory = async () => {
        typeof onClose == 'function' && onClose();
        const order = await userServices.createOrders({ ...form });

        if (order) {
            typeof onClose == 'function' && onClose();
            props.getUser(user)
        }
    }

    const onChangeForm = (value, type) => {
        let draftForm = {}

        draftForm = {
            ...form,
            [type]: value
        }

        setForm(draftForm)
    }

    const onClickOpenNext = () => {
        typeof onClose == 'function' && onClose('open-next');
        props.getUser(user)
    }

    const scrollToElement = (element) => {
        if (document.getElementById(element)) {

            document.getElementById(element).scrollIntoView({ block: 'start' });
        }
    }

    const updateCoupon = async (email, user) => {
        const coupon = await prizeServices.updateCoupon({
            id: prizeSelected.key,
            owner: email,
        })

        if (coupon) {
            sendMail(coupon.data.data.name, email, user, coupon.data.data)
        }
    }


    const onChangeInputNumber = (value) => {
        if (value === '') {
            setError(true)
        } else {
            setError(false)
        }

        setForm({
            ...form,
            price: value
        })
    }


    return (
        <div className='animate__animated animate__fadeIn w-screen md:w-max relative flex justify-center md:justify-start items-center'>
            {!isRegisterSuccess ? (
                <>
                    <div className={classnames("md:block relative", {
                        'hidden': isOpenRegister
                    })}>
                        <img className={classnames(styles['img-lucky-money'], 'md:block animate__animated animate__fadeIn', {
                            'hidden md:block': isOpenRegister,
                        })} src={prizeSelected.image} alt="" />
                        <div className="flex justify-center absolute bottom-5 w-full">
                            <div className={classnames(
                                "btn-orange animate__animated animate__fadeIn",
                                {
                                    'hidden': isOpenRegister
                                }
                            )}
                                onClick={() => setOpenRegister(true)}
                            >
                                ĐĂNG KÝ ĐỂ NHẬN QUÀ
                    </div>
                        </div>
                    </div>
                    <div className={classnames(
                        'bg-white md:rounded-r-2xl rounded-2xl animate__animated mt-10 w-10/12 md:w-96 h-full relative md:-left-5 overflow-x-hidden ',
                        styles['box__register'],
                        {
                            [styles['box--open']]: isOpenRegister,
                            'px-10 animate__fadeIn': isOpenRegister,
                            'animate__fadeOut animate__faster': !isOpenRegister,
                        }
                    )}>
                        <i
                            onClick={() => setOpenRegister(false)}
                            className="icon-out-remove absolute cursor-pointer right-5 text-2xl top-5"
                        ></i>
                        <div className='relative w-full'>
                            <div className='font-semibold text-xl text__color--orange'>
                                ĐĂNG KÝ
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

                                    console.log("Unregistered -> userUpdateNotification", userUpdateNotification)
                                    let notification = notificationTypes.find(notification => notification.type === 'register');

                                    const user = await userServices.create({ ...draftValues, notifications: [notification] });
                                    // sendMail()
                                    if (user && user.data) {
                                        if (user.data.email) {
                                            saveUser(user.data)
                                            setUser(user.data)
                                            setForm({ ...form, ...values })
                                            setRegisterSuccess(true)
                                            updateCoupon(user.data.email, user.data)
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
                                                        className="onhover-btn btn-orange min-h-0 py-4 min-w-0 px-10 rounded-md"
                                                    // onClick={onClickRegisterUser}
                                                    >
                                                        ĐĂNG KÝ
                                                </button>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                            </Formik>
                        </div>
                    </div>
                </>
            ) : (
                    <div className="bg-white rounded-3xl  animate__animated animate__fadeIn">
                        {isRegisterRent ? (
                            <div className={classnames(styles['message--success'], 'animate__animated animate__fadeIn')}>
                                <div className='px-10 pt-20'>
                                    <i
                                        onClick={() => { props.onClose && props.onClose() }}
                                        className="icon-out-remove absolute cursor-pointer right-10 md:right-5 text-2xl top-5"
                                    ></i>
                                    <strong className='font-semibold text-xl text__color--orange'>ĐĂNG KÝ TƯ VẤN MUA - THUÊ NHÀ</strong>
                                    <p className='text-base pt-5 pb-7'>
                                        Nhận gói ưu đãi Propzy Care trị giá 2.000.000 VND
                                </p>
                                    <Formik
                                        initialValues={{ ...form }}
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
                                            if (form.price !== '' && form.demand !== '') {
                                                typeof onClose == 'function' && onClose();
                                                props.getUser(user)

                                                const order = await userServices.createOrders({ ...values, price: form.price, demand: form.demand });

                                                if (order) {
                                                    const sendThanksMail = await userServices.sendThanks({
                                                        user: { ...values }
                                                    })
                                                    typeof onClose == 'function' && onClose();
                                                }
                                            } else {
                                                setError(true)
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
                                                        <Dropdown trigger={['click']} overlay={listDemand}>
                                                            <div className='relative flex items-center'>
                                                                <input value={form.demand} readOnly className='cursor-pointer second__input w-full' placeholder='Nhu cầu của bạn(*)'></input>
                                                                <img src="/svg/icons/caret-down.svg" className='text-black absolute right-5' alt="" />
                                                            </div>
                                                        </Dropdown>
                                                        {form.demand === '' && touched.demand && <div className='my-1 text-red-300'>Vui lòng chọn nhu cầu của bạn</div>}
                                                        <div className='relative flex text-white items-center'>
                                                            <InputNumber
                                                                min={0}
                                                                placeholder='Mức giá mong muốn'
                                                                style={{ padding: '0 10px' }}
                                                                className='cursor-pointer second__input w-full overflow-hidden flex items-center'
                                                                formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                                parser={value => value.replace(/₫\s?|(,*)/g, '')}
                                                                onChange={onChangeInputNumber}
                                                            >
                                                            </InputNumber>
                                                            <span className='absolute right-10 text-black'>đ</span>
                                                        </div>
                                                        <div>
                                                            {error ? <div className='my-1 text-red-300'>Vui lòng nhập số tiền </div> : null}
                                                        </div>
                                                        <div className="flex justify-between py-7 items-center">
                                                            <span onClick={onClickOpenNext} className='cursor-pointer text__color--orange'>Hái lì xì tiếp</span>
                                                            <button type='submit' className="btn-orange min-h-0 py-3 min-w-0 px-5 rounded-md">TƯ VẤN NGAY</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            )}
                                    </Formik>
                                </div>
                            </div>
                        ) : (
                                <div className={styles['message--success']}>
                                    <div className='relative'>
                                        <img src="/images/lucky-money-2.png" alt="" />
                                    </div>
                                    <div className='px-5 md:px-20 pt-7'>
                                        <strong className='font-semibold text-xl text__color--orange'>ƯU ĐÃI PROPZY CARE TRỊ GIÁ 2 TRIỆU</strong>
                                        <p className='text-base pt-5 pb-7'>
                                            Nhận ngay gói Propzy Care trị giá 2.000.000 VND khi đăng ký thuê/mua nhà từ ngày 25/01 - 28/02/2021 và hoàn tất hợp đồng trước 30/03/2021

                                </p>
                                        <div className="flex justify-between pb-7 items-center">
                                            <span onClick={onClickOpenNext} className='cursor-pointer text__color--orange'>Hái lì xì tiếp</span>
                                            <div onClick={() => setRegisterRent(true)} className="btn-orange min-h-0 py-3 min-w-0 px-10 rounded-md">NHẬN NGAY</div>
                                        </div>
                                    </div>
                                </div>

                            )}
                    </div>
                )
            }
        </div >
    );
};

Unregistered.propTypes = {
    onClose: PropTypes.func
};
Unregistered.defaultProps = {
    onClose: () => { }
};

const mapDispatchToProps = { getUser }

export default connect(null, mapDispatchToProps)(Unregistered);