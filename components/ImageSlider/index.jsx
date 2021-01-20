// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const ImageSlider = () => {
    // State 
    const [listImages] = useState([
        { key: '1', path: '/svg/image-slider-1.svg' },

    ])

    // Setting slider
    const settingsSlider = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='w-8/12 mx-auto'>
            <Slider {...settingsSlider}>
                <div className='relative outline-none'>
                    <img className='w-full' src="/svg/image-slider-1.svg" alt="" />
                    <div className="btn-orange absolute bottom-0 pl-8-rem">PROPZY CARE</div>
                </div>
                <div className='relative outline-none'>
                    <div className='relative flex'>
                        <img width={310} src='/images/slider/slider-2-left.png' alt="" />
                        <img className='md:w-10/12 absolute left-40 top-5' src='/images/slider/slider-2-right.png' alt="" />
                    </div>
                    <div className="btn-orange absolute pb-7-rem px-20 right-40">HÁI LÌ XÌ NGAY</div>
                </div>
            </Slider>
        </div>
    );
};

ImageSlider.propTypes = {};
ImageSlider.defaultProps = {}

export default ImageSlider;