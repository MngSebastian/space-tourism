import React from 'react'
import data from "../assets/data.json"
import { useState, useEffect } from 'react'

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState("MOON");
  const [planetData, setPlanetData] = useState(data.destinations.find( destination => destination.name === selectedDestination))
  // plametdata not being updated

  function handleClick(destination) {
    setSelectedDestination(destination)
  }
  
  useEffect(() => {
    setPlanetData(data.destinations.find( destination => destination.name === selectedDestination))
    
  }, [selectedDestination])
  
  return (
    <div className='w-full h-full'>
      <div className="flex bg-[url('./assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover bg-center
        bg-fixed  h-full w-full text-white pt-20">
        {/* TITLE DESTINATION WITH PICTURE PLANET INFO PARAGRAPH AND TRAVEL DATA */}
        <div className='flex flex-col items-center'>
          <h1 className='font-barlowCondensed tracking-wider text-lg'><span className='text-blue-200'>01</span> PICK YOUR DESTINATION</h1>
          <img 
            className='w-[180px] h-[180px] mt-8'
            src={planetData.images.png} alt="destination"/>
          <div className='flex font-barlowCondensed gap-8 mt-6'>
            {/* map over destinations and display each as button */}
            {data.destinations.map( destination =>{
              return (
                <button
                  key={destination.name}
                  onClick={() => handleClick(destination.name)}
                  className='tracking-widest h-[35px] focus:border-b-[3px] text-[16px] focus:text-white text-lightBlueGray'>{destination.name}</button>

              )
            })}
          </div>
          {console.log("clicked", selectedDestination)}
          <h1 className='font-bellefair text-[58px] mt-4'>{planetData.name}</h1>
          <p className='text-center border-b-[1px] border-gray-600 px-6 text-[16px] text-lightBlueGray mb-6 pb-10'>
            {planetData.description}
          </p>
          <p className='font-barlowCondensed tracking-widest text-lightBlueGray mb-2'>AVG. DISTANCE</p>
          <h1 className='font-bellefair text-2xl tracking-wider'>{planetData.distance}</h1>

          <p className='font-barlowCondensed text-lightBlueGray mt-8 tracking-widest'>EST. TRAVEL TIME</p>
          <h1 className='font-bellefair text-2xl tracking-wider mt-2'>{planetData.travel}</h1>
        </div>
      
      </div>
    </div>
  )
}

export default Destination