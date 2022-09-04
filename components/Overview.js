import React from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Divider from './Divider'

const Overview = ({ post }) => {
  return (
    <div id='overview' className=' flex justify-center '>
      <div className='md:mx-[80px] md:max-w-[750px] md:mt-[80px] min-w-0	mx-[30px]'>
        <div>
          <RichText
            content={post.richtext.raw}
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
        <Divider></Divider>
      </div>
    </div>
  )
}

export default Overview
