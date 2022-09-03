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
      className='mb-[200px] mx-auto max-w-5xl mt-[150px]'
    >
      <InfoHeader infoText='地图'></InfoHeader>

      <div className='mb-[20px] max-w-[1000px] mx-[20px]'>
        <img src={post.destinations[0].destinationMap.url}></img>
      </div>
    </div>
  )
}

export default Destinations
