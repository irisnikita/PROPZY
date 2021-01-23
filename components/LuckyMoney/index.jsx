// Libraries
import React, { ReactPortal, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { motion } from 'framer-motion';

// Styles
import styles from './styles.module.scss';

// Components
import Unregistered from './components/Unregistered';

// Constant
const steps = [
    { key: 'step-1', image: '/svg/lucky-money/step-1.svg' },
    { key: 'step-2', image: '/svg/lucky-money/step-2.svg' },
]

const stateUser = [
    { key: 'register', label: 'Đã đăng ký' },
    { key: 'unregister', label: 'Chưa đăng ký' },
    { key: 'out', label: 'Hết lượt' },
]

const receivePrizeTypes = [
    { key: 'isReceive', label: 'Nhận được quà' },
    { key: 'isNotReceive', label: 'Không nhận được quà' },
]

const LuckyMoney = (props) => {
    // Props
    const { onClose, isOpen, id } = props;

    // State
    const [currentStep, setCurrentStep] = useState(steps[0]);
    const [isStepOpen, setStepOpen] = useState(false);
    const [isRegister, setRegister] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.querySelector('body').style.overflow = 'hidden';

            setTimeout(() => {
                if (document.querySelector('#lucky-money-image__wrap')) {
                    document.querySelector('#lucky-money-image__wrap').classList.remove('animate__fadeInUp')
                }
                setCurrentStep(steps[1]);

                setTimeout(() => {
                    setStepOpen(true);
                }, [1000])
            }, 2000)
        } else {
            document.querySelector('body').style.overflow = 'auto';
        }

        return () => {
            resetState()
        }
    }, [isOpen])

    const resetState = () => {
        setCurrentStep(steps[0])
        setStepOpen(false)
    }

    const onCloseModal = () => {
        if (document.querySelector('#lucky-money-image__wrap')) {
            document.querySelector('#lucky-money-image__wrap').classList.remove('animate__slow')
            document.querySelector('#lucky-money-image__wrap').classList.add('animate__fadeOut')

            document.querySelector('#lucky-money__wrap').classList.add('animate__fadeOut')

            setTimeout(() => {
                props.onClose();
            }, 1000)
        }
    }

    const onClickContainer = (e) => {
        e.stopPropagation();
    }

    const showRenderStepOpen = () => {
        return isRegister ? (
            <div>sd</div>
        ) : (
                <Unregistered onClose={onCloseModal} />
            )
    }

    return isOpen && id ?
        ReactDOM.createPortal((
            <div id={'lucky-money__wrap'} onClick={onCloseModal} className={classnames(styles['modal-wrapper'], 'animate__animated')}>
                <motion.div
                    id={`lucky-money-image__wrap`}
                    layoutId={`title-container-${id}`}
                    onClick={onClickContainer}
                    className={classnames(
                        'animate__animated animate__repeat-1 animate__fadeInUp animate__slow',
                    )}
                >
                    <img className={classnames({
                        [styles['img-lucky-money']]: true,
                        'hidden': isStepOpen
                    })}
                        src={currentStep.image}
                        alt=""
                    />
                    {isStepOpen ? showRenderStepOpen() : null}
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