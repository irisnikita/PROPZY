import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LuckMoney from 'components/LuckyMoney'

const FlipLuckyMoney = (props) => {
    const { frontImage = '', backImage = '' } = props;

    const [isFlip, setFlip] = useState(false);
    const [isOpenLuckyMoney, setOpenLuckyMoney] = useState(false);

    const onClickSeePrize = () => {
        setFlip(true);
    }
    
    const scrollToElement = (element) => {
        if (document.getElementById(element)) {

            document.getElementById(element).scrollIntoView({ block: 'start' });
        }
    }
    
    const onCloseLuckyMoney = (newProps) => {
        setOpenLuckyMoney(false)

        if (newProps === 'open-next') {
            setTimeout(() => {
                setOpenLuckyMoney(true)
            }, 200)
        }
    }

    return (
        <div className={props.className}>
            {isFlip ? (
                <div className='flip-lucky-money relative animate__animated animate__flipInY flex items-center justify-center flex-col'>
                    <img src={backImage} alt="" />
                    <div className="absolute flex justify-center md:bottom-5 bottom-5">
                        <div onClick={() => scrollToElement('propzytree-lixi')} className="btn-blue">HÁI LÌ XÌ</div>
                    </div>
                </div>
            ) : (
                    <div className='flip-lucky-money relative flex items-center justify-center flex-col'>
                        <img src={frontImage} alt="" />
                        <div className="absolute flex justify-center md:bottom-5 bottom-5">
                            <div onClick={onClickSeePrize} className="btn-blue">XEM QUÀ</div>
                        </div>
                    </div>
                )}
            <LuckMoney isOpen={isOpenLuckyMoney} id={'flip-lucky0=-money'} onClose={onCloseLuckyMoney} />
        </div>
    );
};

FlipLuckyMoney.propTypes = {};

export default FlipLuckyMoney;