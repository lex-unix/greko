import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  src: string
  href: string
  children: React.ReactNode
}

export default function Myth({ title, src, href, children }: Props) {
  return (
    <div className="mb-10 flex justify-between items-center">
      <div className="max-w-[800px]">
        <Link href={`myths/${href}`}>
          <h1 className="text-4xl font-semibold italic mb-4">{title}</h1>
        </Link>
        <p className="italic">{children}</p>
      </div>
      <Image
        src={src}
        alt={title}
        width={261}
        height={148}
        className="rounded-sm"
      />
    </div>
  )
}
