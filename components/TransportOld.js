import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCar)

const Transport = ({ post }) => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])
  return (
    <>
      <div id='transport' className=' text-2xl text-gray-800 -mb-4 text-center'>
        位置 & 路况
      </div>
      <div className='bg-slate-50 pb-40'>
        <div
          data-aos='fade'
          data-aos-offset={50}
          className='container mx-auto max-w-5xl'
        >
          <div
            //   data-aos='fade-up'
            key={post.transport.id}
            className='grid grid-cols-9 gap-6 items-center pt-10'
          >
            <div className='col-span-5'>
              <p className='text-justify whitespace-pre-line'>
                {post.transport.transportDesc}
              </p>
            </div>
            <img className='col-span-4' src={post.transport.map.url}></img>
          </div>
          <div className='flex gap-[10px]'>
            {post.transport.roadInfo.map((road) => (
              <div className='flex gap-[6px] items-center rounded-2xl px-4 py-px bg-[#D5EDC4]'>
                <FontAwesomeIcon
                  icon='car'
                  // style={{ color: 'yellow' }}
                  // className='text-amber-500'
                />
                <p>{road.roadName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Transport
