import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import DropdownMenuItem from './dropdown-menu-item'

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-2 bg-yellow-600 ring-stone-400">
          <MenuIcon />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-56 z-50 origin-top-left rounded-md bg-stone-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-">
            <DropdownMenuItem href="/">Головна</DropdownMenuItem>
            <DropdownMenuItem href="/heroes">Герої</DropdownMenuItem>
            <DropdownMenuItem href="/myths">Міфи</DropdownMenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 stroke-zinc-800 dark:stroke-gray-200"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  )
}
