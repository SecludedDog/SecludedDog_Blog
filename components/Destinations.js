import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import InfoHeader from './InfoHeader'
import mediumZoom from 'medium-zoom'
// import ImageZoom from './ImageZoom'

import dynamic from 'next/dynamic'
const ImageZoom = dynamic(() => import('./ImageZoom'), {
  ssr: false,
})

// const mediumZoom = require('medium-zoom')

const Destinations = ({ post }) => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])

  // const zoom = React.useRef(mediumZoom())
  const zoom = typeof window !== 'undefined' && React.useRef(mediumZoom())

  return (
    <div
      data-aos='fade'
      data-aos-offset={50}
      className='lg:mb-[200px] mb-[100px] lg:mx-auto max-w-[1500px] lg:mt-[100px] mt-[20px] '
    >
      <InfoHeader infoText='地图'></InfoHeader>

      <div className='mb-[20px] flex justify-center lg:h-[calc(100vh-200px)] mt-[20px] lg:mt-0 '>
        {/* <img
          className='aspect-[1.82] object-contain	w-screen'
          src={post.destinations[0].destinationMap.url}
        ></img> */}
        {post.destinations[0] && (
          <ImageZoom
            src={post.destinations[0].destinationMap.url}
            alt='Zoom 1'
            zoom={zoom.current}
            background='#000'
            className='aspect-[1.82] object-contain	w-screen'
          />
        )}
      </div>
    </div>
  )
}

export default Destinations
