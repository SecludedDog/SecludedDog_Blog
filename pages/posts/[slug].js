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
import PageHeader from '../../components/PageHeader'
import Footer from '../../components/Footer'

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
  console.log(post)

  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])
  return (
    <>
      <PageHeader title={post.title}></PageHeader>

      {/* <body> */}
      <div className='w-screen text-sm text-gray-600'>
        <NavBar></NavBar>
        <main>
          <HeaderComp post={post}></HeaderComp>
          <TocHorizontal></TocHorizontal>
          <Overview post={post}></Overview>
          <BigGallery post={post}></BigGallery>
          <Info post={post}></Info>
        </main>
        <Footer></Footer>
        {/* </div> */}
        {/* <div className='pt-10'>
        <aside className='col-span-1 overflow-auto sticky top-0'>
        { <Toc></Toc> }
        </aside>
      </div> */}
      </div>
      {/* </body> */}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = (await getPostDetails(params.slug)) || []
  return {
    props: { post },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}
