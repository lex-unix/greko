import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  name: string
  description: string
  src: string
  href: string
}

export default function HeroCard({ name, description, src, href }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={`heroes/${href}`}>
        <Image
          src={`/hero-cards/${src}`}
          alt={name}
          width={211}
          height={314}
          className="rounded-2xl"
        />
      </Link>
      <div className="mt-3 text-center">
        <Link href={href} className="text-xl font-semibold">
          {name}
        </Link>
        <p className="italic">{description}</p>
      </div>
    </div>
  )
}
