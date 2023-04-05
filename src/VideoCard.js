import React from 'react'
import { Avatar } from '@mui/material'
import "./VideoCard.css"
// import img from "./Assets/OIP.jpeg"

function VideoCard({image, title, channel, views, timestamp, channelImage}) {

    return (
        <div className='videoCard'>
            <img className='videoCard__img' src={image} alt='/' />
            <div className='videoCard__info'>
                <Avatar className="videoCard__avatar" src={channelImage} alt='/' />
                <div className='videoCard__text'>
                    <h4 className='videoCard__thumbnail'>{title}</h4>
                    <p>{channel}</p>
                    <p>{views}•{timestamp}</p>
                </div>
            </div>
        </div>
    )
}
export default VideoCard