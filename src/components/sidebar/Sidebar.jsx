import React from 'react'
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import StoreIcon from '@mui/icons-material/Store'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Neo</span>
            <span className="logo2">Banks</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineIcon className='icon'/>
                    <span>Users</span>
                </li>
                <li>
                    <StoreIcon className='icon'/>
                    <span>Products</span>
                </li>
                <li>
						<CreditCardIcon className='icon' />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className='icon' />
						<span>Delivery</span>
					</li>
					<p className='title'>USEFUL</p>

					<li>
						<InsertChartIcon className='icon' />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsNoneIcon className='icon' />
						<span>Notifications</span>
					</li>
					<p className='title'>SERVICE</p>

					<li>
						<MonitorHeartIcon className='icon' />
						<span>System Health</span>
					</li>
					<li>
						<VpnKeyIcon className='icon' />
						<span>Logs</span>
					</li>
					<li>
						<SettingsApplicationsIcon className='icon' />
						<span>Settings</span>
					</li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon'/>
                        <span>Logout</span>
                    </li>


            </ul>
        </div>

        <div className="button">
            <div className="colorOptions"></div>
            <div className="colorOptions"></div>
        </div>
    </div>
  )
}

export default Sidebar