import React from 'react'
import data from "../assets/data.json"
import { useState, useEffect } from 'react'; 

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("LAUNCH VEHICLE");
  const [technologyData, setTechnologyData] = useState(data.technology.find( technology => technology.name === selectedTechnology))
  


  function handleClick(technology) {
    setSelectedTechnology(technology)
  }
  
  useEffect(() => {
    setTechnologyData(data.technology.find( technology => technology.name === selectedTechnology))
    
  }, [selectedTechnology])
  


  return (
    <div className=' w-full h-full'>
      <div className="flex bg-[url('./assets/technology/background-technology-mobile.jpg')] bg-no-repeat
         bg-cover bg-center bg-fixed  h-full w-full text-white pt-20">
        <div className='flex flex-col items-center w-full'>
          <h1 className='font-barlowCondensed tracking-wider text-lg mt-6'>
            <span className='text-blue-200'>03</span> SPACE LAUNCH 101
          </h1>
          <img 
            className='w-full h-[210px] border-b-[1px] border-gray-600 mt-10'
            src="./assets/technology/image-launch-vehicle-landscape.jpg" alt="destination"/>
          <div className='flex gap-4 mt-10'>
            {data.technology.map( (item, index ) => {
              return <button
                onClick={() => handleClick(item.name)} 
                className='rounded-full border-[.5px] focus:bg-white focus:text-black border-white h-[55px] w-[55px]'>
                  {index + 1}
                </button>
            })}
          </div>
          <h4 className='text-lightBlueGray text-[18px] tracking-[3px]  font-barlowCondensed mt-8'>THE TERMINOLOGY...</h4>
          <h1 className='font-bellefair text-[30px] mt-1 mb-4'>{technologyData.name}</h1>
          <p className='text-center  leading-6 tracking-wide text-lightBlueGray px-6'>{technologyData.description}</p>
        </div>
      </div>

    </div>
  )
}

export default Technology