import React from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'

const HeaderComp = ({ post }) => {
  // const categoryColors = ['bg-teal-500', 'bg-amber-500']
  return (
    <>
      <div className='flex justify-center	lg:mt-[10px]'>
        <div className='lg:max-w-[1600px] lg:mx-[100px]'>
          {/* <div className=' grid grid-cols-11 gap-[50px]  items-end mb-[120px] mt-[20px] max-h-[50%]'> */}
          <div
            className='flex  lg:mb-[120px] mb-[50px] mt-[20px] flex-col-reverse 
                      lg:items-end h-[calc(100vh-160px)] lg:max-h-[833px] lg:flex-row lg:gap-[40px]'
          >
            <div className='h-full mt-[50px] lg:mt-0'>
              <img
                className='object-center object-cover block'
                src={post.pageHeader.coverImage.url}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <div className='min-w-max		flex items-center	flex-col lg:items-start'>
              <h1 className='lg:text-5xl mb-[24px] text-3xl tracking-[10px] text-gray-900 font-medium	'>
                {post.pageHeader.title}
              </h1>

              <div className='flex flex-row gap-[15px] '>
                <p className='leading-4'>
                  {moment(post.pageHeader.articleCreatedDate).format(
                    'MMM DD, YYYY'
                  )}
                </p>
                <p className='leading-4'>|</p>
                <p className='leading-4'>
                  {post.categories.map((category) => (
                    <span key={category.name}>{`${category.name} `}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container mx-auto max-w-[750px] mt-[80px] mb-[200px]'> */}
      {/* <div className='text-center flex flex-col gap-[20px]'>
          <h1 className='text-6xl'>{post.title}</h1>

          <p>
            {post.author} / {moment(post.createdAt).format('MMM DD, YYYY')}
          </p>
          <div className='flex flex-row gap-2 justify-center'>
            {post.categories.map((category, index) => (
              <p
                key={category.name}
                className={`rounded-2xl px-4 py-px  text-slate-100 ${categoryColors[index]}`}
              >
                {category.name}
              </p>
            ))}
          </div>
        </div> */}
      {/* <div className='leading-loose mt-[80px]'>{post.overview}</div> */}
      {/* <div
          dangerouslySetInnerHTML={{ __html: `${post.richtext.html}` }}
        ></div> */}

      {/* </div> */}
    </>
  )
}

export default HeaderComp
