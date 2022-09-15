import Image from 'next/image'
import PageHeader from '../components/PageHeader'
import { featuredPosts } from '../src/featuredPosts'

const Home = () => {
  return (
    <>
      <PageHeader></PageHeader>
      <div className='flex flex-col justify-center items-center w-sreen h-screen gap-[30px]'>
        <div className=''>
          <img src='/logo.png' className='w-[250px]'></img>
        </div>

        <div className='text-center max-w-[800px] text-gray-600 flex flex-col gap-[20px] '>
          <div className='index-poem'>
            <p>
              "A quiet{' '}
              <span className='half-bg inline-block mb-0 pb-0 px-[2px]'>
                secluded
              </span>{' '}
              life in the country,{' '}
            </p>
            {/* <p>
              with the possibility of being useful to people to whom it is easy
              to do good,
            </p>
            <p>and who are not accustomed to have it done to them;</p> */}

            <p>then work which one hopes may be of some use, </p>
            <p>then rest, nature, books, music, love for one's neighbor </p>
            <p>- such is my idea of happiness.</p>

            <p>and then, on top of all that, </p>
            <p>
              you for a mate, and{' '}
              <span className='half-bg inline-block mb-0 pb-0 px-[2px]'>
                dog
              </span>
              , perhaps
            </p>
            <p>- what more can the heart of a man desire?"</p>
          </div>
          <div>
            <p className='text-xl'>. . .</p>
            <p className='mt-[10px]'>Lev Tolstoy</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center mt-[200px]'>
        <div className='flex flex-col w-max mb-[8px] items-center'>
          <div className='bg-gray-900 h-[3px] w-[40%] mb-[10px]'></div>
          <div className='lg:text-lg text-sm'>
            <p className='tracking-[5px]'>TOP PICKS</p>
          </div>
        </div>
        <div className='flex flex-col mt-[50px] w-[70vw]  max-w-[1180px]  mx-[50px] gap-[40px]'>
          <div className='grid grid-cols-2 gap-[50px] '>
            <div className='flex flex-col  gap-[5px] group-cover-img'>
              <div className='flex items-end relative '>
                <div className=' w-full aspect-[0.95] mr-[8px] overflow-hidden'>
                  <img
                    className='object-cover  object-center '
                    src={featuredPosts[0].coverImg.url}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  ></img>
                </div>
                <p className=' text-xs text-gray-400 rotate-90 origin-bottom-right absolute bottom-0 right-0'>
                  {featuredPosts[0].title_en}
                </p>
              </div>

              <p className='text-lg'>
                <a href={`/posts/${featuredPosts[0].slug}`}>
                  {featuredPosts[0].title}
                </a>
              </p>
            </div>

            <div className='flex flex-col  gap-[5px] group-cover-img'>
              <div className='flex items-end gap-[20px] relative'>
                <div className=' w-full aspect-[0.95] mr-[8px] overflow-hidden'>
                  <img
                    className='object-cover  object-center'
                    src={featuredPosts[1].coverImg.url}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  ></img>
                </div>
                <p className=' text-xs text-gray-400 rotate-90 origin-bottom-right absolute bottom-0 right-0'>
                  {featuredPosts[1].title_en}
                </p>
              </div>
              <p className='text-lg'>{featuredPosts[1].title}</p>
            </div>
          </div>

          <div className='flex flex-col  gap-[5px] group-cover-img'>
            <div className='flex items-end relative'>
              <div className=' w-full aspect-[2] mr-[8px] overflow-hidden'>
                <img
                  className='object-cover  object-center'
                  src={featuredPosts[2].coverImg.url}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                ></img>
              </div>
              <p className=' text-xs text-gray-400 rotate-90 origin-bottom-right absolute bottom-0 right-0'>
                {featuredPosts[2].title_en}
              </p>
            </div>
            <p className='text-lg'>{featuredPosts[2].title}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
