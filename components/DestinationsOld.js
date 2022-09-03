import React from 'react'
import Image from 'next/image'

const Destinations = ({ post }) => {
  return (
    <>
      <div
        id='destinations'
        className=' text-2xl text-gray-800 text-center -mt-4 mb-10 z-40 relative'
      >
        景点
      </div>
      <div className='mb-20 container mx-auto max-w-[1000px]'>
        <div className='relative'>
          <Image
            src={post.destinations[0].destinationMap.url}
            layout='responsive'
            objectFit='contain'
            width='100%'
            height='60%'
          />
        </div>
        <div className='columns-3 gap-x-16'>
          {post.destinations[0].destinationDescComp.map((item) => (
            <div className='mb-6 break-inside-avoid	' key={item.id}>
              <span className='rounded bg-[#D5EDC4] px-2 py-0.5 mb-2 inline-block'>
                {item.placeName}
              </span>
              <p>{item.placeDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Destinations
