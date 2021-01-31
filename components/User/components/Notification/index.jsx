// Libraries
import React, { useState, useMemo } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Link from 'next/link'

// Constant
import { notificationTypes, appConfig } from 'constant'

function Notification(props) {
    // Props
    const { user } = props;
    const { notifications = [] } = user

    // State
    const [state, setState] = useState({})

    // Function
    const showRenderContent = (notification) => {
        const { type = '', } = notification;

        switch (type) {
            case 'prize':
                return (
                    <div>
                        <span>{notification.description}</span> &nbsp;
                        <Link href='/user?tab=tab-1'>
                            <span className='cursor-pointer text__color--orange'>Mở email để nhận code ngay!</span>

                        </Link>
                    </div>
                )

            default:
                return (
                    <div>
                        <span>{notification.description}</span> &nbsp;
                        <Link href='/#propzytree-lixi'>
                            <span className='text__color--orange cursor-pointer'>Hái lì xì ngay!</span>

                        </Link>
                    </div>
                )
        }
    }

    return (
        <div className='space-y-5'>
            {notifications.length ? notifications.map(notification => (
                <div className='flex items-center justify-between border-b border-gray-300 pb-4'>
                    <div className='rounded-full p-4 border-2 border-white flex items-center justify-center'>
                        <img src={notification.icon} alt="" />
                    </div>
                    <div className="space-y-2 w-11/12 text-white">
                        <div className='flex justify-between items-center'>
                            <strong>{notification.label}</strong>
                            <div className='opacity-50 text-white'>{notification.date}</div>

                        </div>
                        {showRenderContent(notification)}
                    </div>
                </div>

            )) : <div className='text-white font-semibold text-xl'>Không có thông báo</div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userSlice.user
    }
}

export default connect(mapStateToProps)(Notification)