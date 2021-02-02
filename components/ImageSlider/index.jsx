// Libraries
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import {Row, Col} from 'antd'

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
        autoplay: false,
        autoplaySpeed: 5000,
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

    const onCloseModalMoneyLucky = (newProps) => {
        setOpenLuckyMoney(false);

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

    const onClickCare = () => {
        if (document.getElementById('propzycare-introduce')) {
            document.getElementById('propzycare-introduce').scrollIntoView()
        }
    }

    return (
        <div className='w-full md:w-8/12 mx-auto'>
            <Slider {...settingsSlider}>
                <div className='relative outline-none'>
                    <div className='relative flex-wrap flex-col-reverse flex md:hidden items-center md:flex-row'>
                        <img className={'md:w-96 w-2/3'} src='/images/Slider/slider-2-left.png' alt="" />
                        <img className='w-full md:w-10/12 md:absolute relative -left-7 md:left-60 md:top-7' src='/images/Slider/slider-2-right.png' alt="" />
                    </div>
                    <div className='hidden md:block'>
                        <img src="/images/Group 63.png" width={'100%'} alt="" />
                    </div>
                    <div
                        onClick={() => scrollToElement('propzytree-lixi')}
                        className="onhover-btn btn-orange mb-10 md:mb-0  relative mx-auto mt-5 md:mt-0 md:absolute bottom-0 md:bottom-16 md:px-20 md:right-40 animate__animated animate__slow animate__infinite animate__swing"
                    >
                        HÁI LÌ XÌ NGAY
                    </div>
                </div>
                <div className='relative outline-none justify-center slider-wrap__item'>
                    <div className='hidden md:block'>
                        <img className='w-full hidden relative' src="/images/propzy-care-hết-14 1.png" alt="" />
                    </div>
                    <div className='relative'>
                        <img className='w-3/4 mx-auto h-auto' src="/images/Asset 13.png" alt=""/>
                        <img className='w-3/4 mx-auto h-auto' src="/images/Asset 14.png" alt=""/>
                    </div>
                    <div onClick={onClickCare} className="btn-orange md:mt-0 relative mx-auto md:absolute md:bottom-5 pl-8-rem">PROPZY CARE</div>
                </div>
            </Slider>
            <LuckyMoney isOpen={isOpenLuckyMoney} onClose={onCloseModalMoneyLucky} id='image-slider' />
        </div>
    );
};

ImageSlider.propTypes = {};
ImageSlider.defaultProps = {}

export default ImageSlider;