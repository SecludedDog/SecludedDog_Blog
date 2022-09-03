import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Divider from './Divider'

const BigGallery = ({ post }) => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])
  return (
    <div className='max-w-[85%] mx-auto mt-[200px]' id='gallery'>
      {post.bigGallery.map((item) => (
        <div
          className='grid-cols-6 grid mb-[80px] gap-[80px] items-top	'
          data-aos='fade'
          data-aos-offset={50}
        >
          <div className='col-span-2'>
            <div className='flex flex-col w-max mb-[8px]'>
              <div className='bg-gray-900 h-[3px] w-auto mb-[3px]'></div>
              <div className='text-lg'>{item.title}</div>
            </div>
            {/* <p>{item.photoDescription}</p> */}
            <RichText
              content={item.description.raw}
              renderers={{
                a: ({ children, href }) => (
                  <a
                    className='hover:underline hover:underline-offset-4'
                    href={href}
                    target='_blank'
                  >
                    {children}
                  </a>
                ),
                bold: ({ children }) => <strong>{children}</strong>,
                p: ({ children }) => (
                  <p className='mb-[20px] text-gray-400'>{children}</p>
                ),
              }}
            />
          </div>
          <div className='col-span-4'>
            <img
              className='max-h-[calc(100vh-150px)] w-full object-cover	'
              src={item.photo.url}
            ></img>
          </div>
        </div>
      ))}
      <Divider></Divider>
    </div>
  )
}

export default BigGallery
