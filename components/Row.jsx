import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {Movie} from '../components/Movie'

const Row = ({movies, title}) => {

  return (
    <div className='relative text-white z-30 lg:mt-[115px] ml-3 mt-[10%] lg:ml-5'>
          <header className='lg:text-xl bg-red-600 w-[220px] px-6 py-2'>
                {title}
          </header>
          <div className=' relative flex scroll mt-[8px] lg:space-x-6 space-x-5 w-screen'> 
          <div className='w-100' >
          <FaChevronLeft className='absolute flex items-center lg:h-28 lg:left-12 bg-red-100 z-200 rounded opacity-[.1] hover:opacity-[.5] transition-ease' />  
          <FaChevronRight className='absolute flex items-center lg:h-28 lg:right-12 bg-red-100 z-80 rounded  opacity-[.1] hover:opacity-[.5]' />   
          </div>       
                {movies.map((movie) =>(           
                    <Movie movie={movie} key={movie.id}/>
                ))}
                             
          </div>
    </div>
  )
}

export default Row