import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faStar)
import InfoHeader from './InfoHeader'

const RestaurantsSimple = ({ post }) => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])
  const star = '⭐️'
  return (
    <div
      data-aos='fade'
      data-aos-offset={50}
      className='mx-auto max-w-[750px] mb-[300px]'
    >
      <InfoHeader infoText='吃吃喝喝逛逛'></InfoHeader>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-[100px] gap-y-[40px] lg:mt-[100px] mt-[50px] mx-[30px] lg:mx-0'>
        {post.restaurants.map(
          (item) =>
            item.restaurantName && (
              <div key={item.id}>
                <div className='flex flex-col'>
                  <div>
                    <Link href={item.dianpingUrl}>
                      <a
                        target='_blank'
                        className='hover:underline hover:underline-offset-4 font-bold'
                      >
                        {item.restaurantName}
                      </a>
                    </Link>
                  </div>

                  <div className='flex flex-row '>
                    <p className=''>{item.description}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default RestaurantsSimple
