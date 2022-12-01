import Image from 'next/image'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Parchment({ children }: Props) {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/parchment.png"
        alt="Parchment Background"
        width={2200}
        height={1900}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <Image
        src="/steam-punk-icon-1.png"
        alt="Steam Punk Mechanism"
        width={116}
        height={116}
        className="absolute bottom-4 right-4 h-[80px] w-[80px] md:h-[116px] md:w-[116px]"
      />
      <Image
        src="/steam-punk-icon-2.png"
        alt="Steam Punk Unknown Item"
        width={116}
        height={116}
        className="absolute bottom-4 left-4 h-[80px] w-[80px] md:h-[116px] md:w-[116px]"
      />
      <div className="mx-4 pt-5 pb-28 md:mx-24 md:pt-24 md:pb-0">
        {children}
      </div>
    </div>
  )
}
