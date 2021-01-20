import React from 'react';
const Header = () => {
    return (
        <header>
            <div class="container bg-blue-100 text-white flex item-center justify-between mx-auto px-4 ">
            <img src="https://i.ibb.co/sHZz13b/logo.png" class='inline max-w-xs max-h-xs' ></img>

                <ul class='list-reset flex space-x-5'>
                    <li> <a href="#"> TRANG CHỦ </a> </li>
                    <li> <a href="#">GIỚI THIỆU </a></li>
                    <li><a href="#">THỂ LỆ </a></li>
                    <li><a href="#">LIÊN HỆ </a> </li> 
                    <li><a href="#">XEM QUÀ  </a> </li>
                </ul>

            </div>
        </header>
        
    );
};

export default Header;