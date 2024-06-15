import React from 'react'
import { INFO_ICON, play_icon } from '../utils/constant'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview.substring(0,129)}</p>
        <div>
            <button className='bg-white  text-black text-xl p-4 px-12 w-10  rounded-lg hover:bg-opacity-80'>
              <img src={play_icon} alt="play_icon"/>
              Play</button>
            <button className= 'mx-2  bg-gray-500  text-white text-xl p-4 px-12 w-10 bg-opacity-50 rounded-lg'>
              <img src={INFO_ICON} alt="info_icon"/>
              More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle