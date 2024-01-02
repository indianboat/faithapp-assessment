"use client";

import React from 'react';

const AboutSection = ({ data }) => {

  return (
    <>
      <div className="mt-8">
        {/* About the course */}
        <h1 className="text-2xl font-bold">About the course</h1>
        <div className="mt-4 flex flex-col gap-3" dangerouslySetInnerHTML={{ __html: data?.course?.about?.html_content }}></div>

        {/* What to expect from the course */}
        <div className="mt-8">
          <h1 className="text-2xl font-bold">What to expect from the course</h1>
          <div className="what_to_expect mt-4" dangerouslySetInnerHTML={{ __html: data?.course?.what_to_expect?.html_content }}></div>
        </div>

        {/* key topics */}
        <div className="mt-8">
          <h1 className="text-2xl font-bold">Key topics covered</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt ratione optio consequuntur tempore, ullam vero nobis, reprehenderit deserunt assumenda voluptatum quam adipisci animi amet corporis ea doloribus excepturi illo!</p>
          <div className="key-topics mt-4" dangerouslySetInnerHTML={{ __html: data?.course?.key_topics?.html_content }}></div>
        </div>
      </div>
    </>
  )
}

export default AboutSection

