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
    <div className="mb-10 flex flex-col md:flex-row justify-between items-center">
      <div className="max-w-[800px] pb-5 md:pb-0">
        <Link href={`myths/${href}`}>
          <h1 className="text-4xl font-semibold italic mb-4">{title}</h1>
        </Link>
        <p className="italic">{children}</p>
      </div>
      <Image
        src={src}
        alt={title}
        width={361}
        height={248}
        className="rounded-sm w-[full]"
      />
    </div>
  )
}
