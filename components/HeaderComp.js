import React from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'

const HeaderComp = ({ post }) => {
  // const categoryColors = ['bg-teal-500', 'bg-amber-500']
  return (
    <>
      <div className='mx-[80px]'>
        <div className='pageHeader grid grid-cols-11 gap-[50px] max-w-7xl  mx-auto items-end mb-[120px] mt-[20px]'>
          <div className='col-span-9 aspect-[1.6]'>
            <img
              className='object-center object-cover block'
              src={post.pageHeader.coverImage.url}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className='col-span-2'>
            <h1 className='text-5xl mb-[20px]'>{post.pageHeader.title}</h1>

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
