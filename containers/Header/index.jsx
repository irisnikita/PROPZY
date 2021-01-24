// Libraries
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'

// Redux toolkit
import { getUser } from 'store/user/userSlice';

// Services 
import * as userServices from 'services/user'

import { appConfig } from 'constant'

const Header = (props) => {
    // State
    const [isChangeHeader, setChangeHeader] = useState(false);
    const [menuItemSelected, setMenuItemSelected] = useState({})

    const menu = [
        { key: 'home', label: 'TRANG CHỦ', link: '/' },
        { key: 'introduce', label: 'GIỚI THIỆU', link: '/', location: 'propzycare-introduce' },
        { key: 'rule', label: 'THỂ LỆ', link: '/', location: 'rule-event' },
        { key: 'contact', label: 'LIÊN HỆ ', link: '/', location: 'contact-us' },
        { key: 'see-prize', label: 'XEM QUÀ', link: '/user' },
    ]
    const router = useRouter();

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        // // Get data user
        getDataUser();

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, []);

    useEffect(() => {
        let draftMenuItem = menu.find(item => item.link === router.pathname)

        draftMenuItem && setMenuItemSelected(draftMenuItem)
    }, [router])

    const getDataUser = async () => {
        if (localStorage.getItem(appConfig.LOCAL_EMAIL)) {
            const user = await userServices.get({
                id: localStorage.getItem(appConfig.LOCAL_EMAIL)
            })

            if (!isEmpty(user)) {
                props.getUser({ ...user.data })
            }
        }
    }

    const onScroll = (e) => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }

    const scrollToElement = (element) => {
        if (document.getElementById(element)) {

            document.getElementById(element).scrollIntoView({ block: 'start' });
        }
    }

    const showRenderMenu = () => {
        return menu.length ? menu.map(item => {
            return item.location ? (
                <li className='cursor-pointer' onClick={() => scrollToElement(item.location)}>
                    <a>{item.label}</a>
                </li>
            ) : (
                    <li key={item.key} className={classnames({
                        'text__color--orange': item.key === menuItemSelected.key
                    })}>
                        <Link href={item.link}>
                            <a>{item.label}</a>
                        </Link>
                    </li>
                )
        }) : null
    }

    return (
        <header className='relative'>
            <div className="fixed z-40 f-Sans-pro w-full text-white">
                <div className={`default__header ${isChangeHeader ? 'header--orange' : ''} static mx-auto w-10/12 flex justify-center md:justify-between`}>
                    <Link href='/'>
                        <div className='md:w-max cursor-pointer w-6/12 bg-white px-2 pt-2 pb-1 rounded-b-xl' >
                            <img className='md:w-full mx-auto w-8/12' src="/svg/logo.svg" alt="" />
                        </div>
                    </Link>
                    <ul className='menu-header__list hidden md:flex font-semibold list-reset items-center space-x-10 pr-5'>
                        {showRenderMenu()}
                    </ul>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    user: state.userSlice.user
})

const mapDispatchToProps = { getUser }

export default connect(mapStateToProps, mapDispatchToProps)(Header);