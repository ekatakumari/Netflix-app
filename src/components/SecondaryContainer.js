import React from 'react'
import MoveList from './MoveList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies= useSelector((store)=>store.movies)
  return (
    <div className=' bg-black'>
        <div className='-mt-40 pl-12 relative z-10'>
        <MoveList title={'Now Play'} movies={movies.nowPlayingMovies}/>
        <MoveList title={'Popular Movie'} movies={movies.popularMovie}/>
        <MoveList title={'Trending'} movies={movies.nowPlayingMovies}/>
        <MoveList title={'Upcoming Movie'} movies={movies.nowPlayingMovies}/>
        <MoveList title={'Horrow Movie'} movies={movies.nowPlayingMovies}/>
        </div>
        
       

        </div>
  )
}

export default SecondaryContainer