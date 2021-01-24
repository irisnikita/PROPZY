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
                <div className='collapse__list text-justify leading-10'>
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
                <div className='collapse__list text-justify leading-10'>
                    <div className='font-bold'>-Khách hàng phải là công dân Việt Nam từ 18 tuổi trở lên.</div>
                    <div className='font-bold'>-Mỗi khách hàng có 01 LƯỢT hái lì xì khi đăng ký tham gia hái lì xì.</div>
                    <div className='font-bold'> -Để có thêm lượt hái lì xì, bạn có thể thực hiện các cách sau:</div>
                    <div className='ml-5'>+ Chia sẻ bài viết thành công: +1 lượt chơi  <a href="">Chia sẻ ngay</a></div>
                    <div className='ml-5'>+ Thích (divke) trang Propzy Fanpage: +1 lượt chơi  <a href="">like Fanapage</a></div>
                    <div className='ml-5'>+ Follow Zalo OA: + 1 lượt chơi  <a href="">Follow Zalo OA</a></div>
                    <div className='ml-5'>+ Subcribe Yotube chanel: +1 lượt chơi <a href=""> Subcribe ngay</a></div>
                    <div className='ml-5'>+ Mời bạn bè tham gia thành công: tối đa +10 lượt chơi Mời chơi ngay</div>

                    <div className="font-bold">-Hệ thống tự động thêm lượt khi bạn thực hiện thành công những cách trên.</div>
                    <div className="font-bold">-Nhân viên Công ty TNHH Dịch vụ Propzy không được tham gia chương trình này.</div>
                </div>
            )
        },
        {
            title: 'CÁCH NHẬN THƯỞNG', child: (
                <div className='collapse__list text-justify leading-10'>
                    <div className="font-bold">- Khách hàng tham gia chương trình phải chịu trách nhiệm về tính xác thực của thông tin cá nhân.</div>
                    <div className="font-bold">- Với sự đồng ý của khách hàng, Propzy sẽ sử dụng thông tin và hình ảnh của khách hàng trúng thưởng vào các hoạt động quảng cáo.</div>
                    <div className="font-bold">- Khách hàng liên hệ nhận thưởng theo 03 cách:</div>
                    <div className="ml-5">
                        + Cách 1: Nhắn tin trực tiếp trên Fanpage của Propzy TẠI ĐÂY.
                        + Cách 2: Gọi Hotline: *4663 hoặc Email: vietnam@propzy.com
                        + Cách 3: Đến trực tiếp Công ty Propzy để nhận thưởng: Phòng Marketing - Trụ sở Công ty TNHH Dịch vụ Propzy - Tầng 5, Tòa Nhà Flemington, Số 182, Lê Đại Hành, Phường 15, Quận 11, TP.HCM.
                    </div>
                    <div className="ml-5">
                        + Cách 2: Gọi Hotline: *4663 hoặc Email: vietnam@propzy.com
                        </div>
                    <div className="ml-5">
                        + Cách 3: Đến trực tiếp Công ty Propzy để nhận thưởng: Phòng Marketing - Trụ sở Công ty TNHH Dịch vụ Propzy - Tầng 5, Tòa Nhà Flemington, Số 182, Lê Đại Hành, Phường 15, Quận 11, TP.HCM.
                    </div>
                    <div className="font-bold">
                        - Khi đến nhận thưởng khách hàng phải xuất trình bản chính CMND và Email (hoặc SĐT) đã tham gia để đối chiếu các thông tin.
                    </div>
                    <div className="font-bold">
                        - Mọi thắc mắc liên quan đến chương trình, liên hệ Hotline *4663
                    </div>
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