import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import Image from 'next/image'

const Gallery = ({ post }) => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])
  return (
    <div className='mb-20 container mx-auto max-w-5xl'>
      <div className='columns-2'>
        {post.gallery.map((item) => (
          <div
            className='mb-4 relative group'
            data-aos='fade'
            data-aos-offset={50}
          >
            <img src={item.photo.url}></img>
          </div>
          // <div key={item.caption}>
          //   <div className='relative'>
          //     <Image
          //       src={item.photo.url}
          //       layout='responsive'
          //       objectFit='contain'
          //       width='100%'
          //       height='100%'
          //     />
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
