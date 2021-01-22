// Libraries
import React, { useEffect, useState } from 'react';

const Header = () => {
    // State
    const [isChangeHeader, setChangeHeader] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, []);

    const onScroll = (e) => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }


    return (
        <header>
            <div className="fixed z-40 f-Sans-pro w-screen text-white">
                <div className={`default__header ${isChangeHeader ? 'header--orange' : ''} static mx-auto w-10/12 flex justify-between`}>
                    <div className='w-max bg-white px-2 pt-2 pb-1 rounded-b-xl' >
                        <img src="/svg/logo.svg" alt="" />
                    </div>
                    <ul className='menu-header__list font-semibold list-reset items-center flex space-x-10 pr-5'>
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