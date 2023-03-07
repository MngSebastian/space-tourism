import React from 'react'
import data from "../assets/data.json"
import { useState, useEffect } from 'react'
import useMediaQuery from "../hooks/useMediaQuery"
const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState("MOON");
  const [planetData, setPlanetData] = useState(data.destinations.find( destination => destination.name === selectedDestination))
  const [selectedIndex, setSelectedIndex] = useState(data.destinations.findIndex(destination => destination.name === "MOON"))
  const isDesktopAndTablet = useMediaQuery("(min-width: 600px)");




  function handleClick(destination) {
    setSelectedDestination(destination)
  }
  
  useEffect(() => {
    setPlanetData(data.destinations.find( destination => destination.name === selectedDestination))
    
  }, [selectedDestination])
  
  return (
    <div className='w-full h-full'>
      <div className="flex 
        bg-[url('./assets/destination/background-destination-mobile.jpg')] 
        sm:bg-[url('./assets/destination/background-destination-tablet.jpg')]
        md:bg-[url('./assets/destination/background-destination-desktop.jpg')]
        bg-no-repeat bg-cover bg-center
        bg-fixed  h-full w-full text-white pt-20">
        {/* TITLE DESTINATION WITH PICTURE PLANET INFO PARAGRAPH AND TRAVEL DATA */}
        <div className='flex flex-col  md:w-full items-center'>
          <h1 className='font-barlowCondensed tracking-wider md:text-[25px] sm:tracking-widest text-lg sm:pr-[60%] md:pr-[75%] sm:pl-6 sm:mt-12'>
            <span className='text-blue-200'>01</span> PICK YOUR DESTINATION</h1>
            {/* row div that splits screen into image and rest of data */}




            <div className='flex flex-col md:flex-row gap-12 items-center justify-center w-full h-full'>
              <div className='flex  justify-center  items-center md:h-5/6 md:w-2/6 '>
                <img 
                  className='xs:w-[180px] xs:h-[180px]
                  sm:w-[280px] sm:h-[280px]
                  md:w-[500px] md:h-[500px]
                  mt-4'
                  src={planetData.images.png} alt="destination"/>
              </div>
              <div className='flex flex-col items-center  justify-center md:items-start md:w-2/6 md:h-5/6 '>
              <div className='flex font-barlowCondensed  justify-start  m: gap-8 mt-4'>
            {/* map over destinations and display each as button */}
            {data.destinations.map( (destination, index) =>{
              const isActive = selectedIndex === index
              return (
                <button
                  key={destination.name}
                  onClick={() => {
                    handleClick(destination.name)
                    setSelectedIndex(index)
                  }}
                  className={` borderHover tracking-widest h-[35px] text-[16px] 
                  md:text-[22px] focus:text-white text-lightBlueGray ${isActive ? "active" : ""}`}>{destination.name}</button>

              )
            })}
          </div>
          <h1 className='font-bellefair text-[52px] sm:text-[62px] md:text-[120px] sm:mt-6 md:mt-0'>{planetData.name}</h1>
          <p className='text-center  border-b-[1px] border-gray-600 px-8  w-6/6 text-[16px] md:pl-0 md:pr-16 md:h-[40%] md:text-left  md:text-[20px] text-lightBlueGray mb-6 pb-4'>
            {planetData.description}
          </p>
          {isDesktopAndTablet ? (
          <div className='flex sm:flex-row gap-24'>
            <div>
              <p className='font-barlowCondensed tracking-widest text-lightBlueGray mb-1'>AVG. DISTANCE</p>
              <h1 className='font-bellefair text-2xl md:text-[30px] tracking-wider'>{planetData.distance}</h1>
            </div>
            <div>
              <p className='font-barlowCondensed text-lightBlueGray tracking-widest mb-1'>EST. TRAVEL TIME</p>
              <h1 className='font-bellefair text-2xl md:text-[30px] tracking-wider mt-1'>{planetData.travel}</h1>
            </div>
          </div>

          ) : (
            <div>
              <p className='font-barlowCondensed tracking-widest text-lightBlueGray mb-1'>AVG. DISTANCE</p>
              <h1 className='font-bellefair text-2xl tracking-wider'>{planetData.distance}</h1>
              <p className='font-barlowCondensed text-lightBlueGray mt-4 tracking-widest'>EST. TRAVEL TIME</p>
              <h1 className='font-bellefair text-2xl tracking-wider mt-1'>{planetData.travel}</h1>
            </div>
          )}
              </div>
            </div>



            
        </div>
      
      </div>
    </div>
  )
}

export default Destination










