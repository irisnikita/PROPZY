// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {
    motion,
} from 'framer-motion';

// Containers
import Header from 'containers/Header';
import Footer from 'containers/Footer'

// Components
import ImageSlider from 'components/ImageSlider';
import Collapse from 'components/Collapse';

const HomeContainer = () => {
    return (
        <div className='home-page__wrap'>
            <Header />
            <section className='home-page__main'>
                <section className='main-content--1 md:py-5'>
                    <ImageSlider />
                </section>
                <section className='main-content--2 pt-40'>
                    <img src="/images/home/home-02.png" className='absolute -top-20' alt="" />
                    <div className='relative w-10/12 mx-auto flex flex-wrap flex-row'>
                        <div className='w-4/12'>
                            <img
                                src="/images/home/home-03.png" className='w-full' alt="" />
                            <div className='pt-10 text-white' data-aos="fade-right">
                                Nhà thật sự có Tết khi nơi đó có tình thân sum vầy. Nhà to cũng được, nhà nhỏ cũng được, miễn có nhau là được,
                                <span className="hight-light">
                                    vì CÓ NHÀ LÀ CÓ TẾT.
                                </span>
                                <p className='py-2'></p>
                                Tham gia ngay
                                <span className='hight-light'>HÁI LÌ XÌ - KHAI XUÂN ĐÓN LỘC</span>
                                cho cả năm may mắn cùng những cơ hội ‘rinh’ nhiều phần quà hấp dẫn và giá trị lên đến
                                <span className='hight-light'>1 tỷ đồng.</span>
                            </div>
                        </div>
                        <div className='w-8/12 relative'>
                            <img

                                src="/images/home/home-04.png" className='w-full' alt="" />
                            <div className='text-yellow-300 italic font-bold absolute right-10'>“Nhấp vào bao lì xì để nhận quà”</div>
                        </div>

                    </div>
                    <div className='flex mt-10 justify-center items-center'>
                        <img src="/svg/logo-banner-1.svg" alt="" />
                    </div>
                    <div className="flex justify-center">
                        <div className="flex space-x-5 items-center w-10/12 pt-5">
                            <motion.div className='relative flex items-center justify-center flex-col'>
                                <img src="/images/home/phong-bi-1.png" alt="" />
                                <div className="btn-blue relative bottom-20">XEM QUÀ</div>
                            </motion.div>
                            <motion.div className='relative flex items-center justify-center flex-col'>
                                <img src="/images/home/phong-bi-2.png" alt="" />
                                <div className="btn-blue relative bottom-20">XEM QUÀ</div>
                            </motion.div>
                            <motion.div className='relative flex items-center justify-center flex-col'>
                                <img src="/images/home/phong-bi-3.png" alt="" />
                                <div className="btn-blue relative bottom-20">XEM QUÀ</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* component tham gia chương trình */}
                    <div className='flex mt-10 justify-center items-center'>
                        <img src="/svg/banner-title/banner-title-2.svg" alt="" />
                    </div>


                    <div className="flex justify-center">
                        <div className='flex justify-center w-10/12 space-x-24 py-8'>
                            <img className='w-2/12 ' src="/svg/join-step-1.svg" alt="" />
                            <p className='text-white text-6xl mt-24'> &gt; </p>
                            <img className='w-2/12 ' src="/svg/join-step-2.svg" alt="" />
                            <p className='text-white text-6xl mt-24'> &gt; </p>
                            <img className='w-2/12 ' src="/svg/join-step-3.svg" alt="" />
                        </div>
                    </div>

                    <div className='flex mt-4 justify-center items-center'>
                        <div className="btn-orange w-2/12">HÁI LÌ XÌ NGAY</div>
                    </div>

                    <div className='flex mt-10 justify-center items-center'>
                        <img src="/svg/logo-banner-tittle.svg" alt="" />
                        <p className='text-3xl font-semibold mb-5 text-white absolute '>THỂ LỆ CHƯƠNG TRÌNH</p>
                    </div>


                    {/* component collapse */}
                    <div className="w-8/12 mx-auto" >
                        <Collapse />
                    </div>

                    {/* Component Đối tác                              */}
                    <div className='flex mt-10 justify-center items-center'>
                        <img src="/svg/logo-banner-tittle.svg" alt="" />
                        <p className='text-3xl font-semibold mb-5 text-white absolute '>ĐỐI TÁC CỦA PROPZY</p>
                    </div>

                    <div className="container w-10/12  mx-auto flex flex-row space-x-8 justify-center ">
                        <div className='w-2/12 overflow-hidden rounded-lg shadow-lg  '>
                            <img src="/svg/logo-partner-1.svg" alt="" />
                        </div>
                        <div className='w-2/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-2.svg" alt="" />
                        </div>
                        <div className='w-2/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-3.svg" alt="" />
                        </div>
                        <div className='w-2/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-4.svg" alt="" />
                        </div>
                        <div className='w-2/12 overflow-hidden rounded-lg shadow-lg'>
                            <img src="/svg/logo-partner-5.svg" alt="" />
                        </div>
                    </div>

                    {/* Component giới thiệu */}
                    <div className='flex mt-10 justify-center items-center'>
                        <img src="/svg/logo-banner-tittle.svg" alt="" />
                        <p className='text-3xl font-semibold mb-5 text-white absolute '>GIỚI THIỆU PROPZYCARE</p>
                    </div>
                    <div className='relative w-10/12 mx-auto flex flex-wrap flex-row'>
                        <div className='w-4/12'>
                            <img src="/svg/img-propzycare.svg" className='w-full' alt="" />
                            <p className='pt-10 text-white'>
                                <span className='font-bold'>Propzy Care  </span>  – Gói dịch vụ chăm sóc khách hàng xuyên suốt trước – trong và cả sau khi giao dịch bất động sản tại Propzy. Với gói dịch vụ Propzy Care, khách hàng được chăm sóc miễn phí như: Hưởng các ưu đãi như vận chuyển và dọn nhà, Tư vấn miễn phí dịch vụ thẩm định - pháp lý – tín dụng – vay vốn, cùng nhiều gói dịch vụ cộng thêm khác.
                                </p>

                            <p className='pt-5 text-white'>
                                Đăng Ký xem nhà (Mua hoặc Thuê) ngay tại đây từ 25/01 - 28/02/2021 để nhận gói ưu đãi Propzy CARE trị giá 2.000.000 VNĐ và phát sinh giao dịch trước ngày 30/03/2021.
                                </p>
                        </div>
                        <div className='w-6/12 flex py-6 flex-col justify-center ml-40'>
                            <div className='relative py-3 '>
                                <div className='relative px-4 bg-blue-300 bg-opacity-25 mx-8 shadow rounded-3xl'>
                                    <div className='max-w-md mx-auto'>
                                        <div className='flex items-center '>
                                            <div className="block pl-2 pt-16 font-bold text-xl text-center ">
                                                <h2 className="text-3xl font-semibold hight-light justify-center">BẠN CÓ NHU CẦU THUÊ BẤT ĐỘNG SẢN?</h2>
                                                <p className="text-1xl text-white font-normal">Hơn 100.000 bất động sản tại Propzy sẵn sàng giao dịch!</p>
                                            </div>
                                        </div>
                                        <div className='py-7 space-y-3'>
                                            <input type="text" className='default__input w-full' placeholder="Họ và tên" />

                                            <input type="number" className='default__input w-full' placeholder="Số điện thoại" />

                                            <input type="email" className='default__input w-full' placeholder="Email" />

                                            <select name='price' className='default__input w-full' >
                                                <option className='text-white bg-transparent' value="" > Giá muốn thuê </option>
                                                <option className='text-black bg-transparent' value='dưới 1 tỷ '> Dưới 1 tỷ  </option>
                                                <option className='text-black bg-transparent' value='dưới 2 tỷ '> 1 -3 tỷ  </option>
                                                <option className='text-black bg-transparent' value='dưới 3 tỷ '> trên 3 tỷ </option>

                                            </select>
                                            <div className="btn-orange place-self-center mt-5 mx-32 w-2/5">TƯ VẤN NGAY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    );
};

HomeContainer.propTypes = {};

export default HomeContainer;