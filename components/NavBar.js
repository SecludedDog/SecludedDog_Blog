import React, { useEffect, useState } from 'react'
import { sidebarLinks } from '../src/data'
import { useGlobalContext } from './context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faBars)
library.add(faXmark)

const NavBar = () => {
  // const [hidden, setHidden] = useState(false)
  // const [lastScrollY, setLastScrollY] = useState(0)
  // const [shiftLeft, setShiftLeft] = useState(false)

  // const controlNavbar = () =>
  //   // if (window.scrollY > lastScrollY) {
  //   //   setHidden(true)
  //   // } else {
  //   //   setHidden(false)
  //   // }
  //   if (window.scrollY > 800) {
  //     setShiftLeft(true)
  //   } else {
  //     setShiftLeft(false)
  //   }
  //   setLastScrollY(window.scrollY)
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', controlNavbar)
  //   return () => {
  //     window.removeEventListener('scroll', controlNavbar)
  //   }
  // }, [lastScrollY])
  // const [isModal, setIsModal] = useState(false)

  // const openModal = () => {
  //   setIsModal(true)
  // }
  // const closeModal = () => {
  //   setIsModal(false)
  // }

  const { isModal, closeModal, openModal } = useGlobalContext()
  return (
    <>
      <div className='mx-[40px] lg:sticky lg:top-0 z-30 mb-[20px] lg:mb-0'>
        <nav
          className={`max-w-[1600px]  mx-auto  flex justify-center h-[72px] transition-all ease-in-out duration-500 bg-white  
        
        `}
        >
          <div className='flex w-full items-center justify-between lg:text-xl text-sm transition-all ease-in-out duration-500'>
            <div className>
              <h1 className='logo tracking-[2px] text-lg font-semibold	text-gray-900'>
                <a href='/'>Secluded dog</a>
              </h1>
            </div>
            <button onClick={openModal} className={isModal ? 'hidden' : ''}>
              <FontAwesomeIcon icon='fa-bars' />
            </button>
            <button onClick={closeModal} className={isModal ? '' : 'hidden'}>
              <FontAwesomeIcon icon='fa-xmark' />
            </button>
          </div>
        </nav>
      </div>
      <div
        className={`fixed overflow-y-scroll bg-white top-0 left-0  right-0 z-10 lg:mx-[80px] mx-0 transition ease-in-out duration-500 ${
          isModal ? '' : '-translate-y-full '
        } `}
      >
        <div className='lg:max-w-7xl  lg:mx-auto h-screen lg:mt-[20px] mt-[25px] 	'>
          {/* close icon */}

          <div className='flex flex-col items-center gap-[70px] '>
            <div className='text-right w-full mr-[35px]'>
              <button onClick={closeModal} className={isModal ? '' : 'hidden'}>
                <FontAwesomeIcon icon='fa-xmark' />
              </button>
            </div>
            {/* destinations */}
            <div className='flex flex-col items-center'>
              <div className='bg-gray-900 h-[3px] w-[40px] mb-[15px]'></div>
              <div>
                <p className='text-lg font-medium	font-en tracking-[5px]'>
                  DESTINATIONS
                </p>
              </div>
            </div>
            {/* destination content */}
            <div className='grid lg:grid-cols-2 justify-items-center lg:gap-[100px] grid-cols-1 gap-[50px]'>
              {sidebarLinks.map((link) => (
                <div
                  key={link.id}
                  className='flex flex-col text-base items-center gap-[15px]  w-[280px]'
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
            <div className='flex flex-col items-center'>
              <div className='bg-gray-900 h-[3px] w-[40px] mb-[15px]'></div>
              <p className='text-lg font-medium	font-en tracking-[5px]'>
                CONTACT US
              </p>
              {/* <p className='mt-[30px] font-en text-gray-500 lg:text-sm text-xs'>
                Email: xiadayu2022@gmail.com
              </p>
              <p className='mb-[30px] font-en text-gray-500 lg:text-sm text-xs'>
                WeChat: Cigarmoni
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
