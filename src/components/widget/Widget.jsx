import React from 'react'
import "./Widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonIcon from '@mui/icons-material/Person'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'


const Widget = ({
    	// According to this 'type' props
	// we are gonna decide which 'title', which 'link', which 'icon', we are gonna use here
	type,
}) => {
	let data

	// temporary
	const amount = 100
	const diff = 20

	switch (type) {
		case 'user':
			data = {
				title: 'USERS',
				isMoney: false,
				link: 'See all users',
				icon: (
					<PersonIcon
						className='icon'
						style={{
							color: 'crimson',
							backgroundColor: 'rgba(218, 165, 32, 0.2)',
						}}
					/>
				),
			}
			break
		case 'order':
			data = {
				title: 'ORDERS',
				isMoney: false,
				link: 'View all  orders',
				icon: (
					<ShoppingCartIcon
						className='icon'
						style={{
							color: 'goldenrod',
							backgroundColor: 'rgba(255, 0, 0, 0.2)',
						}}
					/>
				),
			}
			break
		case 'earning':
			data = {
				title: 'EARNINGS',
				isMoney: true,
				link: 'View all earnings',
				icon: (
					<MonetizationOnIcon
						className='icon'
						style={{
							color: 'green',
							backgroundColor: 'rgba(0, 128, 0, 0.2)',
						}}
					/>
				),
			}
			break
		case 'balance':
			data = {
				title: 'BALANCE',
				isMoney: true,
				link: 'See details',
				icon: (
					<AccountBalanceIcon
						className='icon'
						style={{
							color: 'purple',
							backgroundColor: 'rgba(128, 0, 128, 0.2)',
						}}
					/>
				),
			}
			break

		default:
			break
	}

	return (
		<div className='widget'>
			<div className='left'>
				<span className='title'>{data.title}</span>
				<span className='counter'>
					{data.money && '$'} {amount}
				</span>
				<span className='link'>{data.link}</span>
			</div>
			<div className='right'>
				<div className='percentage positive'>
					<KeyboardArrowUpIcon />
					{diff} %
				</div>
				{data.icon}
			</div>
		</div>
	)
}

export default Widget