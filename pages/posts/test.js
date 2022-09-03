import React, { useState, useEffect } from 'react'
import { getPostDetails } from '../../services'
// import Aos from 'aos'
// import 'aos/dist/aos.css'
import CantMiss from '../../components/CantMiss'

const data = {
  slug: 'shaxi',
}

export default function SinglePost({ post }) {
  //   const [posts, setPosts] = useState([])

  //   useEffect(() => {
  //     getPosts().then((newPosts) => {
  //       setPosts(newPosts)
  //     })
  //   }, [])
  console.log(post)
  //   useEffect(() => {
  //     Aos.init({ duration: 500 })
  //   }, [])
  return (
    <div className='container mx-auto max-w-3xl text-sm text-gray-600'>
      <p>{post.overview}</p>
      <CantMiss post={post}></CantMiss>
    </div>
  )
}

export async function getStaticProps() {
  const post = (await getPostDetails(data.slug)) || []
  return {
    props: { post },
  }
}
