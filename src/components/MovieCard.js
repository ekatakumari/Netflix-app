import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath)return
  return (
    <div className='w-48 pr-4'>
        <img
        alt="poster"
        src={IMAGE_CDN_URL+posterPath}
        />
    </div>
  )
}

export default MovieCard