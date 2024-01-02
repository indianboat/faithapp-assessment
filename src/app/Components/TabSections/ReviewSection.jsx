"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const ReviewSection = ({ data }) => {
  return (
    <>
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Testimonials</h1>
      </div>
      <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination]} className="mySwiper mt-4 flex justify-center">
        <SwiperSlide className='swiper-slide py-4 bg-slate-50 lg:px-16 md:px-16 gap-5 sm:px-14 px-10 flex flex-col justify-center w-full items-center'>
          <div className="w-full">
            <h1 className='font-semibold lg:text-[16px] md:text-[15px] sm:text-[12px] text-[12px] text-gray-950 text-center'>
              "{data?.testimonial?.text}"
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
        </SwiperSlide>
        <SwiperSlide className='swiper-slide py-4 bg-slate-50 lg:px-16 md:px-16 gap-5 sm:px-14 px-10 flex flex-col justify-center w-full items-center'>
          <div className="w-full">
            <h1 className='font-semibold lg:text-[16px] md:text-[15px] sm:text-[12px] text-[12px] text-gray-950 text-center'>
              "{data?.testimonial?.text}"
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
        </SwiperSlide>
        <SwiperSlide className='swiper-slide py-4 bg-slate-50 lg:px-16 md:px-16 gap-5 sm:px-14 px-10 flex flex-col justify-center w-full items-center'>
          <div className="w-full">
            <h1 className='font-semibold lg:text-[16px] md:text-[15px] sm:text-[12px] text-[12px] text-gray-950 text-center'>
              "{data?.testimonial?.text}"
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
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ReviewSection