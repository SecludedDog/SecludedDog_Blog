import React from 'react'

const InfoHeader = ({ infoText }) => {
  return (
    <div className='flex justify-center	mb-[50px] '>
      <div className='flex flex-row items-center gap-[20px]'>
        <div className='w-[3px] h-[16px] bg-gray-900'></div>
        <div>
          <h2
            id='restaurants'
            className='text-2xl text-gray-800 tracking-[10px]'
          >
            {infoText}
          </h2>
        </div>
        <div className='w-[3px] h-[16px] bg-gray-900'></div>
      </div>
    </div>
  )
}

export default InfoHeader
