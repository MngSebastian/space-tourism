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
      <div className="flex 
        bg-[url('./assets/crew/background-crew-mobile.jpg')]
        sm:bg-[url('./assets/crew/background-crew-tablet.jpg')]
        md:bg-[url('./assets/crew/background-crew-desktop.jpg')] bg-no-repeat bg-cover bg-center
        bg-fixed  h-full w-full text-white pt-20">
        <div className='flex flex-col  items-center w-full'>
          <h1 className='font-barlowCondensed tracking-widest text-lg sm:pr-[60%] sm:mt-8 md:text-[25px]'><span className='text-blue-200'>02</span> MEET YOUR CREW</h1>
          <div className='flex flex-col md:flex-row-reverse  w-full items-center md:justify-center md:items-end md:px-12 md:h-full sm:flex-col-reverse'>
          <img 
            className='w-[200px] h-[250px] 
            sm:w-[350px] sm:h-[430px]
            md:w-[30%] md:h-[100%]
            xs:border-b-[1px] xs:border-gray-600 sm:border-none mt-2'
            src={crewData.images.png} alt="destination"/>
            <div className='flex flex-col justify-center  md:h-3/6 md:w-3/6 items-center md:items-start md:mb-[200px] '>
              <h3 className=' font-bellefair text-[20px] md:text-[35px] tracking-wide text-lightBlueGray'>{crewData.role}</h3>
              <h1 className=' text-[30px] md:text-[45px] tracking-wide font-bellefair'>{crewData.name}</h1>
              <p className='px-6 text-center  leading-8 mt-4 text-lightBlueGray  tracking-wide md:px-0 md:w-[480px] md:text-start'>{crewData.bio}</p>
            <div className='flex w-full gap-6 justify-center md:justify-start md:mt-16'>
              {/* if mobile */}
              {data.crew.map( (crew, index) => {
                return <button
                key={crew.name}
                onClick={() => handleClick(crew.name)}  
                className='bg-gray-600 focus:bg-white w-[15px] h-[15px] 
                  rounded-full mt-6 mb-6'></button>
              })}

            </div>
            </div>
        </div>
          

        </div>
      </div>
    </div>
  )
}

export default Crew