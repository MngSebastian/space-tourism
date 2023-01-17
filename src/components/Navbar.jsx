import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)

  function handleClick() {
    setIsMenuToggled(!isMenuToggled)
  }
  return (
    <div className='flex absolute justify-between items-center  h-20 w-full px-8 pt-4 z-40'>
        <img src="../assets/shared/logo.svg" alt="logo"/>
        <div>
          <button 
            onClick={() => {setIsMenuToggled(!isMenuToggled)}}>
            <img src="../assets/shared/icon-hamburger.svg" alt="logo"/>
          </button>
        </div>
        {isMenuToggled && (
          <div className='fixed right-0 top-0 botom-0 h-full backdrop-blur-2xl bg-white-500/[.70] w-[282px]'>
            <button 
              className='mt-9 ml-[225px]'
              onClick={() => {setIsMenuToggled(!isMenuToggled)}}>
              <img src="../assets/shared/icon-close.svg" alt="icon-for-closing-sidemenu"/>
            </button>
            <div className='flex  flex-col items-start  gap-8 font-barlowCondensed text-[22px] tracking-widest
               text-white pt-20 pl-8'>
                <Link to="/">
                  <button className='w-full text-start'><span className='tracking-widest pr-2'>00</span> HOME</button>
                </Link>
                <Link to="/destination">
                  <button className='w-full text-start'><span className='tracking-widest pr-2'>01</span> DESTINATION</button>
                </Link>
                <Link to="/crew">
                  <button className='w-full text-start'><span className='tracking-widest pr-2'>02</span> CREW</button>
                </Link>
                <Link to="/technology">
                  <button className='w-full text-start'><span className='tracking-widest pr-2'>03</span> TECHNOLOGY</button>
                </Link>
            </div>
          </div> 
        
        )}
    </div>
  )
}
export default Navbar        

