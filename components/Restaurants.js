import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faStar)

const Restaurants = ({ post }) => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])
  const star = '⭐️'
  return (
    <div
      data-aos='fade'
      data-aos-offset={50}
      className='mb-20 container mx-auto max-w-5xl'
    >
      <h2
        id='restaurants'
        className='text-2xl text-gray-800 mt-10 mb-10 text-center '
      >
        吃吃喝喝
      </h2>
      <div className='grid grid-cols-4 gap-6 justify-items-center'>
        {post.restaurants.map(
          (item) =>
            item.restaurantName && (
              <div key={item.id} className='mb-10 items-top '>
                <div className='flex text-center flex-col'>
                  <div>
                    <Link href={item.dianpingUrl}>
                      <a
                        target='_blank'
                        className='hover:underline hover:underline-offset-4'
                      >
                        {item.restaurantName}
                      </a>
                    </Link>
                  </div>
                  {/* <p>{star.repeat(item.rating)}</p> */}
                  <div className='flex flex-row gap-2 justify-center my-2'>
                    {[...Array(item.rating)].map((e, i) => (
                      <div key={i}>
                        <FontAwesomeIcon
                          icon='star'
                          // style={{ color: 'yellow' }}
                          className='text-amber-500'
                        />
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-row gap-2 justify-center'>
                    {item.featuredDish.map((dish, index) => (
                      <div className='flex bg-[#D5EDC4]  h-2 items-center px-2'>
                        <p key={index} className=''>
                          {dish}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Restaurants
