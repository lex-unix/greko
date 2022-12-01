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
    <Link href={href} className="flex flex-col items-center justify-center">
      <Image src={imageSrc} alt={title} width={80} height={80} />
      <div className="uppercase text-white">{title}</div>
    </Link>
  )
}

export default function Navbar() {
  return (
    <div className="fixed z-20 w-full pt-4 pb-4">
      <div className="hidden items-center justify-center gap-12 md:flex">
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
      <div className="ml-4 flex items-center justify-start md:hidden">
        <DropdownMenu />
      </div>
    </div>
  )
}
