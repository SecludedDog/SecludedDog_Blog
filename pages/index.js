import Image from 'next/image'
import PageHeader from '../components/PageHeader'
import { featuredPosts } from '../src/featuredPosts'
import { sidebarLinks } from '../src/data'

const Home = () => {
  return (
    <>
      <PageHeader title='Secluded dog'></PageHeader>
      {/* <body> */}
      <div className='index'>
        <div className='flex flex-col justify-center items-center w-sreen h-screen lg:gap-[30px] gap-0'>
          <div className='scale-75 lg:scale-100'>
            <img src='/logo.png' className='w-[250px]'></img>
          </div>

          <div className='text-center text-xs lg:text-sm max-w-[800px] text-gray-600 flex flex-col gap-[20px] mx-[10px] lg:mx-0'>
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

        <div className='flex flex-col items-center lg:mt-[200px] mt-[100px]'>
          <div className='flex flex-col w-max mb-[20px] items-center'>
            <div className='bg-gray-900 h-[3px] w-[20%] mb-[10px]'></div>
            <div className='lg:text-lg text-sm'>
              <p className='tracking-[5px]'>TOP PICKS</p>
            </div>
          </div>
          <div className='flex flex-col lg:mt-[120px] mt-[50px] lg:w-[70vw]  max-w-[1180px]  lg:mx-[50px] mx-[30px] lg:gap-[80px] gap-[20px]'>
            <div className='grid lg:grid-cols-2 lg:gap-[50px] gap-[20px] '>
              <div className='flex flex-col  gap-[5px] group-cover-img'>
                <div className='flex items-end relative '>
                  <div className=' w-full lg:aspect-[0.95]  lg:mr-[8px] overflow-hidden'>
                    <a href={`/posts/${featuredPosts[0].slug}`}>
                      <img
                        className='object-cover  object-center w-[100%] lg:h-[100%] h-[30vh]'
                        src={featuredPosts[0].coverImg.url}
                      ></img>
                    </a>
                  </div>
                  <p className=' text-xs text-gray-400 rotate-90 origin-bottom-right absolute bottom-0 right-0 tracking-[4px]	hidden lg:block'>
                    {featuredPosts[0].title_en}
                  </p>
                </div>

                <p className='lg:text-lg text-sm'>
                  <a href={`/posts/${featuredPosts[0].slug}`}>
                    {featuredPosts[0].title}
                  </a>
                </p>
              </div>

              <div className='flex flex-col  gap-[5px] group-cover-img'>
                <div className='flex items-end gap-[20px] relative'>
                  <div className=' w-full lg:aspect-[0.95]  lg:mr-[8px] overflow-hidden'>
                    <img
                      className='object-cover  object-center w-[100%] lg:h-[100%] h-[30vh]'
                      src={featuredPosts[1].coverImg.url}
                    ></img>
                  </div>
                  <p className=' text-xs text-gray-400 rotate-90 origin-bottom-right absolute bottom-0 right-0 tracking-[4px] hidden lg:block'>
                    {featuredPosts[1].title_en}
                  </p>
                </div>
                <p className='lg:text-lg text-sm'>{featuredPosts[1].title}</p>
              </div>
            </div>

            <div className='flex flex-col  gap-[5px] group-cover-img'>
              <div className='flex items-end relative'>
                <div className=' w-full lg:aspect-[2] lg:mr-[8px] overflow-hidden'>
                  <img
                    className='object-cover  object-center w-[100%] lg:h-[100%] h-[30vh]'
                    src={featuredPosts[2].coverImg.url}
                  ></img>
                </div>
                <p className=' text-xs text-gray-400 rotate-90 origin-bottom-right absolute bottom-0 right-0 tracking-[4px] hidden lg:block'>
                  {featuredPosts[2].title_en}
                </p>
              </div>
              <p className='lg:text-lg text-sm'>{featuredPosts[2].title}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center lg:mt-[200px] mt-[150px] lg:gap-[120px] gap-[50px] '>
          {/* destinations */}
          <div className='flex flex-col w-max mb-[20px] items-center'>
            <div className='bg-gray-900 h-[3px] w-[20%] mb-[10px]'></div>
            <div className='lg:text-lg text-sm'>
              <p className='tracking-[5px]'>ALL DESTINATIONS</p>
            </div>
          </div>
          {/* destination content */}
          <div className='grid lg:grid-cols-2 justify-items-center lg:gap-y-[100px] gap-y-[50px] grid-cols-1 w-[70vw]  max-w-[1180px]  mx-[50px] '>
            {sidebarLinks.map((link) => (
              <div
                key={link.id}
                className=' flex flex-col text-base lg:items-center items-center gap-[15px]  w-[280px]'
              >
                <p className='font-medium'>{link.province}</p>
                <div className='flex gap-x-[30px] gap-y-[10px] flex-wrap justify-center'>
                  {link.cities.map((city) => (
                    <p key={city.id} className='text-gray-500 text-sm '>
                      <a
                        href={city.url}
                        className='hover:text-gray-800 transition-all ease-in-out duration-500'
                      >
                        {city.city}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* contact us */}
          <div className='flex flex-col w-max mb-[8px] items-center  mt-[100px]'>
            <div className='bg-gray-900 h-[3px] w-[20%] mb-[10px]'></div>
            <div className='lg:text-lg text-sm'>
              <p className='tracking-[5px]'>ABOUT US</p>
            </div>
          </div>
        </div>
      </div>
      {/* </body> */}
    </>
  )
}

export default Home
