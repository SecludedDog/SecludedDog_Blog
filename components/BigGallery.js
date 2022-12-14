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
    <div
      className='flex justify-center lg:mt-[100px] mt-[20px] lg:mb-[30px]'
      id='gallery'
    >
      <div className='lg:max-w-[1500px] lg:mx-[80px] min-w-0'>
        {post.bigGallery.map((item) => (
          <div
            className='lg:grid-cols-6 lg:grid lg:mb-[80px] lg:gap-[40px] lg:items-top	
            mb-[50px]'
            data-aos='fade'
            data-aos-offset={50}
          >
            <div className='lg:col-span-2 mx-[30px]'>
              <div className='flex flex-col w-max mb-[8px]'>
                <div className='bg-gray-900 lg:h-[3px] h-[2px] w-auto mb-[3px]'></div>
                <div className='lg:text-base text-sm text-[#333] font-medium'>
                  {item.title}
                </div>
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
                    <p className='mb-[20px] leading-7 text-gray-500 text-[15px] text-justify'>
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
            <div className='lg:col-span-4 bg-red-100'>
              <img
                className='lg:max-h-[calc(100vh-120px)] w-full object-contain	'
                src={item.photo.url}
              ></img>
            </div>
          </div>
        ))}
        <Divider></Divider>
      </div>
    </div>
  )
}

export default BigGallery
