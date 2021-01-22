// Libraries
import React, { ReactPortal, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { motion } from 'framer-motion';

// Styles
import styles from './styles.module.scss';

const LuckyMoney = (props) => {
    // Props
    const { onClose, isOpen, id } = props;

    useEffect(() => {
        if (isOpen) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'auto';
        }
    }, [isOpen])

    const onClickWrap = () => {
        props.onClose();
    }
    const onClickContainer = (e) => {
        e.stopPropagation();
    }

    return isOpen && id ?
        ReactDOM.createPortal((
            <div onClick={onClickWrap} className={classnames(styles['modal-wrapper'], 'flex', 'h-full', 'items-center', 'justify-center')}>
                <motion.div layoutId={`title-container-${id}`} onClick={onClickContainer} className='animate__animated animate__fadeInUp animate__slow'>
                    <img className={styles['img-lucky-money']} src="/svg/lucky-money/step-1.svg" alt="" />
                </motion.div>
            </div>
        ), document.querySelector('body')) : null
};

LuckyMoney.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
};
LuckyMoney.defaultProps = {
    onClose: () => { },
    isOpen: false,
}

export default LuckyMoney;