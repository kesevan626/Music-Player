import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import {FaExclamationCircle, FaPlay} from 'react-icons/fa'

const Banner = ({trendingNow}) => {
          const [Movie, setMovie] = useState(null)

          useEffect(() => {
                   
            setMovie(trendingNow[Math.floor(Math.random() * trendingNow.length)])
          }, [trendingNow])

          return (
                    <div className='absolute pl-4  top-0 left-0 -z-10 h-[95vh] w-screen lg:h-screen'>
                              
                              <Image
                                        src={`https://image.tmdb.org/t/p/original${Movie?.backdrop_path || Movie?.poster_path}`}
                                        layout='fill'
                                        objectFit='cover'
                                        priority
                              />
                              <div className=" absolute top-0 left-0 h-[110vh] lg:h-[140vh] w-screen bg-gradient-to-b"></div>
                              <div className='relative flex items-center h-[75vh] lg:h-[80vh] lg:ml-8 lg:py-20 text-white z-10 lg:z-100 py-20'>
                                        <div className='lg:space-y-18 space-y-12 mt-20'>
                                                  <h3 className='lg:text-5xl text-3xl'>{Movie?.title || Movie?.title || Movie?.name}</h3>
                                                  <p className='w-[70%] lg:space-y-12 xs text-lg lg:w-[50%]'>
                                                          {Movie?.overview}
                                                  </p>
                                                  <div className='flex lg:space-x-5 space-x-5 ml-6'>
                                                      <button className='flex items-center lg:px-8 lg:py-2 px-6 py-3 rounded bg-orange-500'>
                                                        <FaPlay className='mr-2' />
                                                        Play</button>
                                                      <button className='flex items-center lg:px-8 lg:py-2 px-6 py-3 border rounded '>
                                                        <FaExclamationCircle className='mr-2'/>
                                                      More Info</button>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}

export default Banner