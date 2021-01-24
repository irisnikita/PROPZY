// Libraries
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

// Components
import LuckyMoney from 'components/LuckyMoney'

const ImageSlider = () => {
    // State 
    const [listImages] = useState([
        { key: '1', path: '/svg/image-slider-1.svg' },
    ])
    const [isOpenLuckyMoney, setOpenLuckyMoney] = useState(false);

    // Setting slider
    const settingsSlider = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i) {
            return (
                <a>
                    <div className="slick__dot w-3 h-3 rounded-full"></div>
                </a>
            );
        },
    };

    return (
        <div className='w-full md:w-8/12 mx-auto'>
            <Slider {...settingsSlider}>
                <div className='relative outline-none slider-wrap__item'>
                    <img className='w-full' src="/svg/image-slider-1.svg" alt="" />
                    <div className="btn-orange mt-5 md:mt-0 relative mx-auto md:absolute md:bottom-0 pl-8-rem">PROPZY CARE</div>
                </div>
                <div className='relative outline-none'>
                    <div className='relative flex flex-wrap flex-col-reverse items-center md:flex-row'>
                        <img className={'md:w-96 w-2/3'} src='/images/Slider/slider-2-left.png' alt="" />
                        <img className='w-full md:w-10/12 md:absolute relative -left-7 md:left-60 md:top-7' src='/images/Slider/slider-2-right.png' alt="" />
                    </div>
                    <div
                        onClick={() => setOpenLuckyMoney(true)}
                        className="btn-orange mb-10 md:mb-0  relative mx-auto mt-5 md:mt-0 md:absolute pb-7-rem md:px-20 md:right-40 animate__animated animate__slow animate__infinite animate__swing"
                    >
                        HÁI LÌ XÌ NGAY
                    </div>
                </div>
            </Slider>
            <LuckyMoney isOpen={isOpenLuckyMoney} onClose={() => setOpenLuckyMoney(false)} id='image-slider' />
        </div>
    );
};

ImageSlider.propTypes = {};
ImageSlider.defaultProps = {}

export default ImageSlider;