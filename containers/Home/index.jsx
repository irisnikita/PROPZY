// Libraries
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    motion,
} from 'framer-motion';
import axios from 'axios'
import { Select, Dropdown, Menu, Modal } from 'antd';
import Head from 'next/head'
import { useRouter } from 'next/router'

// Services
import * as userServices from 'services/user'

// Containers
import Header from 'containers/Header';
import Footer from 'containers/Footer'

// Components
import ImageSlider from 'components/ImageSlider';
import Collapse from 'components/Collapse';
import ApricotBlossom from 'components/ApricotBlossom';
import FlipLuckyMoney from 'components/LuckyMoney/components/FlipLuckyMoney';
import LuckyMoney from 'components/LuckyMoney';
import { Formik } from 'formik';
import { EMULTIHOP } from 'constants';

const { Option } = Select;

const HomeContainer = () => {
    const router = useRouter()

    // State
    const [isOpenLuckyMoney, setOpenLuckyMoney] = useState(false);
    const [formContact, setFormContact] = useState({
        price: '6-9 triệu'
    });

    useEffect(() => {
        console.log('router', router)
        if (router && router.query && router.query.linkShare) {
            localStorage.setItem('linkShare', router.query.linkShare)
        }

    }, [router])

    const onClickPrice = (e) => {
        setFormContact({
            ...formContact,
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


    const onClickAdvisory = () => {
        typeof onClose == 'function' && onClose();

        axios.post("http://10.2.5.171:8102/api/orders", { ...formContact })
    }

    const onChangeForm = (value, type) => {
        let draftForm = {}

        draftForm = {
            ...formContact,
            [type]: value
        }

        setFormContact(draftForm)
    }

    const onCloseLuckyMoney = (newProps) => {
        setOpenLuckyMoney(false)

        if (newProps === 'open-next') {
            setTimeout(() => {
                setOpenLuckyMoney(true)
            }, 200)
        }
    }

    const scrollToElement = (element) => {
        if (document.getElementById(element)) {

            document.getElementById(element).scrollIntoView({ block: 'start' });
        }
    }

    return (
        <div id='home-container' className='home-page__wrap overflow-x-hidden'>

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
                <section className='main-content--1 md:py-5'>
                    <ImageSlider />
                </section>
                <section id={'propzytree-lixi'} className='main-content--2 pt-5 md:pt-40'>
                    <img src="/images/home/home-02.png" className='absolute -top-20 md:-top-20' alt="" />
                    <div className='relative w-10/12 mx-auto flex flex-wrap md:flex-row flex-col-reverse'>
                        <div className='md:w-4/12 relative flex md:block items-center justify-center flex-col mt-10 md:mt-0'>
                            <img src="/images/home/home-03.png" className='md:w-full w-3/4' alt="" />
                            <div className='pt-10 text-white' data-aos="fade-right">
                                Nhà thật sự có Tết khi nơi đó có tình thân sum vầy. Nhà to cũng được, nhà nhỏ cũng được, miễn có nhau là được, &nbsp;
                                <span className="hight-light">
                                    vì CÓ NHÀ LÀ CÓ TẾT.
                                </span>
                                <p className='py-2'></p>
                                Tham gia ngay &nbsp;
                                <span className='hight-light'>HÁI LÌ XÌ - KHAI XUÂN ĐÓN LỘC</span> &nbsp;
                                cho cả năm may mắn cùng những cơ hội ‘rinh’ nhiều phần quà hấp dẫn và giá trị lên đến &nbsp;
                                <span className='hight-light'>1 tỷ đồng.</span>
                            </div>
                        </div>
                        <div className='md:w-8/12 relative'>
                            <ApricotBlossom />
                            <div className='text-yellow-300 animate__animated animate__infinite animate__fadeInUp animate__slower italic text-xl font-bold absolute right-10'>“Nhấp vào bao lì xì để nhận quà”</div>
                        </div>
                    </div>
                    <div className='flex mt-10 justify-center items-center'>
                        <img src="/svg/logo-banner-1.svg" alt="" />
                    </div>
                    <div className="flex justify-center">
                        <div className="flex space-x-5 items-center w-10/12 pt-5 md:flex-nowrap flex-wrap justify-center">
                            <FlipLuckyMoney className='relative ml-4 md:ml-0 wrap__flip-image' frontImage={'/images/home/phong-bi-1.png'} backImage={'/images/home/phong-bi-1-back.png'} />
                            <FlipLuckyMoney className='wrap__flip-image' frontImage={'/images/home/phong-bi-2.png'} backImage={'/images/home/phong-bi-2-back.png'} />
                            <FlipLuckyMoney className='wrap__flip-image' frontImage={'/images/home/phong-bi-3.png'} backImage={'/images/home/phong-bi-3-back.png'} />
                        </div>
                    </div>

                    {/* component tham gia chương trình */}
                    <div id={'propzythree-step'} className='flex mt-10 justify-center items-center'>
                        <img src="/svg/banner-title/banner-title-2.svg" alt="" />
                    </div>


                    <div className="flex justify-center">
                        <div className='flex justify-center flex-nowrap w-10/12 md:space-x-24 py-8'>
                            <img className='md:w-2/12 w-4/12' src="/svg/join-step-1.svg" alt="" />
                            <p className='text-white md:text-6xl mt-24'> &gt; </p>
                            <img className='md:w-2/12 w-4/12' src="/svg/join-step-2.svg" alt="" />
                            <p className='text-white md:text-6xl mt-24'> &gt; </p>
                            <img className='md:w-2/12 w-4/12' src="/svg/join-step-3.svg" alt="" />
                        </div>
                    </div>

                    <div className='flex mt-4 justify-center items-center'>
                        <div onClick={() => scrollToElement('propzytree-lixi')} className="btn-orange w-2/12">HÁI LÌ XÌ NGAY</div>
                    </div>

                    <div id={'rule-event'} className='flex mt-10 justify-center items-center'>
                        <img src="/svg/banner-title/banner-title-3.svg" alt="" />
                    </div>



                    {/* component collapse */}
                    <div className="md:w-8/12 px-5 md:px-0 w-full mx-auto" >
                        <Collapse />
                    </div>

                    <div className='flex mt-10 justify-center items-center'>
                        <img src="/svg/banner-title/banner-title-4.svg" alt="" />
                    </div>

                    <div className="container desktop-section w-10/12  mx-auto flex flex-row space-x-2 md:space-x-8 md:justify-center ">
                        <div className='md:w-2/12 w-4/12 overflow-hidden rounded-lg shadow-lg  '>
                            <img src="/svg/logo-partner-1.svg" alt="" />
                        </div>
                        <div className='md:w-2/12 w-4/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-2.svg" alt="" />
                        </div>
                        <div className='md:w-2/12 w-4/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-3.svg" alt="" />
                        </div>
                        <div className='md:w-2/12 w-4/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-4.svg" alt="" />
                        </div>
                        <div className='md:w-2/12 w-4/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-5.svg" alt="" />
                        </div>
                    </div>

                    <div className="container mobile-section w-10/12  mx-auto flex flex-row space-x-2 md:space-x-8 justify-center ">
                        <div className='md:w-2/12 w-4/12 overflow-hidden rounded-lg shadow-lg  '>
                            <img src="/svg/logo-partner-1.svg" alt="" />
                        </div>
                        <div className='md:w-2/12 w-4/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-2.svg" alt="" />
                        </div>
                        <div className='md:w-2/12 w-4/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-3.svg" alt="" />
                        </div>
                    </div>
                    <br />
                    <div className="container mobile-section w-10/12  mx-auto flex flex-row space-x-2 md:space-x-8 justify-center ">
                        <div className='md:w-2/12 w-4/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-4.svg" alt="" />
                        </div>
                        <div className='md:w-2/12 w-4/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-5.svg" alt="" />
                        </div>
                    </div>

                    <div className='flex mt-10 justify-center items-center'>
                        <img src="/svg/banner-title/banner-title-5.svg" alt="" />
                    </div>


                    <div id={'propzycare-introduce'} className='relative w-10/12 mx-auto flex flex-wrap flex-row'>
                        <div className='md:w-4/12 w-full'>
                            <img src="/svg/img-propzycare.svg" className='w-full' alt="" />
                            <p className='pt-10 text-white'>
                                <span className='font-bold'>Propzy Care  </span>  – Gói dịch vụ chăm sóc khách hàng xuyên suốt trước – trong và cả sau khi giao dịch bất động sản tại Propzy. Với gói dịch vụ Propzy Care, khách hàng được chăm sóc & hưởng ưu đãi miễn phí như vận chuyển, dọn nhà, cùng nhiều gói dịch vụ cộng thêm khác từ các đối tác của Propzy.
                                </p>

                            <p className='pt-5 text-white'>
                                Nhận ngay gói Propzy Care trị giá 2.000.000 VND khi đăng ký thuê nhà từ ngày 25/01 - 28/02/2021 và hoàn tất hợp đồng trước 30/03/2021
                            </p>
                        </div>
                        <div className='md:w-6/12 w-full flex py-6 flex-col justify-center md:ml-40'>
                            <div className='relative py-3 '>
                                <div className='relative px-4 bg-blue-300 bg-opacity-25 md:mx-8 shadow rounded-3xl'>
                                    <div className='max-w-md mx-auto'>
                                        <div className='flex items-center '>
                                            <div className="block pl-2 pt-16 font-bold text-xl text-center ">
                                                <h2 className="text-3xl font-semibold hight-light justify-center">BẠN CÓ DỰ ĐỊNH THUÊ NHÀ?</h2>
                                                <p className="text-1xl text-white font-normal">Hơn 100.000 bất động sản tại Propzy sẵn sàng giao dịch!</p>
                                            </div>
                                        </div>
                                        <Formik
                                            initialValues={{ name: '', email: '', phone: '', price: '' }}
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
                                                const order = await userServices.createOrders({ ...values, price: formContact.price });

                                                if (order && order.data) {
                                                    const sendThanksMail = await userServices.sendThanks({
                                                        user: order.data
                                                    })
                                                    Modal.success({
                                                        title: 'Cảm ơn bạn đã gửi thông tin',
                                                        content: 'Cảm ơn bạn đã tin tưởng dịch vụ của chúng tôi. Chúng tôi sẽ liên lạc nhanh nhất có thể ',
                                                        okText: 'Đồng ý',
                                                        closable: true
                                                    })
                                                } else {
                                                    Modal.error({
                                                        title: 'Email đã tồn tại',
                                                        content: 'Email bạn gửi tư vấn đã tồn tại, vui lòng gửi lại email khác',
                                                        okText: 'Đồng ý',
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
                                                    <div className="py-7 space-y-3">
                                                        <input name="name" type="text" value={values.name} onChange={handleChange} className='default__input w-full' placeholder='Họ và tên(*)' />
                                                        {errors.name && touched.name && <div className='my-1 text-red-300'>{errors.name}</div>}
                                                        <input name="email" type="text" value={values.email} onChange={handleChange} className='default__input w-full' placeholder='Email(*)' />
                                                        {errors.email && touched.email && <div className='my-1 text-red-300'>{errors.email}</div>}
                                                        <input name="phone" type="tel" value={values.phone} onChange={handleChange} className='default__input w-full' placeholder='Số điện thoại(*)' />
                                                        {errors.phone && touched.phone && <div className='my-1 text-red-300'>{errors.phone}</div>}
                                                        <Dropdown trigger={['click']} overlay={listPrice}>
                                                            <input value={formContact.price} readOnly className='cursor-pointer default__input w-full' placeholder='Giá muốn thuê(*)'></input>
                                                        </Dropdown>
                                                        <button type='submit' className="onhover-btn btn-orange place-self-center mt-5 mx-auto w-2/5">TƯ VẤN NGAY</button>
                                                    </div>
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
            <LuckyMoney isOpen={isOpenLuckyMoney} onClose={onCloseLuckyMoney} id='home-page' />
        </div>
    );
};

HomeContainer.propTypes = {};

export default HomeContainer;