import React from 'react'
import Head from 'next/head'

const PageHeader = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Noto+Sans+HK&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
        rel='stylesheet'
      ></link>
    </Head>
  )
}

export default PageHeader
