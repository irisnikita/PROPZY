// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Containers
import Header from 'containers/Header';

// Components
import ImageSlider from 'components/ImageSlider';

const HomeContainer = () => {
    return (
        <div className='home-page__wrap'>
            <Header />
            <section className='home-page__main'>
                <section className='main-content--1 md:py-5'>
                    <ImageSlider />
                </section>
                <section className='main-content--2 pt-80 -top-20'>
                    <div className='relative w-10/12 mx-auto flex flex-wrap flex-row'>
                        <div className='w-4/12'>
                            <img src="/images/home/home-03.png" className='w-full' alt="" />
                            <p className='pt-10 text-white'>
                                Nhà thật sự có Tết khi nơi đó có tình thân sum vầy. Nhà to cũng được, nhà nhỏ cũng được, miễn có nhau là được, <span className="hight-light">
                                    vì CÓ NHÀ LÀ CÓ TẾT.
                            </span>
                                <div className='py-2'></div>
Tham gia ngay <span className='hight-light'>HÁI LÌ XÌ - KHAI XUÂN ĐÓN LỘC</span> cho cả năm may mắn cùng những cơ hội ‘rinh’ nhiều phần quà hấp dẫn và giá trị lên đến <span className='hight-light'>1 tỷ đồng.</span>
                            </p>
                        </div>
                        <div className='w-8/12 relative'>
                            <img src="/images/home/home-04.png" className='w-full' alt="" />
                            <div className='text-yellow-300 italic font-bold absolute right-10'>“Nhấp vào bao lì xì để nhận quà”</div>
                        </div>

                    </div>
                    <div className='flex mt-10 justify-center items-center'>
                        <img src="/svg/logo-banner-1.svg" alt="" />

                    </div>
                </section>
            </section>
        </div>
    );
};

HomeContainer.propTypes = {};

export default HomeContainer;