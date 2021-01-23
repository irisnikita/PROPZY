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

    return (
        <div>
            {isFlip ? (
                <div className='relative animate__animated animate__flipInY flex items-center justify-center flex-col'>
                    <img src={backImage} alt="" />
                    <div className="absolute flex justify-center bottom-10">
                        <div onClick={() => setOpenLuckyMoney(true)} className="btn-blue">HÁI LÌ XÌ</div>
                    </div>
                </div>
            ) : (
                    <div className='relative flex items-center justify-center flex-col'>
                        <img src={frontImage} alt="" />
                        <div className="absolute flex justify-center bottom-10">
                            <div onClick={onClickSeePrize} className="btn-blue">XEM QUÀ</div>
                        </div>
                    </div>
                )}
            <LuckMoney isOpen={isOpenLuckyMoney} id={'flip-lucky0=-money'} onClose={() => setOpenLuckyMoney(false)} />
        </div>
    );
};

FlipLuckyMoney.propTypes = {};

export default FlipLuckyMoney;