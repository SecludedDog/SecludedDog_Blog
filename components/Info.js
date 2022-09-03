import React from 'react'
import 'aos/dist/aos.css'
import Destinations from './Destinations'
import RestaurantsSimple from './RestaurantsSimple'
import Transport from './Transport'

const Info = ({ post }) => {
  return (
    <div id='info'>
      <Destinations post={post}></Destinations>
      <Transport post={post}></Transport>
      <RestaurantsSimple post={post}></RestaurantsSimple>
    </div>
  )
}

export default Info
