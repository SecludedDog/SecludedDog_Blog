import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import InfoHeader from './InfoHeader'

const Destinations = ({ post }) => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])
  return (
    <div
      data-aos='fade'
      data-aos-offset={50}
      className='lg:mb-[200px] mb-[100px] lg:mx-[80px] max-w-[1600px] lg:mt-[150px] mt-[20px]'
    >
      <InfoHeader infoText='地图'></InfoHeader>

      <div className='mb-[20px] flex justify-center lg:h-[calc(100vh-200px)] mt-[20px] lg:mt-0 '>
        <img
          className='aspect-[1.82] object-contain	w-screen'
          src={post.destinations[0].destinationMap.url}
        ></img>
      </div>
    </div>
  )
}

export default Destinations
