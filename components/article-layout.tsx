import Head from 'next/head'
import React from 'react'
import Parchment from './parchment'

interface Props {
  title: string
  children: React.ReactNode
}

export default function ArticleLayout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Parchment>
        <div className="pt-16 md:pb-32">
          <h1 className="mb-4 text-4xl font-bold">{title}</h1>
          <div className="text-base font-light italic md:text-xl">
            {children}
          </div>
        </div>
      </Parchment>
    </>
  )
}
