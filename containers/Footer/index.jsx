import React from 'react'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='flex flex-wrap f-Sans-pro text-white text-xl w-12/12 md:px-32 pt-96 md:pt-56 md:space-x-28 '>
                <div className='relative md:w-3/12 w-full md:px-0 px-10 '>
                    <img src="/svg/logo-white-footer.svg" alt="" />
                    <p> Tầng 4, Tòa Nhà Flemington, Số 182, Lê Đại Hành, P.15, Q.11, TP.HCM</p>
                    <div className='py-1'> </div>
                    <p> Email: vietnam@propzy.com</p>
                    <div className='py-1'> </div>
                    <p>Hãy gọi cho chúng tôi để được tư vấn 24/7</p>
                    <img className='mt-4' src="/svg/hotline.svg" alt="" />
                </div>
                <ul className='mt-4 px-10 md:px-0'>
                    <li><a className='font-bold	'> Về Propzy</a></li>
                    <li className='mt-8'><a>Giới thiệu</a></li>
                    <li><a> Tuyển dụng</a></li>
                    <li><a> liên hệ</a></li>
                    <li><a> Chính sách bảo mật </a></li>

                </ul>
                <ul className='mt-4 px-10 md:px-0'>
                    <li><a className='font-bold mb-8'> Dịch vụ </a></li>
                    <li className='mt-8'><a>Gửi BĐS miễn phí </a></li>
                    <li><a> Thông tin quy hoạch</a></li>
                    <li><a> Thẩm định giá BĐS</a></li>
                    <li><a> Pháp lý BĐS </a></li>
                    <li><a> Thủ tục vay mua nhà  </a></li>
                    <li><a> Đảm bảo thanh toán qua Ngân hàng </a></li>
                </ul>
                <ul className='mt-4 px-10 md:px-0'>
                    <li><a className='font-bold	'> Hệ thống </a></li>
                    <li className='mt-8'><a>Mua nhà </a></li>
                    <li><a> Bán nhà</a></li>
                    <li><a> Thuê nhà</a></li>
                    <li><a> Cộng đồng môi giới Propzy </a></li>

                </ul>
            </div>
        </footer>
    );
};
export default Footer;
