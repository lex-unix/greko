import Image from 'next/image'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Parchment({ children }: Props) {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/parchment.png"
        alt="Parchment Background"
        width={2200}
        height={1900}
        className="object-cover absolute inset-0 w-full h-full -z-10"
      />
      <Image
        src="/steam-punk-icon-1.png"
        alt="Steam Punk Mechanism"
        width={116}
        height={116}
        className="absolute bottom-4 right-4"
      />
      <Image
        src="/steam-punk-icon-2.png"
        alt="Steam Punk Unknown Item"
        width={116}
        height={116}
        className="absolute bottom-4 left-4"
      />
      <div className="mx-4 md:mx-24 pt-24">{children}</div>
    </div>
  )
}
