import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import logo from "./assets/logo.png";
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
         <div className="header-left">
            <img src={logo} alt="logo" />
            <div className="header-search">
                <SearchIcon />
                <input type="text" name="" id="" />
            </div>
         </div>

         <div className="header-right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Job" />
            <HeaderOption Icon={InsertCommentIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption onClick={handleLogout} avatar2 avatar title="me" />
         </div>
        </div>
    )
}

export default Header
