import React from 'react'
import Image from 'next/image'

export default function Masthead() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/masthead.png"
          alt="Masthead"
          width={2200}
          height={1900}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-white text-center">
        <h1 className="text-2xl md:text-6xl mb-3 md:mb-6">
          Поринь у світ грецької міфології
        </h1>
        <h3 className="md:text-2xl">
          Дізнайся про міфи та героїв античної греції
        </h3>
      </div>
    </div>
  )
}
