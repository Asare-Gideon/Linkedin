import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import bg from "./assets/bg.jpg"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser)
 
    const SidebarItems = (title) => (
        <div className="sidebar-recent-item">
            <span className="sidebar-hash">#</span>
            <p>{title}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src={bg} alt="" />
                <Avatar src={user?.photourl} className="sidebar-avatar" > {user?.displayname[0]}</Avatar>
                <h2>{user?.displayname}</h2>
                <h4>{user?.email} </h4>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className="sidebar-number">2,455</p>
                </div>
                <div className="sidebar-stat">
                <p>Views on post</p>
                    <p className="sidebar-number">2,500</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                {SidebarItems("Fashion designer")}
                {SidebarItems("Programing")}
                {SidebarItems("Software Developer")}
                {SidebarItems("Designer")}
                {SidebarItems("Developer")}
            </div>
        </div>
    )
}

export default Sidebar
