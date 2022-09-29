import Image from 'next/image'
import PageHeader from '../components/PageHeader'
import { featuredPosts } from '../src/featuredPosts'
import { sidebarLinks } from '../src/data'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])

  const [opacity, setOpacity] = useState(1)
  // const [y, setY] = useState(0)
  // const [height, setHeight] = useState(0)

  const controlOpacity = () => {
    // setY(window.scrollY)
    // setHeight(window.innerHeight)
    setOpacity(
      Math.max(
        (window.innerHeight - window.scrollY - 200) /
          (window.innerHeight - 200),
        0
      )
    )
  }
  useEffect(() => {
    window.addEventListener('scroll', controlOpacity)
    return () => {
      window.removeEventListener('scroll', controlOpacity)
    }
  }, [])
  return (
    <>
      {/* {console.log(y, height, opacity)} */}
      <PageHeader title='Secluded dog'></PageHeader>
      <div className='index absolute top-0 left-0 right-0 '>
        <NavBar className='z-50'></NavBar>
        {/* <body> */}
        <div
          className=' fixed lg:top-[72px] top-[30px] bottom-0 left-0 right-0 flex flex-col justify-center items-center w-sreen h-[calc(100vh-100px)] 2xl:gap-[30px] gap-0'
          style={{ opacity: opacity }}
        >
          <div className='scale-75 2xl:scale-100 lg:scale-90'>
            <img src='/logo.png' className='w-[250px]'></img>
          </div>

          <div className='text-center text-xs lg:text-[16px] max-w-[800px] text-gray-600 flex flex-col gap-[20px] mx-[10px] lg:mx-0 '>
            <div className='index-poem open-sans-i'>
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
            <div className='open-sans'>
              <p className='text-[25px]'>. . .</p>
              <p className='mt-[20px] text-xs lg:text-[16px]'>Lev Tolstoy</p>
            </div>
          </div>
        </div>
        <div className='place-holder  h-[calc(100vh-100px)]'></div>
        <div className=' bg-white relative z-10 lg:mt-[50px] mt-[10px] pt-[30px]'>
          <div className='flex flex-col items-center lg:mt-[50px] mt-[10px] '>
            <div className='flex flex-col w-max mb-[20px] items-center'>
              <div className='bg-gray-900 h-[3px] w-[20%] mb-[20px]'></div>
              <div className='lg:text-lg text-sm'>
                <p className='tracking-[3px] font-medium text-[#333333]	'>
                  TOP PICKS
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:mt-[120px] mt-[50px] lg:w-[70vw]  max-w-[1180px]  lg:mx-[50px] mx-[20px] lg:gap-[80px] gap-[35px]'>
              <div className='grid lg:grid-cols-2 lg:gap-[50px] gap-[35px] '>
                <div className='flex flex-col  gap-[5px] group-cover-img'>
                  <div
                    className='flex items-end relative '
                    data-aos='fade'
                    data-aos-offset='50'
                  >
                    <div className=' w-full lg:aspect-[0.95]  lg:mr-[8px] overflow-hidden lg:rounded-xl rounded-md'>
                      <a href={`/posts/${featuredPosts[0].slug}`}>
                        <img
                          className='object-cover  object-center w-[100%] lg:h-[100%] h-[30vh]'
                          src={featuredPosts[0].coverImg.url}
                        ></img>
                      </a>
                    </div>
                    <p className=' text-xs text-gray-400 rotate-90 origin-bottom-right absolute bottom-0 right-0 tracking-[7px]	hidden lg:block font-medium	'>
                      {featuredPosts[0].title_en}
                    </p>
                  </div>

                  <p className='lg:text-lg text-sm feature-title-font tracking-[4px] mt-[8px]'>
                    <a href={`/posts/${featuredPosts[0].slug}`}>
                      {featuredPosts[0].title}
                    </a>
                  </p>
                </div>

                <div className='flex flex-col  gap-[5px] group-cover-img'>
                  <div
                    className='flex items-end gap-[20px] relative'
                    data-aos='fade'
                    data-aos-offset='80'
                  >
                    <div className=' w-full lg:aspect-[0.95]  lg:mr-[8px] overflow-hidden lg:rounded-xl rounded-md'>
                      <img
                        className='object-cover  object-center w-[100%] lg:h-[100%] h-[30vh]'
                        src={featuredPosts[1].coverImg.url}
                      ></img>
                    </div>
                    <p className=' text-xs text-gray-400 rotate-90 origin-bottom-right absolute bottom-0 right-0 tracking-[7px] hidden lg:block font-medium	'>
                      {featuredPosts[1].title_en}
                    </p>
                  </div>
                  <p className='lg:text-lg text-sm feature-title-font tracking-[4px] mt-[8px]'>
                    {featuredPosts[1].title}
                  </p>
                </div>
              </div>

              <div className='flex flex-col  gap-[5px] group-cover-img'>
                <div
                  className='flex items-end relative'
                  data-aos='fade'
                  data-aos-offset='50'
                >
                  <div className=' w-full lg:aspect-[2] lg:mr-[8px] overflow-hidden lg:rounded-xl rounded-md'>
                    <img
                      className='object-cover  object-center w-[100%] lg:h-[100%] h-[30vh] 	'
                      src={featuredPosts[2].coverImg.url}
                    ></img>
                  </div>
                  <p className=' text-xs text-gray-400 rotate-90 origin-bottom-right absolute bottom-0 right-0 tracking-[7px] hidden lg:block ml-[2px] font-medium	'>
                    {featuredPosts[2].title_en}
                  </p>
                </div>
                <p className='lg:text-lg text-sm feature-title-font tracking-[4px] mt-[8px]'>
                  {featuredPosts[2].title}
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center lg:mt-[200px] mt-[150px] lg:gap-[120px] gap-[50px] '>
            {/* destinations */}
            <div className='flex flex-col w-max mb-[20px] items-center'>
              <div className='bg-gray-900 h-[3px] w-[20%] mb-[20px]'></div>
              <div className='lg:text-lg text-sm'>
                <p className='tracking-[3px] font-medium	text-[#333333]'>
                  ALL DESTINATIONS
                </p>
              </div>
            </div>
            {/* destination content */}
            <div className='grid lg:grid-cols-2 justify-items-center lg:gap-y-[130px] gap-y-[50px] grid-cols-1 w-[70vw]  max-w-[1180px]  mx-[50px] lg:gap-x-[250px] lg:mt-[30px]'>
              {sidebarLinks.map((link) => (
                <div
                  key={link.id}
                  className=' flex flex-col text-base  items-center gap-[40px]  w-[350px]'
                >
                  <p className='lg:text-[16px] text-[15px] text-[#000] tracking-[4px]'>
                    {link.province}
                  </p>
                  <div className='flex gap-x-[40px] gap-y-[40px] flex-wrap justify-center'>
                    {link.cities.map((city) => (
                      <p
                        key={city.id}
                        className='text-gray-500 lg:text-[18px] text-[15px] tracking-[4px] text-[#666666]'
                      >
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
          </div>

          {/* about us */}
          <div className='flex flex-col items-center lg:mt-[350px] mt-[150px] gap-[50px] '>
            <div className='flex flex-col w-max mb-[8px] items-center  '>
              <div className='bg-gray-900 h-[3px] w-[20%] mb-[20px]'></div>
              <div className='lg:text-lg text-sm'>
                <p className='tracking-[3px] font-medium text-[#333333]	'>
                  ABOUT US
                </p>
              </div>
            </div>
            <div className='text-center text-gray-500 about-us-font max-w-[800px] mx-[20px] lg:mt-[80px] lg:text-[16px] text-[15px] leading-7'>
              <p>我们是两个体力不佳的自驾游和散步爱好者。</p>
              <p>
                在我们的学生时代，网速是慢的，互联网是自由开放的，博客是流行的，文字是长的，旅行前是要做攻略的。
              </p>
              <p>
                我们做这个博客的目的，大概就是源于这样一种古早的互联网情结。
              </p>
              <p>
                在这里记录我们的旅途，同时期望提供较为全面的实用信息给有相似旅游偏好的朋友。
              </p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>

      {/* </body> */}
    </>
  )
}

export default Home
