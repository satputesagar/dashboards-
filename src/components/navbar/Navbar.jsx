import "./Navbar.scss";
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon  from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="wrapper">
        <div className="search">
            <input type="text" placeholder='search...' />
            <SearchIcon className='icon'/>
        </div>
        <div className="items">
            <div className="item">
                <LanguageIcon className='icon'/>
            </div>
            <div className="item">
                <DarkModeIcon className='icon'/>
            </div>
            <div className="item">
                <NotificationsNoneIcon className='icon'/>
                <div className="counter">1</div>
            </div>
            <div className="item">
                <ChatBubbleOutlineIcon className='icon'/>
                <div className="counter">2</div>
            </div>
            <div className="item">
                <ListIcon className='icon'/>
            </div>
            <div className="item">
                <img src="" alt="profileImage"  className='avatar'/>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Navbar