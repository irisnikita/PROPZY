// Libraries
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
import classnames from 'classnames';

// Styles
import styles from 'components/LuckyMoney/styles.module.scss';

const Unregistered = (props) => {
    // Props
    const { onClose } = props;

    // State 
    const [isOpenRegister, setOpenRegister] = useState(false);
    const [isRegisterSuccess, setRegisterSuccess] = useState(false);
    const [isRegisterRent, setRegisterRent] = useState(false);

    // Function
    const onClickRegisterUser = () => {
        setRegisterSuccess(true)
    }

    const onClickAdvisory = () => {
        typeof onClose == 'function' && onClose();
    }

    return (
        <div className='animate__animated animate__fadeIn relative flex items-center'>
            <img className={styles['img-lucky-money']} src={'/svg/lucky-money/un-register.svg'} alt="" />
            <div className="flex justify-center absolute bottom-5 w-full">
                <div className="btn-orange">
                    XEM QUÀ
                </div>
            </div>
        </div>
    );
};

Unregistered.propTypes = {
    onClose: PropTypes.func
};
Unregistered.defaultProps = {
    onClose: () => { }
};

export default Unregistered;