"use client";

import React from 'react'
import Image from 'next/image';
import { Carousel, IconButton } from "@material-tailwind/react";

const ReviewSection = ({ data }) => {

  return (
    <>
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Testimonials</h1>

        <Carousel
          loop={true}
          className="mt-6 h-full w-full bg-gray-200 py-12"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-gray-900" : "w-4 bg-gray-500"
                    }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="sm"
              onClick={handlePrev}
              className="!absolute top-2/4 hover:bg-white/40 left-2 -translate-y-2/4 bg-white/50 text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="sm"
              onClick={handleNext}
              className="!absolute top-2/4 hover:bg-white/40 !right-2 -translate-y-2/4 bg-white/50 text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {
            [1, 2, 3].map((_, index) => (
              <div className="" key={index}>
                <div className="w-full">
                  <h1 className='font-semibold px-8 lg:text-[16px] md:text-[15px] sm:text-[12px] text-[12px] text-gray-950 text-center'>
                    &quot;{data?.testimonial?.text}&quot;
                  </h1>
                </div>
                <div className="mt-4">
                  <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col items-center justify-center gap-6">
                    <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col items-center gap-x-4 gap-y-2 relative">
                      <span className='w-10 h-10 rounded-full border bg-gray-300'>
                        <Image src="https://i.pravatar.cc/150?img=12" className='rounded-full' width={300} height={300} alt='avatar' />
                      </span>
                      <div className="flex flex-col lg:items-start md:items-start sm:items-center items-center">
                        <h1 className='text-gray-900 text-left text-[14px]'>{data?.testimonial?.reviewer_name}</h1>
                        <p className='text-gray-800 text-left text-[10px]'>{data?.testimonial?.reviewer_designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </>
  )
}

export default ReviewSection