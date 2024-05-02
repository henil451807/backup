import React from 'react'
import './Feed.css'
import { QuoraBox } from './QuoraBox'
import { Post } from './Post'

export const Feed = () => {
    return (
        <>
            <div className='feed'>
                <QuoraBox />
                <Post />                
            </div>
        </>
    )
}
