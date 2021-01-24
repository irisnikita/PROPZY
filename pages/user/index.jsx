// Libraries
import Header from '../../containers/Header';
import Footer from '../../containers/Footer'
import Axios from 'axios';

import React, { useEffect, useState } from 'react';

const User = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    useEffect(() => {
        if (name) {
        }

    }, []);
    const submitHandler = (e) => {
        Axios.post("http://localhost:5000/api/users/register", { name, email, phone });
    }

    return (
        <div>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => setShowModal(true)}
            >
                Open regular modal
      </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    // onClick={() => setShowModal(false) }
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-2xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full px-4 bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="relative items-start justify-between p-5 rounded-t">

                                    <button
                                        className="p-1 ml-auto  border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span className=" text-3xl text-black opacity-30  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                    </span>
                                    </button>
                                    <h3 className="f-Sans-pro mt-10 text-red-600 text-2xl font-semibold"> ĐĂNG KÝ ĐỂ NHẬN THÊM 2 LƯỢT CHƠI</h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className=' space-y-3'>
                                        <input type="text" className='modal__input w-full' name='name' id='name' placeholder="Họ và tên" onChange={(e) => setName(e.target.value)} />

                                        <input type="number" className='modal__input w-full' name='phone' id='phone' placeholder="Số điện thoại" onChange={(e) => setPhone(e.target.value)} />

                                        <input type="email" className='modal__input w-full' name='phone' id='phone' placeholder="Email" onChange={(e) => setEmail(e.target.value)} />


                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6  rounded-b">

                                    <button
                                        className="bg-yellow-500 text-white active:bg-yellow-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={() => submitHandler()}
                                    >
                                        ĐĂNG KÝ
                  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

            <div className='home-page__wrap'>
                <Header />

                <section className='home-page__main'>
                    <div section className='main-content--2 pt-20'>
                        {/* <div className=' w-8/12 mx-auto flex flex-wrap flex-row  '> */}
                        <div className='grid grid-flow-row '>

                            <div className=' place-self-center grid grid-rows-2 grid-flow-col w-6/12  justify-self-center items-end '>
                                <img src="/svg/prize-user.svg" alt="" />
                                <p className='f-Sans-pro text-white font-bold text-xl font-light mb-20'> GIẢI THƯỞNG</p>
                                <img src="/svg/nofi-user.svg" alt="" />
                                <p className='f-Sans-pro text-white font-bold text-xl font-light mb-20'> NHIỆM VỤ</p>
                                <img src="/svg/mission-user.svg" alt="" />
                                <p className='f-Sans-pro text-white font-bold text-xl font-light mb-20'> THÔNG BÁO</p>
                            </div>

                            <div >

                            </div>
                            <div className='relative place-self-center mx-40 text-center'>
                                <p className='text-white '>Bạn chưa nhận được giải thưởng nào</p>
                                <a className='text-white '>Bạn còn 2 lượt chơi </a>
                            </div>
                            <div className='flex flex-row gap-x-8 items-start mt-10 justify-self-center '>

                                <div className='flex justify-center items-center '>
                                    <img src="/svg/vietnam-moving.svg" alt="" className='absolute  w-1/12 mb-36' />
                                    <img src="/svg/coupon-user-1.svg" alt="" />
                                    <p className='absolute font-semibold w-1/12 text-black text-center  '> Coupon 500k cho khách
                                            chuyển nhà trên VN Moving </p>
                                    <div className="btn-orange-small absolute w-1/12 mt-96 ">XEM MÃ COUPON</div>

                                </div>
                                <div className='flex justify-center items-center '>
                                    <img src="/svg/vietnam-moving.svg" alt="" className='absolute  w-1/12 mb-36' />
                                    <img src="/svg/coupon-user-2.svg" alt="" />
                                    <p className='absolute font-semibold w-1/12 text-black text-center '> Coupon 500k cho khách
                                            chuyển nhà trên VN Moving </p>
                                    <div className="btn-orange-small absolute w-1/12 mt-96 ">XEM MÃ COUPON</div>

                                </div>
                                <div className='flex justify-center items-center '>
                                    <img src="/svg/vietnam-moving.svg" alt="" className='absolute  w-1/12 mb-36' />
                                    <img src="/svg/coupon-user-3.svg" alt="" />
                                    <p className='absolute font-semibold w-1/12 text-black text-center  '> Coupon 500k cho khách
                                            chuyển nhà trên VN Moving </p>
                                    <div className="btn-orange-small absolute w-1/12 mt-96 ">XEM MÃ COUPON</div>


                                </div>

                                <div className='flex justify-center items-center '>
                                    <img src="/svg/vietnam-moving.svg" alt="" className='absolute  w-1/12 mb-36' />
                                    <img src="/svg/coupon-user-4.svg" alt="" />
                                    <p className='absolute font-semibold w-1/12 text-black text-center  '> Coupon 500k cho khách
                                            chuyển nhà trên VN Moving </p>
                                    <div className="btn-orange-small absolute w-1/12 mt-96 ">XEM MÃ COUPON</div>
                                </div>




                            </div>
                            <div className="btn-orange place-self-center mt-24 mx-52 w-5/5">HÁI LÌ XÌ NGAY</div>

                        </div>
                    </div>

                </section>
                <Footer />
            </div>
        </div>
    )
};

export default User;