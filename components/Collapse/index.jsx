// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Styles
import styles from './styles.module.scss';

const index = () => {
    // State
    const [panels, setPanels] = useState([
        {
            title: 'THỜI GIAN THAM GIA', child: (
                <div className='collapse__list'>
                    Từ ngày 25/01/2021 đến 28/02/2021, chỉ cần hái lì xì và để lại thông tin là bạn có cơ hội nhận cơn mưa quà tặng với tổng giải thưởng lên đến 1.000.000.000 VNĐ.
                    <ul>
                        <li>
                            Gói quà tặng PROPZY CARE THẬT ĐONG ĐẦY trị giá 2.000.000 VNĐ: số lượng giới hạn
                    </li>
                        <li>
                            Gói quà THẬT NHƯ Ý  - Coupon giảm giá từ 75.000 - 750.000 VNĐ: số lượng không giới hạn
                    </li>
                        <li>
                            Gói quà THẬT MAY MẮN - Propzy mùa Lễ hội: Số lượng không giới hạn
                    </li>
                        <li>
                            Cùng hàng nghìn câu chúc Tết mang đến Xuân Tài Lộc Hạnh Phúc Bình An.
                    </li>
                    </ul>
                </div>
            )
        },
        {
            title: 'ĐIỀU KIỆN VÀ QUY ĐỊNH THAM GIA', child: (
                <div className='collapse__list'>
                    Từ ngày 25/01/2021 đến 28/02/2021, chỉ cần hái lì xì và để lại thông tin là bạn có cơ hội nhận cơn mưa quà tặng với tổng giải thưởng lên đến 1.000.000.000 VNĐ.
                    <ul>
                        <li>
                            Gói quà tặng PROPZY CARE THẬT ĐONG ĐẦY trị giá 2.000.000 VNĐ: số lượng giới hạn
                    </li>
                        <li>
                            Gói quà THẬT NHƯ Ý  - Coupon giảm giá từ 75.000 - 750.000 VNĐ: số lượng không giới hạn
                    </li>
                        <li>
                            Gói quà THẬT MAY MẮN - Propzy mùa Lễ hội: Số lượng không giới hạn
                    </li>
                        <li>
                            Cùng hàng nghìn câu chúc Tết mang đến Xuân Tài Lộc Hạnh Phúc Bình An.
                    </li>
                    </ul>
                </div>
            )
        },
        {
            title: 'CÁCH NHẬN THƯỞNG', child: (
                <div className='collapse__list'>
                    Từ ngày 25/01/2021 đến 28/02/2021, chỉ cần hái lì xì và để lại thông tin là bạn có cơ hội nhận cơn mưa quà tặng với tổng giải thưởng lên đến 1.000.000.000 VNĐ.
                    <ul>
                        <li>
                            Gói quà tặng PROPZY CARE THẬT ĐONG ĐẦY trị giá 2.000.000 VNĐ: số lượng giới hạn
                    </li>
                        <li>
                            Gói quà THẬT NHƯ Ý  - Coupon giảm giá từ 75.000 - 750.000 VNĐ: số lượng không giới hạn
                    </li>
                        <li>
                            Gói quà THẬT MAY MẮN - Propzy mùa Lễ hội: Số lượng không giới hạn
                    </li>
                        <li>
                            Cùng hàng nghìn câu chúc Tết mang đến Xuân Tài Lộc Hạnh Phúc Bình An.
                    </li>
                    </ul>
                </div>
            )
        },
    ])
    const [isOpen, setOpen] = useState(0)

    // Function
    const onClickPaneTitle = (index) => {
        setOpen(index)
    }
    return (
        <div className={styles['wrap-collapse']}>
            {panels && panels.length ? panels.map((panel, index) => {
                let isOpenContent = isOpen === index;

                return (
                    <div key={panel + index} className={`flex space-x-5 md:space-x-10 pb-5 ${index === panels.length - 1 ? 'padding-bottom-0' : ''}`}>
                        <div onClick={() => onClickPaneTitle(index)} className={`${styles['label__number']} w-4/12`}>{index + 1}</div>
                        <div className='space-y-2 w-10/12'>
                            <div className={styles['pane__title']} onClick={() => onClickPaneTitle(index)}>{panel.title}</div>
                            <div
                                className={classnames(styles['pane__content'], {
                                    [styles['pane_content--open']]: isOpenContent
                                })}
                            >
                                {panel.child}
                            </div>
                        </div>
                    </div>
                )
            }) : null
            }
        </div >
    );
};

index.propTypes = {};

export default index;