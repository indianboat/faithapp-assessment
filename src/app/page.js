"use client";

import Image from "next/image";
import { data } from "./utils/data"
import { ChatIcon, VideoIcon } from "./Components/SVGIcons";
import { useState } from "react";
import { motion } from "framer-motion";
import AboutSection from "./Components/TabSections/AboutSection";
import InstructorSection from "./Components/TabSections/InstructorSection";
import ReviewSection from "./Components/TabSections/ReviewSection";

export default function Home() {

  const tabs = ["about", "instructor", "reviews"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <>
      <div className="2xl:conatiner mx-auto">
        <div className="relative">
          <Image src="/image.jpg" priority className="w-full select-none" width={1980} height={1000} alt="header-image" />
          <span className="absolute w-full h-full top-0 bg-gradient-to-r select-none from-black/60 to-transparent"></span>
          <div className="absolute mx-auto lg:bottom-16 md:bottom-12 sm:bottom-10 bottom-4 lg:left-16 md:left-12 sm:left-10 left-4">
            <h1 className="uppercase lg:text-base text-sm text-white font-medium">{data?.instructor?.name}</h1>
            <p className="text-white lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold lg:w-6/12 md:w-7/12 sm:w-full w-full mt-1">{data?.course?.title}</p>
          </div>
        </div>
      </div>

      <div className="container w-11/12 flex lg:flex-row md:flex-row sm:flex-col flex-col mx-auto gap-8">
        {/* about section */}
        <div className="lg:order-first md:order-first sm:order-last order-last lg:w-8/12 md:w-8/12 sm:w-full w-full pb-12 pt-4">
          <div className="">
            <div className="flex h-auto flex-row lg:gap-8 md:gap-7 sm:gap-6 gap-4 items-end">
              {
                tabs.map((tab, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedTab(tabs[index])}
                      className={`uppercase py-2 px-4 bottom-0 flex w-32 justify-center font-semibold relative`}>
                      {tab}
                      {
                        tab === selectedTab ? <motion.span className='h-0.5 absolute bottom-[-4px] left-0 right-0 bg-[#643EBC]' layoutId='underline'></motion.span> : ""
                      }
                    </button>
                  )
                })
              }
            </div>

            {
              selectedTab == "about" ? <AboutSection data={data} /> : selectedTab == "instructor" ? <InstructorSection data={data} /> : selectedTab == "reviews" ? <ReviewSection data={data} /> : null
            }
          </div>
        </div>

        {/* course fee section */}
        <div className="lg:w-4/12 md:w-4/12 sm:w-full w-full h-fit p-5 bg-blue-gray-50 lg:-translate-y-12 md:-translate-y-11 sm:-translate-y-6 translate-y-2">
          <h1 className="font-medium text-xl">Course Fees</h1>
          <span className="font-bold text-3xl">{data?.course?.fee?.currency == "INR" ? "₹" : "$"} {data?.course?.fee?.amount}</span>

          <div className="mt-4">
            <h1 className="text-lg font-semibold">What&apos;s included:</h1>
            <ul className="flex flex-col gap-1 mt-2">
              {
                data?.course?.inclusions?.on_demand_videos > 0 ?
                  <li className="text-[#202020] font-medium flex items-center gap-2 text-sm">
                    <span><VideoIcon /></span>
                    {data?.course?.inclusions?.on_demand_videos} on-demands videos
                  </li>
                  :
                  null
              }
              {
                data?.course?.inclusions?.live_stream_sessions > 0 ?
                  <li className="text-[#202020] font-medium flex items-center gap-2 text-sm">
                    <span><VideoIcon /></span>
                    {data?.course?.inclusions?.live_stream_sessions} livestream session
                  </li>
                  : null
              }
              {
                data?.course?.inclusions?.live_qa_sessions == true ?
                  <li className="text-[#202020] font-medium flex items-center gap-2 text-sm">
                    <span><ChatIcon /></span>
                    Live Q&A session with Nityanand Charan Das
                  </li>
                  : null
              }
              {
                data?.course?.inclusions?.whatsapp_community == true ?
                  <li className="text-[#202020] font-medium flex items-center gap-2 text-sm">
                    <span><ChatIcon /></span>
                    An active Whatsapp community
                  </li>
                  : null
              }
            </ul>
            <div className="mt-8">
              <button className="px-4 w-full py-2 shadow-md bg-[#643EBC] rounded-full text-white font-semibold">
                Register Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
