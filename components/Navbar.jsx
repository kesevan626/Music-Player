import React, { useEffect, useState } from 'react'
import {FaBars, FaHeart, FaWindowClose } from 'react-icons/fa'

export const Navbar = () => {
          const [isVisible, setIsVisible] = useState(false)
          const [isScroll , setIsScroll] = useState(false)

          useEffect(() => {
            window.addEventListener('resize', (e)=>{
                   if (e.target.innerWidth < 695) setIsVisible(true)      
            })  
            window.addEventListener('scroll', (e)=>{ 
              if(window.scrollY > 10) {
                      setIsScroll(true)
              }else{
                setIsScroll(false)
            }})          
            return()=> {
              window.removeEventListener('resize', ()=>{})
            }
          }, [])
          
          return (
                    <div className={`flex fixed w-[100%] z-50 justify-between items-center md:py-2 text-white ${isScroll ? 'bg-blue-400/10': 'bg-gray[600]/10'} py-4  px-7 lg:px-10 lg:py-3 md:py-5`}>
                              <div className='text-red-600 text-2xl'>
                                        NetFlix
                              </div>
                              <div>
                                        <nav className={` absolute top-20 md:relative md:top-0 lg:flex lg:relative lg:top-0 ${!isVisible && 'md:block block : hidden'}`}>
                                                           <ul className={`justify-between md:justify-end md:text-[14] md:flex md:-mr-6  lg:text-lg ${!isVisible && 'md:block'}`}>
                                                            <li className='mr-6 mt-4 rounded hover:bg-blue-500 cursor-pointer px-6 py-2 lg:mt-0  flex items-center'> TV series</li>
                                                            <li className='mr-6 mt-4 rounded hover:bg-blue-500 cursor-pointer px-6 py-2 lg:mt-0  flex items-center'>Movies</li>
                                                            <li className='mr-6 mt-4 rounded hover:bg-blue-500 cursor-pointer px-6 py-2 lg:mt-0  flex items-center'>Documentary</li>
                                                            <li className='mr-6 mt-4 rounded hover:bg-blue-500 cursor-pointer px-6 py-2 lg:mt-0 lg:bg-blue-800/10 flex items-center'><FaHeart style={{marginRight: '5px'}}/> Favorite</li>
                                                  </ul>
                                        </nav>
                              </div>
                              <div className=' md:hidden lg:hidden cursor-pointer'>
                                       <FaBars onClick={()=>setIsVisible(!isVisible)} />
                                        
                              </div>
                    </div>
          )
}
