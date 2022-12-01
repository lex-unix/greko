import React from 'react'
import Image from 'next/image'

export default function Masthead() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/masthead.png"
          alt="Masthead"
          width={2200}
          height={1900}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center text-white">
        <h1 className="mb-4 font-sans text-4xl font-semibold uppercase md:mb-6 md:text-6xl">
          Поринь у світ грецької міфології
        </h1>
        <h3 className="text-xl md:text-2xl">
          Дізнайся про міфи та героїв античної греції
        </h3>
      </div>
    </div>
  )
}
