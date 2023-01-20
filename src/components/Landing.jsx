import React from 'react'
import { Link } from "react-router-dom"
import useMediaQuery from "../hooks/useMediaQuery"


const Landing = () => {
  const isDesktopOrTablet = useMediaQuery("(min-width: 600px)");

  return (
    <div className='h-full w-full'>
      <div className="flex flex-col md:flex-row justify-center items-center 
        bg-[url('./assets/home/background-home-mobile.jpg')]
        sm:bg-[url('./assets/home/background-home-tablet.jpg')]
        md:bg-[url('./assets/home/background-home-desktop.jpg')]
        bg-no-repeat bg-cover bg-center
        bg-fixed  h-full w-full text-white ">


        {isDesktopOrTablet ? (
          <div className='flex sm:flex-col md:flex-row items-center w-full h-full md:justify-between md:px-[20%] '>
            <div className='sm:flex sm:flex-col sm:justify-center sm:items-center '>
              <h5 className=' text-[22px] text-lightBlueGray tracking-widest font-thin font-barlowCondensed sm:pt-32 md:text-[40px]'>SO, YOU WANT TO TRAVEL TO</h5>
              <p className='font-bellefair text-[90px] sm:text-[110px] md:text-[140px] md:pl-7'>SPACE</p>
              <p className='text-lightBlueGray leading-7 w-[400px] text-center md:text-left text-[15px] md:px-7 md:text-[20px]'>Let's face it, if you want to go to space, you might as well genuinely go to outer space and
                not hover kind of on the edge of it. Well sit back, and relax because we'll give you a 
                truly out of this world experience!
              </p>
            </div>

          <Link to="/destination">
            <button className='bg-white text-black font-bellefair text-2xl rounded-full w-[170px] h-[170px]
              sm:w-[200px] sm:h-[200px] cursor-pointer mt-32'>EXPLORE</button> 
          
          </Link>

          </div>
        ) : (
          <div className='flex flex-col items-center w-full h-full md:px-[20%] '>
          <h5 className=' text-xl text-lightBlueGray font-thin font-barlowCondensed pt-20'>SO, YOU WANT TO TRAVEL TO</h5>
          <p className='font-bellefair text-[70px] md:pl-7'>SPACE</p>
          <p className='text-lightBlueGray leading-7 text-[15px] text-center px-7 '>Let's face it, if you want to go to space, you might as well genuinely go to outer space and
              not hover kind of on the edge of it. Well sit back, and relax because we'll give you a 
              truly out of this world experience!
          </p>

        <Link to="/destination">
          <button className='bg-white text-black font-bellefair text-2xl rounded-full w-[150px] h-[150px]
            cursor-pointer mt-36 '>EXPLORE</button> 
        
        </Link>

        </div>)}


      
      </div>
    </div>

  )
}

export default Landing