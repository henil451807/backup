import React from 'react'
// import HomeIcon from '@mui/material/Icon'
// import { SvgIcon } from '@mui/material'
import '../css/Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useSelector } from 'react-redux';
import { selectUser } from './Store/Slices/UserSlice';
import { auth } from './firebaseData';

export const Navbar = () => {

        const user = useSelector(selectUser)
    return (
        <>
            <div className='qHeader'>
                <div className='qHeader_logo'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png' alt='' />
                </div>

                <div className='qHeader_icons'>
                    <div className='qheader_icon'>
                        <HomeIcon />    
                    </div>

                    <div className='qheader_icon'>
                        <FeaturedPlayListOutlinedIcon />
                    </div>

                    <div className='qheader_icon'>
                        <AssignmentTurnedInOutlinedIcon />
                    </div>

                    <div className='qheader_icon'>
                        <PeopleAltOutlinedIcon />
                    </div>

                    <div className='qheader_icon'>
                        <NotificationsNoneOutlinedIcon />
                    </div>
                </div>

                <div className='qHeader_input'>
                    <SearchIcon />
                    <input type='text' placeholder='Search Quora' />
                </div>

                <div className='qHeader_Rem'>
                    <div className='qHeader_avatar'>
                        <Avatar 
                            onClick = {() => auth.signOut()}
                            src={user.photo}
                        />
                    </div>
                    <LanguageIcon />
                    <Button>Add Question</Button>
                </div>

            </div>
        </>
    )
}
