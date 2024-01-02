import Link from 'next/link'
import React from 'react'
import { GithubIcon } from '../SVGIcons'

const Footer = () => {
  return (
    <>
      <div className='2xl:container mx-atuo border-2 py-3 px-4'>
        <div className="flex items-center justify-between text-[#202020]">
          <div className="">
            <span className='flex items-center gap-1'>Made by <Link href="https://github.com/indianboat" className='text-rose-700 hover:text-rose-900' target="_blank">Pankaj</Link></span>
          </div>
          <div className="flex items-center gap-1">
            <span className='text-sm'>&copy; Copyright 2024</span>
            <Link href="https://github.com/indianboat" target="_blank">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer