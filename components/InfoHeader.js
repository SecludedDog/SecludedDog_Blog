import React from 'react'

const InfoHeader = ({ infoText }) => {
  return (
    <div className='flex justify-center	lg:mb-[50px] mb-0'>
      <div className='flex flex-row items-center gap-[20px]'>
        <div className='w-[3px] h-[16px] bg-gray-900'></div>
        <div>
          <h2
            id='restaurants'
            className='lg:text-[20px] text-xl text-gray-800 tracking-[10px] text-[#111] text-center'
          >
            {infoText}
          </h2>
        </div>
        <div className='w-[3px] h-[16px] bg-gray-900 -ml-[10px]'></div>
      </div>
    </div>
  )
}

export default InfoHeader
