import React, { Component } from "react";

const Tree = () => {
    return (
        <div className="grid grid-cols-12 grid-rows-2 text-white">
            <div className='col-start-2 col-end-6 bg-green-100 img-lixi-loc h-96 w-96 '>
                ssss
            </div>
            <div className='col-start-6 col-end-11 bg-green-100 row-span-2 w-auto img-lixi-tree '>
                sssss
            </div>
            <div className='col-start-2 col-end-6 bg-blue-100'>
                <div>
                    <a className='text-white '>Nhà thật sự có Tết khi nơi đó có tình thân sum vầy. Nhà to cũng được, nhà nhỏ cũng được,miễn có nhau là được, </a>
                    <a className='text-yellow-900 uppercase'>vì CÓ NHÀ LÀ CÓ TẾT. </a>

                </div>

                <div className='mt-5'>
                    <a className='text-white '>  Tham gia ngay</a>
                    <a className='text-yellow-900 uppercase'> HÁI LÌ XÌ - KHAI XUÂN ĐÓN LỘC</a>
                    <a className='text-white '>  cho cả năm may mắn cùng những cơ hội ‘rinh’ nhiều phần quà hấp dẫn và giá trị lên đến</a>
                    <a className='text-yellow-900'> 1 tỷ đồng.</a>
                </div>


            </div>

        </div>
    )

};
export default Tree;
