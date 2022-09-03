import React from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Divider from './Divider'

const Overview = ({ post }) => {
  return (
    <div id='overview'>
      <div className='mx-auto max-w-[750px] mt-[80px]'>
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
