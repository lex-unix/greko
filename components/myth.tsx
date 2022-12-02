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
    <div className="mb-4 flex flex-col items-start justify-between md:mb-10 md:flex-row">
      <div className="mr-0 max-w-[800px] pb-5 md:mr-3 md:pb-0">
        <Link href={`myths/${href}`}>
          <h1 className="mb-4 text-4xl font-semibold italic">{title}</h1>
        </Link>
        <p className="md:text-xl">
          {children}
          <Link href={`myths/${href}`} className="text-[#FD8994]">
            <b>читати далі</b>
          </Link>
        </p>
      </div>
      <Image
        src={src}
        alt={title}
        width={361}
        height={248}
        className="w-[full] rounded-sm"
      />
    </div>
  )
}
