// Libraries
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
import classnames from 'classnames';

// Styles
import styles from 'components/LuckyMoney/styles.module.scss';

const Unregistered = (props) => {
    // Props
    const { onClose } = props;

    // State 
    const [isOpenRegister, setOpenRegister] = useState(false);
    const [isRegisterSuccess, setRegisterSuccess] = useState(false);
    const [isRegisterRent, setRegisterRent] = useState(false);

    // Function
    const onClickRegisterUser = () => {
        setRegisterSuccess(true)
    }

    const onClickAdvisory = () => {
        typeof onClose == 'function' && onClose();
    }

    return (
        <div className='animate__animated animate__fadeIn relative flex items-center'>
            {!isRegisterSuccess ? (
                <>
                    <div className="relative">
                        <img className={styles['img-lucky-money']} src={'/svg/lucky-money/voucher-500k.svg'} alt="" />
                        <div className="flex justify-center absolute bottom-5 w-full">
                            <div className="btn-orange" onClick={() => { setOpenRegister(true) }}>
                                ĐĂNG KÝ ĐỂ NHẬN QUÀ
                    </div>
                        </div>
                    </div>
                    <div className={classnames(
                        'bg-white rounded-r-2xl mt-10 w-96 h-full relative -left-5 overflow-x-hidden ',
                        styles['box__register'],
                        {
                            [styles['box--open']]: isOpenRegister,
                            'px-10': isOpenRegister,
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
                            <div className="space-y-3 mt-3">
                                <input type="text" className={classnames('second__input', 'w-full')} placeholder='Họ và tên' />
                                <input type="text" className={classnames('second__input', 'w-full')} placeholder='Email' />
                                <input type="text" className={classnames('second__input', 'w-full')} placeholder='Số điện thoại' />
                                <div className="flex justify-end w-full">
                                    <div
                                        className="btn-orange min-h-0 py-4 min-w-0 px-10 rounded-md"
                                        onClick={onClickRegisterUser}
                                    >
                                        ĐĂNG KÝ
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ) : (
                    <div className="bg-white rounded-3xl animate__animated animate__fadeIn">
                        {isRegisterRent ? (
                            <div className={classnames(styles['message--success'], 'animate__animated animate__fadeIn')}>
                                <div className='px-10 pt-20'>
                                    <i
                                        onClick={() => { props.onClose && props.onClose() }}
                                        className="icon-out-remove absolute cursor-pointer right-5 text-2xl top-5"
                                    ></i>
                                    <strong className='font-semibold text-xl text__color--orange'>BẠN CÓ NHU CẦU THUÊ BẤT ĐỘNG SẢN?</strong>
                                    <p className='text-base pt-5 pb-7'>
                                        Hơn 100.000 bất động sản tại Propzy sẵn sàng giao dịch!
                                </p>
                                    <div className="space-y-3">
                                        <input type="text" className={classnames('second__input', 'w-full')} placeholder='Họ và tên' />
                                        <input type="email" className={classnames('second__input', 'w-full')} placeholder='Email' />
                                        <input type='' className={classnames('second__input', 'w-full')} placeholder='Số điện thoại' />
                                        <input type="number" className={classnames('second__input', 'w-full')} placeholder='Giá muốn thuê'></input>
                                    </div>
                                    <div className="flex justify-between py-7 items-center">
                                        <span className='cursor-pointer text__color--orange'>Hái lì xì tiếp</span>
                                        <div onClick={onClickAdvisory} className="btn-orange min-h-0 py-3 min-w-0 px-5 rounded-md">TƯ VẤN NGAY</div>
                                    </div>
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
                                    <div className='px-20 pt-7'>
                                        <strong className='font-semibold text-xl text__color--orange'>ĐĂNG KÝ THUÊ NHÀ TẠI ĐÂY</strong>
                                        <p className='text-base pt-5 pb-7'>
                                            Từ 25/01 - 28/02/2021 để nhận gói ưu đãi Propzy CARE trị giá 2.000.000 VNĐ khi phát sinh giao dịch trước ngày 30/03/2021.
                                </p>
                                        <div className="flex justify-between pb-7 items-center">
                                            <span className='cursor-pointer text__color--orange'>Hái lì xì tiếp</span>
                                            <div onClick={() => setRegisterRent(true)} className="btn-orange min-h-0 py-3 min-w-0 px-10 rounded-md">ĐĂNG KÝ</div>
                                        </div>
                                    </div>
                                </div>

                            )}
                    </div>
                )}
        </div>
    );
};

Unregistered.propTypes = {
    onClose: PropTypes.func
};
Unregistered.defaultProps = {
    onClose: () => { }
};

export default Unregistered;