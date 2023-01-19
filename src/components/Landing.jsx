import React from 'react'
import { Link } from "react-router-dom"


const Landing = () => {
  return (
    <div className='h-6/6 w-6/6 '>
      <div className="flex flex-col items-center bg-[url('./assets/home/background-home-mobile.jpg')]
 bg-no-repeat bg-cover bg-center
        bg-fixed  h-full w-full text-white pt-32">

        <h5 className=' text-2xl text-lightBlueGray font-thin font-barlowCondensed'>SO, YOU WANT TO TRAVEL TO</h5>
        <p className='font-bellefair text-[90px]'>SPACE</p>
        <p className='text-lightBlueGray leading-7  text-center px-7'>Let's face it, if you want to go to space, you might as well genuinely go to outer space and
            not hover kind of on the edge of it. Well sit back, and relax because we'll give you a 
            truly out of this world experience!
        </p>
        <Link to="/destination">
          <button className='bg-white text-black font-bellefair text-2xl rounded-full w-[170px] h-[170px]
            cursor-pointer mt-52 mb-16'>EXPLORE</button> 
        
        </Link>
      
      </div>
    </div>

  )
}

export default Landing