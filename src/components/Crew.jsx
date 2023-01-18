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
    <div className=' w-full h-full'>
      <div className="flex bg-[url('./assets/crew/background-crew-mobile.jpg')] bg-no-repeat bg-cover bg-center
        bg-fixed  h-full w-full text-white pt-20">
        <div className='flex flex-col items-center w-full'>
          <h1 className='font-barlowCondensed tracking-wider text-lg'><span className='text-blue-200'>02</span> MEET YOUR CREW</h1>
          <img 
            className='w-[230px] h-[280px] border-b-[1px] border-gray-600 mt-8'
            src={crewData.images.png} alt="destination"/>
            <div className='flex w-full gap-6 justify-center'>
              {data.crew.map( crew => {
                return <button
                key={crew.name}
                onClick={() => handleClick(crew.name)}  
                className='bg-gray-600 focus:bg-white w-[15px] h-[15px] 
                  rounded-full mt-10 mb-10'></button>
              })}

            </div>
            <h3 className=' font-bellefair text-[20px] tracking-wide text-lightBlueGray'>{crewData.role}</h3>
            <h1 className=' text-[30px] tracking-wide font-bellefair'>{crewData.name}</h1>
            <p className='px-6 text-center  leading-8 mt-6 text-lightBlueGray tracking-wide'>{crewData.bio}</p>
        </div>
          


      </div>
    </div>
  )
}

export default Crew