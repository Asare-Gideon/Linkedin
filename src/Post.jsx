import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import "./Post.css"
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Post = forwardRef (({name, description, message, photourl}, ref) => {
    const user = useSelector(selectUser)
    return (
        <div ref={ref} className="post">
           <div className="post-header">
               <Avatar src={photourl}>{user?.displayname[0]} </Avatar>
               <div className="post-info">
                   <h3>{name}</h3>
                   <p>{description}</p>
               </div>
           </div>
           
           <div className="post-body">
               <p>{message}</p>
           </div>
           <div className="post-buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} text="Like" iconColor="gray" />
            <InputOption Icon={ChatBubbleOutlineOutlinedIcon} text="Comment" iconColor="gray" />
            <InputOption Icon={ShareOutlinedIcon} text="Share" iconColor="gray" />
            <InputOption Icon={SendOutlinedIcon} text="Send" iconColor="gray" />
           </div>
        </div>
    )
})

export default Post
