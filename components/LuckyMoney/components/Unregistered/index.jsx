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
import { Modal, Dropdown, Menu } from 'antd'

// Redux toolkit
import { selectUser, getUser } from 'store/user/userSlice'

// App config
import { appConfig } from 'constant'

// Services
import * as userServices from 'services/user'
import * as prizeServices from 'services/prize'


// Styles
import styles from 'components/LuckyMoney/styles.module.scss';

const prizes = [
    { key: 'VN_Moving', name: 'VN Moving', area: 'HCM (City Wide)', detail: 'Giảm 500K cho khách đặt chuyển nhà', voucher: 500000, quantity: 99999, image: '/svg/lucky-money/copy-lucky-money/voucher-500k.svg' },
    { key: 'HomeAZ', name: 'HomeAZ', area: 'HCM (City Wide)', detail: 'Giảm 600K cho khách đặt mua nệm trên app HomeAZ', voucher: 600000, quantity: 99999, image: '/svg/lucky-money/copy-lucky-money/coupon-600k.svg' },
    { key: 'GoDee', name: 'Godee', area: 'HCM (City Wide)', detail: 'Tặng 25 chuyến xe miễn phí (30k/ chuyến) cho khách hàng', voucher: 750000, quantity: 99999, image: '/svg/lucky-money/copy-lucky-money/godee.svg' },
]

const Unregistered = (props) => {
    // Props
    const { onClose, callbackUser } = props;
    const dispatch = useDispatch();

    // State 
    const [isOpenRegister, setOpenRegister] = useState(false);
    const [isRegisterSuccess, setRegisterSuccess] = useState(false);
    const [isRegisterRent, setRegisterRent] = useState(false);
    const [prizeSelected, setPrizeSelected] = useState({});
    const [user, setUser] = useState({});
    const [form, setForm] = useState({
        email: '',
        name: '',
        phone: 0,
        price: '6-9 triệu'
    })
    const [listPrize, setListPrize] = useState([]);


    useEffect(() => {
        randomPrize()
        // getListPrizes()
    }, [])

    useEffect(() => {
        if (!isEmpty(user)) {
            props.callbackUser(user)
        }
    }, [user])

    const onClickPrice = (e) => {
        setForm({
            ...form,
            price: e.key
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

    const updateCoupon = async (email, user) => {
        const coupon = await prizeServices.updateCoupon({
            id: prizeSelected.key,
            owner: email,
        })

        if (coupon) {
            sendMail(coupon.data.data.name, email, user, coupon.data.data)
        }
    }

    return (
        <div className='animate__animated animate__fadeIn w-screen md:w-max relative flex justify-center md:justify-start items-center'>
            {!isRegisterSuccess ? (
                <>
                    <div className={classnames("relative", {
                        'hidden': isOpenRegister
                    })}>
                        <img className={classnames(styles['img-lucky-money'], 'md:block animate__animated', {
                            'hidden': isOpenRegister,
                        })} src={prizeSelected.image} alt="" />
                        <div className="flex justify-center absolute bottom-5 w-full">
                            <div className={classnames(
                                "btn-orange",
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
                        'bg-white rounded-2xl md:rounded-r-2xl animate__animated mt-10 w-10/12 md:w-96 h-full relative md:-left-5 overflow-x-hidden ',
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
                                    const user = await userServices.create({ ...values });
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
                                                okText: '  Đăng ký lại'
                                            })
                                        }

                                    } else {
                                        Modal.error({
                                            title: 'Đăng ký thất bại',
                                            content: 'Email đăng ký đã tồn tại, xin vui lòng đăng ký email khác',
                                            okText: '  Đăng ký lại'
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
                                                <input name="phone" type="number" value={values.phone} onChange={handleChange} className={classnames('second__input', 'w-full')} placeholder='Số điện thoại' />
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
                                    <strong className='font-semibold text-xl text__color--orange'>BẠN CÓ NHU CẦU THUÊ BẤT ĐỘNG SẢN?</strong>
                                    <p className='text-base pt-5 pb-7'>
                                        Hơn 100.000 bất động sản tại Propzy sẵn sàng giao dịch!
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
                                            typeof onClose == 'function' && onClose();
                                            props.getUser(user)

                                            const order = await userServices.createOrders({ ...values, price: form.price });

                                            if (order) {
                                                const sendThanksMail = await userServices.sendThanks({
                                                    user: { ...values }
                                                })
                                                typeof onClose == 'function' && onClose();
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
                                                        <input name="phone" type="number" value={values.phone} onChange={handleChange} className={classnames('second__input', 'w-full')} placeholder='Số điện thoại' />
                                                        {errors.phone && touched.phone && <div className='text-red-600 my-1'>{errors.phone}</div>}
                                                        <Dropdown trigger={['click']} overlay={listPrice}>
                                                            <input name="price" value={form.price} readOnly className={classnames('second__input', 'w-full', 'cursor-pointer')} placeholder='Giá muốn thuê'></input>
                                                        </Dropdown>
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
                                        <img src="/svg/lucky-money/register-sucess.svg" alt="" />
                                        <div className="flex absolute top-2/4 w-full items-center justify-center">
                                            <span className='w-1/2 text-center'>Chúc mừng bạn nhận quà thành công và nhận thêm 2 lượt quay</span>
                                        </div>
                                    </div>
                                    <div className='px-5 md:px-20 pt-7'>
                                        <strong className='font-semibold text-xl text__color--orange'>ĐĂNG KÝ THUÊ NHÀ TẠI ĐÂY</strong>
                                        <p className='text-base pt-5 pb-7'>
                                            Từ 25/01 - 28/02/2021 để nhận gói ưu đãi Propzy CARE trị giá 2.000.000 VNĐ khi phát sinh giao dịch trước ngày 30/03/2021.
                                </p>
                                        <div className="flex justify-between pb-7 items-center">
                                            <span onClick={onClickOpenNext} className='cursor-pointer text__color--orange'>Hái lì xì tiếp</span>
                                            <div onClick={() => setRegisterRent(true)} className="btn-orange min-h-0 py-3 min-w-0 px-10 rounded-md">ĐĂNG KÝ</div>
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