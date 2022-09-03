import React, { useEffect, useState, useRef } from 'react'
import { useGlobalContext } from './context'

const TocHorizontal = () => {
  //   const [navHeight, setNavHeight] = useState(100)
  //   useEffect(() => {
  //     const inlineNav = document.querySelectorAll('#inlineNav')
  //     const inlineNavHeight = inlineNav[0].offsetTop
  //     setNavHeight(inlineNavHeight)
  //     console.log(inlineNavHeight)
  //   }, [])
  const { isModal } = useGlobalContext()

  const [fixed, setFixed] = useState(false)

  const controlNavbar = () => {
    if (window.scrollY > 800) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState([])

    useEffect(() => {
      const headingElements = Array.from(
        document.querySelectorAll('#overview, #gallery, #info')
      )
      //   console.log(headingElements)

      const newNestedHeadings = getNestedHeadings(headingElements)
      setNestedHeadings(newNestedHeadings)
    }, [])

    return { nestedHeadings }
  }

  const [activeId, setActiveId] = useState()
  const { nestedHeadings } = useHeadingsData()

  useIntersectionObserver(setActiveId)
  // console.log(activeId)
  const TocItem = ({ tag, tagId }) => {
    return (
      <div
        className={`group ${
          activeId === tag &&
          'text-gray-900 transition-all ease-in-out duration-700 '
        }`}
      >
        <a
          href={tagId}
          className='mb-[10px] block scroll-mt-[200px]'
          onClick={(e) => {
            e.preventDefault()
            document.querySelector(`[id=${CSS.escape(tag)}]`).scrollIntoView({
              behavior: 'smooth',
            })
          }}
        >
          {tag.toUpperCase()}
        </a>
        <div
          className={`w-0 h-[3px] mx-auto bg-gray-400 transition-width ease-in-out duration-700
        group-hover:transition-width group-hover:ease-in-out group-hover:duration-700 group-hover:w-[24px] ${
          activeId === tag &&
          'w-[24px] bg-gray-800 transition-all ease-in-out duration-700'
        }`}
        ></div>
      </div>
    )
  }

  return (
    <div
      className={`w-[500px] mx-auto flex justify-center items-center h-[72px] bg-white gap-[60px] text-lg text-gray-400 z-40 transition ease-in-out	 duration-700 ${
        fixed && 'sticky top-0  transition ease-in-out	 duration-700 scale-75	'
      } ${isModal ? 'opacity-0' : ''}`}
      id='inlineNav'
    >
      {/* <TocItem tag='overview' tagId='#overview'></TocItem>
      <TocItem tag='gallery' tagId='#gallery'></TocItem>
      <TocItem tag='info' tagId='#info'></TocItem> */}

      <div
        className={`group transition-all ease-in-out duration-700 ${
          activeId === 'overview' &&
          'text-gray-900 transition-all ease-in-out duration-700'
        }`}
      >
        <a
          href='#overview'
          className='mb-[10px] block'
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#overview').scrollIntoView({
              behavior: 'smooth',
            })
          }}
        >
          OVERVIEW
        </a>
        <div
          className={`w-0 h-[3px] mx-auto bg-gray-400 transition-width ease-in-out duration-700
        group-hover:transition-width group-hover:ease-in-out group-hover:duration-700 group-hover:w-[24px] ${
          activeId === 'overview' &&
          'w-[24px] bg-gray-800 transition-all ease-in-out duration-700 '
        }`}
        ></div>
      </div>

      <div
        className={`group transition-all ease-in-out duration-700 ${
          activeId === 'gallery' &&
          'text-gray-900 transition-all ease-in-out duration-700'
        }`}
      >
        <a
          href='#gallery'
          className='mb-[10px] block scroll-mt-[200px]'
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#gallery').scrollIntoView({
              behavior: 'smooth',
            })
          }}
        >
          GALLERY
        </a>
        <div
          className={`w-0 h-[3px] mx-auto bg-gray-400 transition-width ease-in-out duration-700
        group-hover:transition-width group-hover:ease-in-out group-hover:duration-700 group-hover:w-[24px] ${
          activeId === 'gallery' &&
          'w-[24px] bg-gray-800 transition-all ease-in-out duration-700 '
        }`}
        ></div>
      </div>

      <div
        className={`group transition-all ease-in-out duration-700 ${
          activeId === 'info' &&
          'text-gray-900 transition-all ease-in-out duration-700'
        }`}
      >
        <a
          href='#info'
          className='mb-[10px] block scroll-mt-[200px]'
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#info').scrollIntoView({
              behavior: 'smooth',
            })
          }}
        >
          INFO
        </a>
        <div
          className={`w-0 h-[3px] mx-auto bg-gray-400 transition-width ease-in-out duration-700
        group-hover:transition-width group-hover:ease-in-out group-hover:duration-700 group-hover:w-[24px] ${
          activeId === 'info' &&
          'w-[24px] bg-gray-800 transition-all ease-in-out duration-700 '
        }`}
        ></div>
      </div>
    </div>
  )
}

export default TocHorizontal

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = []

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading
    nestedHeadings.push({ id, title, items: [] })
  })
  // console.log(nestedHeadings)
  return nestedHeadings
}

//   useHeadingsData()

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({})
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement
        return map
      }, headingElementsRef.current)

      const visibleHeadings = []
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key]
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })

      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id)

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id)
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        )
        setActiveId(sortedVisibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -40% 0px',
    })

    const headingElements = Array.from(
      document.querySelectorAll('#overview, #gallery, #info')
    )

    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [setActiveId])
}
