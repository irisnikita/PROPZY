import React from 'react'

const Footer = () => {
    return (
        <footer id={'contact-us'} className='footer-container'>
            <div className='flex md:flex-nowrap flex-wrap f-Sans-pro text-white text-xl w-12/12 md:px-32 pt-96 md:pt-56 md:space-x-28 '>
                <div className='relative md:w-3/12 w-full md:px-0 px-10 '>
                    <img src="/svg/logo-white-footer.svg" alt="" />
                    <p> Tầng 4, Tòa Nhà Flemington, Số 182, Lê Đại Hành, P.15, Q.11, TP.HCM</p>
                    <div className='py-1'> </div>
                    <p>Email: <a href="mailto:vietnam@propzy.com?Subject=Liên hệ"> vietnam@propzy.com</a></p>
                    <div className='py-1'> </div>
                    <p>Hãy gọi cho chúng tôi để được tư vấn 24/7</p>
                    <img className='mt-4' src="/svg/hotline.svg" alt="" />
                </div>
                <ul className='mt-4 px-10 md:px-0'>
                    <li className='font-bold'>Về Propzy</li>
                    <li className='mt-8'><a href="/ve-propzy">Giới thiệu</a></li>
                    <li><a href="/nghe-nghiep"> Tuyển dụng</a></li>
                    <li><a href="/lien-he"> Liên hệ</a></li>
                    <li><a href="/chinh-sach-bao-mat"> Chính sách bảo mật </a></li>

                </ul>
                <ul className='mt-4 px-10 md:px-0'>
                    <li className='font-bold mb-8'>Dịch vụ của Propzy</li>
                    <li className='mt-8'><a href="/dang-tin">Gửi BĐS miễn phí </a></li>
                    <li><a href="/dich-vu#thong-tin-quy-hoach"> Thông tin quy hoạch</a></li>
                    <li><a href="/dich-vu#tham-dinh-gia-bat-dong-san"> Thẩm định giá BĐS</a></li>
                    <li><a href="/dich-vu#phap-ly-bat-dong-san"> Pháp lý BĐS </a></li>
                    <li><a href="/dich-vu#thu-tuc-va-ho-so-vay-mua-nha"> Thủ tục vay mua nhà </a></li>
                    <li><a href="/dich-vu#dam-bao-thanh-toan-ngan-hang"> Đảm bảo thanh toán qua Ngân hàng </a></li>
                </ul>
                <ul className='mt-4 px-10 md:px-0'>
                    <li className='font-bold'> Hệ thống Propzy</li>
                    <li className='mt-8'><a href="/mua/nha/hcm">Mua nhà </a></li>
                    <li><a href="/mua/nha/hcm"> Bán nhà</a></li>
                    <li><a href="/thue/can-ho/hcm"> Thuê nhà</a></li>
                    <li><a href="/moi-gioi"> Cộng đồng môi giới Propzy </a></li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;
