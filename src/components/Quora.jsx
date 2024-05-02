import React from 'react'
import '../css/Quora.css'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar/Sidebar'
import { Feed } from './Feed/Feed'
import { Widget } from './Widget/Widget'

export const Quora = () => {
  return (
    <div className='quora'>
        <Navbar />
        <div className='quora_content'>
            <Sidebar />
            <Feed />
            <Widget />
        </div>
      
    </div>
  )
}
