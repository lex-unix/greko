import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DropdownMenu from './dropdown-menu'

interface NavLinkProps {
  title: string
  imageSrc: string
  href: string
}

const NavLink = ({ title, imageSrc, href }: NavLinkProps) => {
  return (
    <Link href={href} className="flex flex-col justify-center items-center">
      <Image src={imageSrc} alt={title} width={80} height={80} />
      <div className="text-white uppercase">{title}</div>
    </Link>
  )
}

export default function Navbar() {
  return (
    <div className="w-full pt-4 pb-4 fixed z-20">
      <div className="hidden md:flex justify-center items-center gap-12">
        <NavLink title="Головна" imageSrc="/nav-icons/home-icon.png" href="/" />
        <NavLink
          title="Міфи"
          imageSrc="/nav-icons/myth-icon.png"
          href="/myths"
        />
        <NavLink
          title="Герої"
          imageSrc="/nav-icons/heroes-icon.png"
          href="/heroes"
        />
      </div>
      <div className="flex md:hidden justify-start items-center ml-4">
        <DropdownMenu />
      </div>
    </div>
  )
}
