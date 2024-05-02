import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from '../Store/Slices/UserSlice';

export const Post = () => {

    const user = useSelector(selectUser)

    return (
        <>
            <div className='post'>
                    <div className='post_info'>
                        <Avatar src={user.photo}  />
                        <h5>{user.displayName}</h5>
                        <small>TimeStamp</small>
                    </div>

                    <div className='post_body'>
                        <div className='post_question'>
                            <p>Question</p>
                            <button className='post_btnAnswer'>Answer</button>             
                        </div>

                        <div className='post_answer'>
                            <p></p>
                        </div>
                        <img src='https://qph.cf2.quoracdn.net/main-qimg-2a9b89e5a412e6986c6e86695a27ad43-lq' alt='' />
                    </div>

                    <div className='post_footer'>
                        <div className='post_footerAction'>   
                            <ArrowUpwardOutlinedIcon />
                            <ArrowDownwardOutlinedIcon />
                        </div>
                        
                        <RepeatOutlinedIcon />
                        <ChatBubbleOutlineOutlinedIcon />

                        <div className='post_footerLeft'>
                                <ShareOutlinedIcon />
                                <MoreHorizOutlinedIcon />
                        </div>

                    </div>
            </div>
        </>
    )
}