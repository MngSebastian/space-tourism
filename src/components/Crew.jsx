import React from 'react'
import data from "../assets/data.json"
import { useState, useEffect } from 'react'; 
const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState("DOUGLAS HURLEY");
  const [crewData, setCrewData] = useState(data.crew.find( crew => crew.name === selectedCrew))
  

  function handleClick(crew) {
    setSelectedCrew(crew)
  }
  
  useEffect(() => {
    setCrewData(data.crew.find( crew => crew.name === selectedCrew))
    
  }, [selectedCrew])
  


  return (
    <div className=' w-6/6 h-6/6'>
      <div className="flex 
        bg-[url('./assets/crew/background-crew-mobile.jpg')]
        sm:bg-[url('./assets/crew/background-crew-tablet.jpg')]
        md:bg-[url('./assets/crew/background-crew-desktop.jpg')] bg-no-repeat bg-cover bg-center
        bg-fixed  h-full w-full text-white pt-20">
        <div className='flex flex-col items-center w-full'>
          <h1 className='font-barlowCondensed tracking-wider text-lg sm:pr-[60%] sm:mt-8'><span className='text-blue-200'>02</span> MEET YOUR CREW</h1>
          <img 
            className='w-[200px] h-[250px] 
            sm:w-[250px] sm:h-[300px]
            md:w-[300px] md:h-[350px]
            border-b-[1px] border-gray-600 mt-6'
            src={crewData.images.png} alt="destination"/>
            <div className='flex w-full gap-6 justify-center'>
              {data.crew.map( (crew, index) => {
                return <button
                key={crew.name}
                onClick={() => handleClick(crew.name)}  
                className='bg-gray-600 focus:bg-white w-[15px] h-[15px] 
                  rounded-full mt-6 mb-6'></button>
              })}

            </div>
            <h3 className=' font-bellefair text-[20px] tracking-wide text-lightBlueGray'>{crewData.role}</h3>
            <h1 className=' text-[30px] tracking-wide font-bellefair'>{crewData.name}</h1>
            <p className='px-6 text-center  leading-8 mt-4 text-lightBlueGray tracking-wide'>{crewData.bio}</p>
        </div>
          


      </div>
    </div>
  )
}

export default Crew