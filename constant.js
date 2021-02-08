// Libraries
import moment from 'moment'

export const translations = {
    vi: {
        home: 'Trang chủ',
        aboutUs: 'Về chúng tôi',
        product: 'Sản phẩm',
        contact: 'Liên hệ'
    },
    en: {
        home: 'Home',
        aboutUs: 'About us',
        product: 'Product',
        contact: 'Contact'
    }
}

export const appConfig = {
    URL: 'http://localhost:3000',
    //URL: 'https://propzy.vercel.app',
    //API: 'https://vmotel.me/api',
    API: 'http://localhost:5000/api',
    LOCAL_EMAIL: 'user-email',
    DATE_FORMAT: 'HH:mm DD/MM/YYYY'
}

export const notificationTypes = [
    { key: "1", date: moment().format('HH:mm DD/MM/YYYY'), icon: '/svg/icons/share.svg', type: "share", label: 'Chia sẽ fanpage Propzy thành công', description: 'Bạn đã được nhận thêm 1 lượt chơi.' },
    { key: "2", date: moment().format('HH:mm DD/MM/YYYY'), icon: '/svg/icons/facebook.svg', type: "like-face", label: 'Like fanpage Propzy thành công', description: 'Bạn đã được nhận thêm 1 lượt chơi.' },
    { key: "3", date: moment().format('HH:mm DD/MM/YYYY'), icon: '/svg/icons/zalo.svg', type: "follow-zalo", label: 'Follow Zalo thành công', description: 'Bạn đã được nhận thêm 1 lượt chơi.' },
    { key: "4", date: moment().format('HH:mm DD/MM/YYYY'), icon: '/svg/icons/youtube.svg', type: "subcribe-youtube", label: 'Đăng ký kênh Youtube Propzy thành công', description: 'Bạn đã được nhận thêm 1 lượt chơi.' },
    { key: "5", date: moment().format('HH:mm DD/MM/YYYY'), icon: '/svg/icons/people.svg', type: "invite-people", label: 'Mời bạn bè chơi thành công', description: 'Bạn đã được nhận thêm 1 lượt chơi.' },
    { key: "6", date: moment().format('HH:mm DD/MM/YYYY'), icon: '/svg/icons/people.svg', type: "register", label: 'Bạn đã đăng ký thành công', description: 'Bạn đã được nhận thêm 2 lượt chơi.' },
    { key: "7", date: moment().format('HH:mm DD/MM/YYYY'), icon: '/svg/icons/prize.svg', type: "prize", label: 'Quà tặng', description: 'Bạn vừa trúng bao lì xì' },
]