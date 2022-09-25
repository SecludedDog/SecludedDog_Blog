import React from 'react'
import {
  faCircleChevronDown,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCircleChevronDown, faWaveSquare)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Divider = () => {
  return (
    <div className='flex justify-center items-center lg:mt-[280px] lg:mb-[150px] mb-[50px] mt-[50px] gap-[20px]'>
      {/* <div className='divider  w-[450px]'>
        <FontAwesomeIcon
          className='text-gray-300 text-xl'
          icon='fa-solid fa-wave-square'
        /> */}
      <div className='h-[1px] lg:w-[150px] w-[80px] bg-gray-300'></div>
      <div className='flex  flex-row gap-[10px] items-center'>
        <div className='w-[1px] h-[12px] bg-gray-300'></div>
        <div className='w-[1px] h-[18px] bg-gray-300'></div>
        <div className='w-[1px] h-[12px] bg-gray-300'></div>
      </div>
      <div className='h-[1px] lg:w-[150px] w-[80px] bg-gray-300'></div>
    </div>
    // </div>
  )
}

export default Divider
