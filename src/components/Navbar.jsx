import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import useMediaQuery from "../hooks/useMediaQuery"
const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isDesktopOrTablet = useMediaQuery("(min-width: 600px)");


  function handleClick() {
    setIsMenuToggled(!isMenuToggled)
  }
  return (
    <div className='flex absolute justify-between items-center h-20 w-full  px-8 pt-4  sm:pt-0 z-40'>
      {/* if is not desktop  keep data */}
      <img className='sm:pl-4' src="../assets/shared/logo.svg" alt="logo"/>
      
      
      {/* DESKTOP NAV */}
      {isDesktopOrTablet ? (
          <div className='flex md:justify-around text-white sm:text-[16px] md:text-[18px]  
              font-barlowCondensed  items-center backdrop-blur-lg 
            bg-gray-500/[.10] h-full  w-4/6 md:w-3/6 mt-8 px-4'>
            <Link to="/">
                <button 
                onClick={() => handleClick(setIsMenuToggled(!isMenuToggled))}
                className='w-full h-[78px]text-start focus:border-b-[3px] tracking-widest font-light'>
                  <span className='font-barlowCondensed invisible md:visible font-bold tracking-widest pr-2'>00</span> HOME</button>
              </Link>
              <Link to="/destination">
                <button 
                onClick={() => handleClick(setIsMenuToggled(!isMenuToggled))}
                className='w-full h-[78px] text-start focus:border-b-[3px] tracking-widest font-light'>
                  <span className='font-barlowCondensed invisible md:visible font-bold pr-2'>01</span> DESTINATION</button>
              </Link>
              <Link to="/crew">
                <button 
                onClick={() => handleClick(setIsMenuToggled(!isMenuToggled))}
                className='w-full h-[78px] text-start focus:border-b-[3px] tracking-widest font-light'>
                  <span className='font-barlowCondensed invisible md:visible font-bold  pr-2'>02</span> CREW</button>
              </Link>
              <Link to="/technology">
                <button 
                onClick={() => handleClick(setIsMenuToggled(!isMenuToggled))}
                className='w-full h-[78px] text-start focus:border-b-[3px] tracking-widest font-light'>
                  <span className='font-barlowCondensed invisible md:visible font-bold  pr-2'>03</span> TECHNOLOGY</button>
              </Link>
          </div>
        ) : (
          
      <div>
        <button 
          onClick={() => {setIsMenuToggled(!isMenuToggled)}}>
          <img src="../assets/shared/icon-hamburger.svg" alt="logo"/>
        </button>
      </div>
        )}


      
      {!isDesktopOrTablet && isMenuToggled && (
        <div className='fixed right-0 top-0 botom-0 h-full backdrop-blur-2xl bg-white-500/[.60] w-[282px]'>
          <button 
            className='mt-9 ml-[225px]'
            onClick={() => {setIsMenuToggled(!isMenuToggled)}}>
            <img src="../assets/shared/icon-close.svg" alt="icon-for-closing-sidemenu"/>
          </button>
          <div className='flex  flex-col items-start  gap-8 font-barlowCondensed text-[22px] tracking-widest
              text-white pt-20 pl-8'>
              <Link to="/">
                <button 
                onClick={() => handleClick(setIsMenuToggled(!isMenuToggled))}
                className='w-full text-start'><span className='tracking-widest pr-2'>00</span> HOME</button>
              </Link>
              <Link to="/destination">
                <button 
                onClick={() => handleClick(setIsMenuToggled(!isMenuToggled))}
                className='w-full text-start'><span className='tracking-widest pr-2'>01</span> DESTINATION</button>
              </Link>
              <Link to="/crew">
                <button 
                onClick={() => handleClick(setIsMenuToggled(!isMenuToggled))}
                className='w-full text-start'><span className='tracking-widest pr-2'>02</span> CREW</button>
              </Link>
              <Link to="/technology">
                <button 
                onClick={() => handleClick(setIsMenuToggled(!isMenuToggled))}
                className='w-full text-start'><span className='tracking-widest pr-2'>03</span> TECHNOLOGY</button>
              </Link>
          </div>
        </div> 
      
      )}




      {/* add desktop navbar data */}
    </div>
  )
}
export default Navbar        

