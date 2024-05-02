import React from 'react'
import './Widget.css'
import { WidgetOptions } from './WidgetOptions'

export const Widget = () => {
    return (
        <>
            <div className='widget'>
                <div className='widget_header'>
                    <h5>Spaces to follow</h5>
                </div>
                <WidgetOptions />
            </div>
        </>
    )
}
