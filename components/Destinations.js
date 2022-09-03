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
      className='mb-[200px] mx-[80px] max-w-[1600px] mt-[150px]'
    >
      <InfoHeader infoText='地图'></InfoHeader>

      <div className='mb-[20px] h-full flex justify-center'>
        <img
          className='h-[calc(100vh-200px)]'
          src={post.destinations[0].destinationMap.url}
        ></img>
      </div>
    </div>
  )
}

export default Destinations
