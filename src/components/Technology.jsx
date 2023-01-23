import React from 'react'
import data from "../assets/data.json"
import { useState, useEffect } from 'react'; 
import useMediaQuery from "../hooks/useMediaQuery"
const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("LAUNCH VEHICLE");
  const [technologyData, setTechnologyData] = useState(data.technology.find( technology => technology.name === selectedTechnology))
  const isDesktop = useMediaQuery("(min-width: 1060px)");



  function handleClick(technology) {
    setSelectedTechnology(technology)
  }
  
  useEffect(() => {
    setTechnologyData(data.technology.find( technology => technology.name === selectedTechnology))
    
  }, [selectedTechnology])
  


  return (
    <div className=' w-full  h-full'>
      <div className="flex 
        bg-[url('./assets/technology/background-technology-mobile.jpg')]
        sm:bg-[url('./assets/technology/background-technology-tablet.jpg')]
        md:bg-[url('./assets/technology/background-technology-desktop.jpg')] bg-no-repeat
        bg-cover bg-center bg-fixed  h-full w-full text-white pt-20">
        <div className='flex flex-col  items-center w-full'>
          <h1 className='font-barlowCondensed tracking-wider text-lg sm:text-[25px] mt-6 sm:mt-12 sm:mb-12 sm:pr-[70%]'>
            <span className='text-blue-200'>03</span> SPACE LAUNCH 101
          </h1>
          <div className='flex flex-col justify-between  w-[100%] md:flex-row-reverse items-center '>
            <img className='w-full h-[210px]
             sm:h-[300px] 
             md:w-[600px] md:h-[600px] mt-4 sm:mb-4' 
             src={isDesktop ? technologyData.images.portrait : technologyData.images.landscape} 
            alt="Technology"/>
          <div className='flex flex-col  md:flex-row  items-center'>

          <div className='flex md:flex-col gap-4 mt-6 sm:mb-4 md:pl-44'>
            {data.technology.map( (item, index ) => {
              return <button
                onClick={() => handleClick(item.name)} 
                className='rounded-full border-[.5px] font-bellefair focus:bg-white text-lg focus:text-black border-white h-[55px] w-[55px] md:text-[22px] md:h-[80px] md:w-[80px]'>
                  {index + 1}
                </button>
            })}
          </div>
         <div className='flex flex-col items-center md:items-start  md:pl-24'>
          <h4 className='text-lightBlueGray text-[18px] tracking-[3px]  font-barlowCondensed mt-4'>THE TERMINOLOGY...</h4>
          <h1 className='font-bellefair text-[30px] sm:text-[44px] mt-1 mb-4'>{technologyData.name}</h1>
          <p className='text-center  leading-6 tracking-wide text-lightBlueGray px-6 md:px-0 md:text-start sm:w-4/6 md:w-[300px]'>{technologyData.description}</p>

         </div>
          </div>

         
        </div>
          </div>
      </div>

    </div>
  )
}

export default Technology