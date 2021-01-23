// Libraries
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
import classnames from 'classnames';

// Styles
import styles from 'components/LuckyMoney/styles.module.scss';

// Constant

const categories = [
	{
		key: 'voucher', rate: 10, prizeList: [
			{ key: 'vn-moving', name: 'VN Moving', area: 'HCM (City Wide)', detail: 'Giảm 500K cho khách đặt chuyển nhà', voucher: 500000, quantity: 99999, image: '/svg/lucky-money/voucher-500k.svg' },
			{ key: 'home-az', name: 'HomeAZ', area: 'HCM (City Wide)', detail: 'Giảm 600K cho khách đặt mua nệm trên app HomeAZ', voucher: 600000, quantity: 99999, image: '/svg/lucky-money/coupon-600k.svg' },
			{ key: 'godee', name: 'Godee', area: 'HCM (City Wide)', detail: 'Tặng 25 chuyến xe miễn phí (30k/ chuyến) cho khách hàng', voucher: 750000, quantity: 99999, image: '/svg/lucky-money/godee.svg' },
			{ key: 'lalamove', name: 'Lalamove', area: 'HCM (City Wide)', detail: 'Giảm 75K cho khách đặt chuyển nhà', voucher: 75000, quantity: 300, image: '/svg/lucky-money/75k-lalamove.svg' },
			{ key: 'jupviec', name: 'JupViec.vn', area: 'HCM (City Wide)', detail: 'Giảm 75K cho khách đặt chuyển nhà', voucher: 75000, quantity: 700, image: '/svg/lucky-money/75k-giup-viec.svg' },
		],
	},
	{
		key: 'propzy-care', rate: 1, prizeList: [
			{ key: 'propzy-care', name: 'Propzy Care', area: 'HCM (City Wide)', detail: 'Combo Propzy Care trị giá 2.000.000', voucher: 2000000, quantity: 10, image: '/svg/lucky-money/propzy-care-2trieu.svg' },
		]
	},
	{
		key: 'posm', rate: 8, prizeList: [
			{ key: 'posm-1', name: 'Combo Shopping bag + Helmet', area: '', detail: 'Combo Shopping bag + Helmet', voucher: 50, quantity: 10, image: '/svg/lucky-money/propzy-tui-giu-nhiet.svg' },
			{ key: 'posm-2', name: 'Combo Canvas bag + Tumbler', area: '', detail: 'Combo Canvas bag + Tumbler', voucher: 50, quantity: 10, image: '/svg/lucky-money/tui-canvas-binh-giu-nhiet' },
			{ key: 'posm-3', name: 'Combo Shopping bag + Raincoat', area: '', detail: 'Combo Shopping bag + Raincoat', voucher: 50, quantity: 10, image: '/svg/lucky-money/tui-giu-nhiet-ao-mua.svg' },
			{ key: 'posm-4', name: 'Combo Notebook + Umbrella', area: '', detail: 'Combo Notebook + Umbrella', voucher: 50, quantity: 10, image: '/svg/lucky-money/so-tay-va-du.svg' }
		],
	},
	{
		key: 'fail', rate: 70, prizeList: [
			{
				key: 'fail-1', name: '', area: '', detail: `Tết này đã khác tết xưa
				Đã thuê nhà mới đã ưa có bồ`, voucher: 0, quantity: 0, image: '/svg/lucky-money/fail/fail-1.svg'
			},
			{
				key: 'fail-2', name: '', area: '', detail: `Năm mới chẳng ước chi xa
				Ước thêm vài tỷ, dăm ba căn nhà`, voucher: 0, quantity: 0, image: '/svg/lucky-money/fail/fail-2.svg'
			},
			{
				key: 'fail-3', name: '', area: '', detail: `"Tết này đã khác tết xưa 
				Đã có nhà mới đã cưa được nàng"`, voucher: 0, quantity: 0, image: '/svg/lucky-money/fail/fail-3.svg'
			},
			{
				key: 'fail-4', name: '', area: '', detail: `"Tết này hông ước chi xa
				Chỉ ước chân ái cùng ta về nhà"`, voucher: 0, quantity: 0, image: '/svg/lucky-money/fail/fail-4.svg'
			},
		],
	}
]

const Unregistered = (props) => {
	// Props
	const { onClose } = props;

	// State 
	const [isOpenRegister, setOpenRegister] = useState(false);
	const [isRegisterSuccess, setRegisterSuccess] = useState(false);
	const [isRegisterRent, setRegisterRent] = useState(false);

	// Use effect
	useEffect(() => {

		const array = []
		for (let i = 0; i < 100; i++) {
			array.push(randomPrize())
		}

		console.log(array)
		console.log('voucher', array.filter(item => item.key === 'voucher').length)
		console.log('voucher', array.filter(item => item.key === 'propzy-care').length)
		console.log('voucher', array.filter(item => item.key === 'fail').length)

	}, [])

	// Function to random prize with rate
	const randomPrize = () => {
		let totalProb = 0;

		categories.map(category => {
			totalProb += category.rate
		})

		let empty = 0;
		let random = Math.floor(Math.random() * (totalProb + 1))

		let item = {};

		for (let i = 0; i < categories.length; i++) {
			if (random <= categories[i].rate + empty) {
				item = categories[i];
				break;
			}
		}

		return item;
	}

	// Function
	const onClickRegisterUser = () => {
		setRegisterSuccess(true)
	}

	const onClickAdvisory = () => {
		typeof onClose == 'function' && onClose();
	}

	return (
		<div className='animate__animated animate__fadeIn relative flex items-center'>
			<img className={styles['img-lucky-money']} src={'/svg/lucky-money/un-register.svg'} alt="" />
			<div className="flex justify-center absolute bottom-5 w-full">
				<div className="btn-orange">
					XEM QUÀ
                </div>
			</div>
		</div>
	);
};

Unregistered.propTypes = {
	onClose: PropTypes.func
};
Unregistered.defaultProps = {
	onClose: () => { }
};

export default Unregistered;