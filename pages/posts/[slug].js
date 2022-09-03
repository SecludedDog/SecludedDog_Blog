import React, { useEffect } from 'react'
import { getPostDetails, getPosts } from '../../services'
import Aos from 'aos'
import 'aos/dist/aos.css'
import HeaderComp from '../../components/HeaderComp'
import NavBar from '../../components/NavBar'
import Overview from '../../components/Overview'
import TocHorizontal from '../../components/TocHorizontal'
import BigGallery from '../../components/BigGallery'
import Info from '../../components/Info'

// const data = {
//   slug: 'shaxi',
// }

export default function SinglePost({ post }) {
  //   const [posts, setPosts] = useState([])

  //   useEffect(() => {
  //     getPosts().then((newPosts) => {
  //       setPosts(newPosts)
  //     })
  //   }, [])
  console.log(`hello this is post details ${post}`)

  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])
  return (
    <div className='w-screen text-sm text-gray-600'>
      <NavBar></NavBar>
      <main>
        <HeaderComp post={post}></HeaderComp>
        <TocHorizontal></TocHorizontal>
        <Overview post={post}></Overview>
        <BigGallery post={post}></BigGallery>
        <Info post={post}></Info>
      </main>
      {/* </div> */}
      {/* <div className='pt-10'>
        <aside className='col-span-1 overflow-auto sticky top-0'>
          { <Toc></Toc> }
        </aside>
      </div> */}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostDetails(params.slug)
  return {
    props: { post },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
