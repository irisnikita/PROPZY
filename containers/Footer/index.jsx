import React from 'react'

const Footer = () =>{
    return (
       <footer className='footer-container'>
           <div class='flex f-Sans-pro text-white text-xl w-10/12 w-screen px-32 pt-56 space-x-28 '>
               
                <div className='relative w-3/12'>
                    <img src="/svg/logo-white-footer.svg" alt="" />      
                    <p> Tầng 4, Tòa Nhà Flemington, Số 182, Lê Đại Hành, P.15, Q.11, TP.HCM</p> 
                    <div className='py-1'> </div>
                    <p> Email: vietnam@propzy.com</p> 
                    <div className='py-1'> </div>
                    <p>Hãy gọi cho chúng tôi để được tư vấn 24/7</p>
                    <img src="/svg/hotline.svg" alt="" />
                </div>
                <ul className='mt-4'>
                    <li><a className='font-bold	'> Về Propzy</a></li>
                    <li className='mt-8'><a>Giới thiệu</a></li>
                    <li><a> Tuyển dụng</a></li>
                    <li><a> liên hệ</a></li>
                    <li><a> Chính sách bảo mật </a></li>

                </ul>
                <ul className='mt-4 '>
                    <li><a className='font-bold mb-8'> Dịch vụ </a></li>
                    <li className='mt-8'><a>Gửi BĐS miễn phí </a></li>
                    <li><a> Thông tin quy hoạch</a></li>
                    <li><a> Thẩm định giá BĐS</a></li>
                    <li><a> Pháp lý BĐS </a></li>
                    <li><a> Thủ tục vay mua nhà  </a></li>
                    <li><a> Đảm bảo thanh toán qua Ngân hàng </a></li>
                </ul>


                <ul className='mt-4'>
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
