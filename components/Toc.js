import React from 'react'
import { useState, useEffect } from 'react'

const Toc = () => {
  const { nestedHeadings } = useHeadingsData()
  //   console.log(nestedHeadings)
  return (
    <div>
      <Headings headings={nestedHeadings} />
    </div>
  )
}

export default Toc

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([])
  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2, h3'))
    const newNestedHeadings = getNestedHeadings(headingElements)
    setNestedHeadings(newNestedHeadings)
  }, [])
  return { nestedHeadings }
}

const getNestedHeadings = (headingElements) => {
  // console.log(`this is headingElements ${headingElements}`)
  // console.log(headingElements)
  const nestedHeadings = []
  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading
    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] })
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      })
    }
  })
  return nestedHeadings
}

const Headings = ({ headings }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id}>
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault()
            document
              .querySelector(`#${heading.id}`)
              .scrollIntoView({ behavior: 'smooth' })
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li key={child.id}>
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document
                      .querySelector(`#${child.id}`)
                      .scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
)
