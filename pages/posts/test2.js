import Link from 'next/link'
import { GraphQLClient } from 'graphql-request'

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.hygraph.com/v2/cl4xvtrvk0st401t2ao8346y2/master'
  )

  const { posts } = await graphcms.request(
    `
      { 
        posts {
          slug
          title
        }
      }
    `
  )
  console.log(posts)
  posts.map(({ slug }) => console.log(`this is the slug: ${slug}`))

  return {
    props: {
      posts,
    },
  }
}

export default function Pppp({ posts }) {
  return posts.map(({ slug, title }) => (
    <Link key={slug} href={`/posts/${slug}`}>
      <a>{title}</a>
    </Link>
  ))
}

// export default ({ posts }) =>
//   posts.map(({ slug, title }) => (
//     <Link key={slug} href={`/posts/${slug}`}>
//       <a>{title}</a>
//     </Link>
//   ))
