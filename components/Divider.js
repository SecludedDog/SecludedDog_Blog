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
    <div className='flex justify-center mt-[150px] mb-[150px]'>
      <div className='divider  w-[450px]'>
        <FontAwesomeIcon
          className='text-gray-300 text-xl'
          icon='fa-solid fa-wave-square'
        />

        {/* <div className='inline	 flex  flex-row gap-[10px]'>
          <div className='inline	 w-[3px] h-[10px] bg-gray-900'></div>
          <div className='inline	 w-[3px] h-[16px] bg-gray-900'></div>
          <div className='inline	 w-[3px] h-[10px] bg-gray-900'></div>
        </div> */}
      </div>
    </div>
  )
}

export default Divider
