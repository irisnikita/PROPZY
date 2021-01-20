// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue
} from 'framer-motion';

// Containers
import Header from 'containers/Header';

// Components
import ImageSlider from 'components/ImageSlider';

const HomeContainer = () => {
    // Framer motion
    const { scrollYProgress } = useViewportScroll();
    const yViewScroll = useTransform(scrollYProgress, [0, 0.5, 1], [0, -200, -250]);
    const yLuckyMoney1 = useTransform(scrollYProgress, [0, 0.5, 1], [-600, 0, 0]);
    const yLuckyMoney2 = useTransform(scrollYProgress, [0, 1], [500, -200]);

    return (
        <div className='home-page__wrap'>
            <Header />
            <section className='home-page__main'>
                <section className='main-content--1 md:py-5'>
                    <ImageSlider />
                </section>
                <motion.section style={{ y: yViewScroll }} className='main-content--2 pt-60 -top-20'>
                    <div className='relative w-10/12 mx-auto flex flex-wrap flex-row'>
                        <div className='w-4/12'>
                            <motion.img
                                animate={{
                                    rotate: [-20, 20, -20],
                                }}
                                transition={{
                                    duration: 3,
                                    ease: "easeInOut",
                                    times: [0, 0.5, 1],
                                    repeat: Infinity
                                }}
                                src="/images/home/home-03.png" className='w-full' alt="" />
                            <p className='pt-10 text-white' data-aos="fade-right">
                                Nhà thật sự có Tết khi nơi đó có tình thân sum vầy. Nhà to cũng được, nhà nhỏ cũng được, miễn có nhau là được,
                                <span className="hight-light">
                                    vì CÓ NHÀ LÀ CÓ TẾT.
                                </span>
                                <p className='py-2'></p>
                                Tham gia ngay
                                <span className='hight-light'>HÁI LÌ XÌ - KHAI XUÂN ĐÓN LỘC</span>
                                cho cả năm may mắn cùng những cơ hội ‘rinh’ nhiều phần quà hấp dẫn và giá trị lên đến
                                <span className='hight-light'>1 tỷ đồng.</span>
                            </p>
                        </div>
                        <div className='w-8/12 relative'>
                            <motion.img
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                    times: [0, 0.5, 1],
                                    loop: Infinity,
                                    repeatDelay: 1
                                }}
                                src="/images/home/home-04.png" className='w-full' alt="" />
                            <div className='text-yellow-300 italic font-bold absolute right-10'>“Nhấp vào bao lì xì để nhận quà”</div>
                        </div>

                    </div>
                    <div className='flex mt-10 justify-center items-center'>
                        <img src="/svg/logo-banner-1.svg" alt="" />
                    </div>
                    <div className="flex justify-center">
                        <div className="flex space-x-5 items-center w-10/12 pt-5">
                            <motion.div style={{ y: yLuckyMoney1 }} className='relative flex items-center justify-center flex-col'>
                                <img src="/images/home/phong-bi-1.png" alt="" />
                                <div className="btn-blue relative bottom-20">XEM QUÀ</div>
                            </motion.div>
                            <motion.div style={{ y: yLuckyMoney2 }} className='relative flex items-center justify-center flex-col'>
                                <img src="/images/home/phong-bi-2.png" alt="" />
                                <div className="btn-blue relative bottom-20">XEM QUÀ</div>
                            </motion.div>
                            <motion.div style={{ y: yLuckyMoney1 }} className='relative flex items-center justify-center flex-col'>
                                <img src="/images/home/phong-bi-3.png" alt="" />
                                <div className="btn-blue relative bottom-20">XEM QUÀ</div>
                            </motion.div>
                        </div>
                    </div>
                    <div className='flex mt-10 justify-center items-center'>
                        <img src="/svg/banner-title/banner-title-2.svg" alt="" />
                    </div>
                </motion.section>
            </section>
        </div>
    );
};

HomeContainer.propTypes = {};

export default HomeContainer;