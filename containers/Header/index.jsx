import React from 'react';
const Header = () => {
    return (
        <header>
            <div class="fixed z-40 f-Sans-pro w-screen text-white">
                <div className='static mx-auto w-10/12 flex justify-between'>
                    <div className='w-max bg-white px-2 pt-2 pb-1 rounded-b-xl' >
                        <img src="/svg/logo.svg" alt="" />
                    </div>
                    <ul className='menu-header__list font-semibold list-reset items-center flex space-x-10'>
                        <li> <a href="#"> TRANG CHỦ </a> </li>
                        <li> <a href="#">GIỚI THIỆU </a></li>
                        <li><a href="#">THỂ LỆ </a></li>
                        <li><a href="#">LIÊN HỆ </a> </li>
                        <li><a href="#">XEM QUÀ  </a> </li>
                    </ul>
                </div>
            </div>
        </header>

    );
};

export default Header;