// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';

// Components
import LuckyMoney from 'components/LuckyMoney'

// Styles
import styles from './styles.module.scss';

const ApricotBlossom = () => {
    // State
    const [luckyMoneys, setLuckyMoneys] = useState([
        { x: '26.63%', y: '48.74%', rotate: 'rotate-45', width: 23 },
        { x: '29.9%', y: '55.17%', },
        { x: '36.87%', y: '44.6%', width: 23 },
        { x: '39.52%', y: '63.94%', rotate: 'rotate-45' },
        { x: '42.66%', y: '66.88%', },
        { x: '45.66%', y: '53.75%', width: 30 },
        { x: '49.94%', y: '67.91%' },
        { x: '58.68%', y: '67.2%', width: 23, rotate: 'rotate-45' },
        { x: '68.79%', y: '73.69%', },
        { x: '76.74%', y: '66.17%', },
        { x: '82.92%', y: '51.03%', width: 23, rotate: 'rotate-45' },
        { x: '66.80%', y: '60.54%', rotate: 'rotate-45', width: 23 },
        { x: '59.44%', y: '50.68%', },
        { x: '66.95%', y: '46.32%', rotate: 'rotate-45' },
        { x: '74.12%', y: '43.73%', rotate: 'rotate-45', width: 23 },
        { x: '81.04%', y: '40.74%', width: 30 },
        { x: '60.59%', y: '29.92%', rotate: 'rotate-45', width: 23 },
        { x: '66.97%', y: '33.6%', },
        { x: '71.94%', y: '25.47%', rotate: 'rotate-45' },
        { x: '76.06%', y: '19.30%', width: 30 },
        { x: '84.81%', y: '27.97%', width: 23 },
        { x: '95.01%', y: '18.09%', width: 23, rotate: 'rotate-45' },
        { x: '76.56%', y: '4.22%' },
        { x: '53.19%', y: '20.66%', rotate: 'rotate-3' },
        { x: '58.55%', y: '10.47%' },
        { x: '47.59%', y: '25.24%' },
        { x: '58.55%', y: '10.47%', rotate: 'rotate-45' },
        { x: '50.15%', y: '34.24%' },
        { x: '45.22%', y: '35.59%', rotate: 'rotate-45', width: 24 },

    ])
    const [isAnimationTree, setAnimationTree] = useState(false);
    const [idLuckyMoneySelected, setIdLuckyMoneySelected] = useState(null);
    const [isOpenLuckyMoneyModal, setOpenLuckyMoneyModal] = useState(false);

    // Function to set animation for tree
    const onClickLuckyMoney = (index) => {
        setAnimationTree(true)

        setIdLuckyMoneySelected(index)

        setOpenLuckyMoneyModal(true)

        setTimeout(() => {
            setAnimationTree(false)
        }, [1500])
    }

    const onCloseLuckyMoneyModal = () => {
        console.log('djio')
        setIdLuckyMoneySelected(null)
    }

    return (
        <AnimateSharedLayout>
            <div
                className={classnames('relative animate__animated animate__slow', {
                    'animate__wobble': isAnimationTree,
                })}
            >
                <img

                    src="/images/home/apricot-blossom.png" alt=""
                />
                {luckyMoneys.length ? luckyMoneys.map((luckyMoney, index) => {
                    return (
                        <div
                            onClick={() => onClickLuckyMoney(index)}
                            key={luckyMoney.x + index}
                            className={classnames(
                                styles['lucky-money__item'],
                                'absolute',
                                'animate__swing animate__animated animate__infinite animate__slow',
                            )}
                            style={{
                                top: luckyMoney.y,
                                left: luckyMoney.x
                            }}
                        >
                            <img style={{ width: luckyMoney.width ? luckyMoney.width : 18 }} className={classnames(styles['lucky-money__img'], 'transform', luckyMoney.rotate)} src="/images/home/lucky-money.png" alt="" />
                        </div>
                    )
                }) : null}
            </div>
            <AnimatePresence>
                <LuckyMoney isOpen={isOpenLuckyMoneyModal} onClose={() => setOpenLuckyMoneyModal(false)} id={idLuckyMoneySelected} />
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};

ApricotBlossom.propTypes = {};

export default ApricotBlossom;