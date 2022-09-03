import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { RichText } from '@graphcms/rich-text-react-renderer'
import InfoHeader from './InfoHeader'

const Transport = ({ post }) => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])
  return (
    <div
      data-aos='fade'
      data-aos-offset={50}
      className='mx-auto max-w-[750px] mb-[200px]'
    >
      <InfoHeader infoText='到达指南'></InfoHeader>
      <div>
        <img
          className='w-[350px] mx-auto mb-[20px]'
          src={post.transport.map.url}
        ></img>
      </div>
      <div>
        <RichText
          content={post.transport.richText.raw}
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
            p: ({ children }) => <p className='mb-[20px]'>{children}</p>,
          }}
        />
      </div>
    </div>
  )
}

export default Transport
