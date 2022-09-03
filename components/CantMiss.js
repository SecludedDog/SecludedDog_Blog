import React from 'react'

const CantMiss = ({ post }) => {
  return (
    <div>
      <h2 id='cant-miss' className='text-2xl text-gray-800 text-center -mb-4'>
        不可错过的体验
      </h2>
      <div className='bg-zinc-100 pt-[120px] pb-[100px]'>
        <div className=' container mx-auto max-w-5xl '>
          {post.pageComponents.map(
            (item) =>
              item.cantMdesc && (
                <div
                  data-aos='fade'
                  data-aos-offset={50}
                  key={item.id}
                  className='grid grid-cols-9 gap-[40px] mb-10 items-end bg-white mx-[40px]'
                >
                  <img className='col-span-5' src={item.photo.url}></img>
                  <div className='col-span-4 mr-[40px] mb-[20px]'>
                    <h3
                      id={item.title}
                      className='font-semibold mb-4 text-base'
                    >
                      {item.title}
                    </h3>
                    <p>{item.cantMdesc}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default CantMiss
