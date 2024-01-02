"use client";

import Image from 'next/image';
import React from 'react'
import { FacebookIcon, InstagramIcon, XTwitterIcon, YoutubeIcon } from '../SVGIcons';
import Link from 'next/link';

const InstructorSection = ({ data }) => {
  return (
    <>
      <div className="mt-8">
        {/* About the instructor */}
        <h1 className="text-2xl font-bold">About the Instructor</h1>

        {/* instructor image */}
        <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col gap-6 mt-4">
          <div className="min-w-28 h-28 flex justify-center">
            <Image src="/instructor.jpg" className='w-28 min-h-28 rounded-full' width={1000} height={1000} alt='instructor' />
          </div>

          {/* about instructor  */}
          <div className="flex flex-col gap-4">
            <div className="" dangerouslySetInnerHTML={{ __html: data?.about_instructor?.html_content }}></div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-6">
              {
                data?.instructor?.social_media?.facebook ? <Link href="#!" className="flex hover:bg-slate-100 px-3 py-2 border-2 rounded-lg items-center gap-2">
                  <span className='block'><FacebookIcon /></span>
                  <span>Facebook</span>
                </Link> : null
              }
              {
                data?.instructor?.social_media?.instagram ? <Link href="#!" className="flex hover:bg-slate-100 px-3 py-2 border-2 rounded-lg items-center gap-2">
                  <InstagramIcon />
                  <span>Instagram</span>
                </Link> : null
              }
              {
                data?.instructor?.social_media?.twitter ? <Link href="#!" className="flex hover:bg-slate-100 px-3 py-2 border-2 rounded-lg items-center gap-2">
                  <XTwitterIcon />
                  <span>Twitter</span>
                </Link> : null
              }
              {
                data?.instructor?.social_media?.youtube ? <Link href="#!" className="flex hover:bg-slate-100 px-3 py-2 border-2 rounded-lg items-center gap-2">
                  <YoutubeIcon />
                  <span>Youtube</span>
                </Link> : null
              }
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default InstructorSection

