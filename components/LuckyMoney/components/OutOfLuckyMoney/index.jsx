import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link'

// Styles
import styles from 'components/LuckyMoney/styles.module.scss';

const OutOfLuckyMoney = (props) => {
    return (
        <div className='animate__animated animate__fadeIn relative flex flex-row justify-center items-center'>
            <img className={styles['img-lucky-money']} src={'/svg/lucky-money/out-lucky-money.svg'} alt="" />
            <div className={classnames('flex justify-center absolute w-full', styles['btn-make-mission'])}>
                <Link href='/user?tab=tab-2'>
                    <div className="btn-orange" onClick={props.onClose}>
                        LÀM NHIỆM VỤ
                </div>
                </Link>
            </div>
        </div>
    );
};

OutOfLuckyMoney.propTypes = {};

export default OutOfLuckyMoney;