// a bento grid component with the courses data
// a bento grid is a grid where each cell has a different size
// on scroll effect to load more data
// on hover effect to show the course details
// on click effect to navigate to the course details page
// each course has only an image
// on hover the course title and details are shown
// on scroll effect to make the image move up and down
// the tehnologies used are axios, next.js, react, tailwindcss
// the data is fetched from a json file
// this is a component that is used in the home page
// it is a reusable component

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BentoCourses = () => {
  /*const courses = {
    bacalaureat: {
      title: "Bacalaureat",
      description: "description example",
      courseLogo: LogoBac,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      dynamicHeight: 200,
      dynamicWidth: 200,
      link: "/course/bac",
    },
    cpp: {
      title: "C++",
      description: "description example",
      courseLogo: LogoCpp,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      dynamicHeight: 200,
      dynamicWidth: 200,
      link: "/course/cplusplus",
    },
    java: {
      title: "Java",
      description: "description example",
      courseLogo: LogoJava,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      dynamicHeight: 200,
      dynamicWidth: 200,
      link: "/course/java",
    },
    python: {
      title: "Python",
      description: "description example",
      courseLogo: LogoPython,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      dynamicHeight: 200,
      dynamicWidth: 200,
      link: "/course/python",
    },
    ads1: {
      title: "Algorithms and Data Structures",
      description:
        "In this introductory course, we'll unravel the essentials of efficient problem-solving in computer science. From mastering algorithms to designing powerful data structures, get ready to enhance your programming prowess.",
      courseLogo: LogoAds,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      dynamicHeight: 200,
      dynamicWidth: 200,
      link: "/course/ads1",
    },
    ads2: {
      title: "Advanced Algorithms and Data Structures",
      description:
        "Building on your foundational knowledge, this course delves deep into intricate algorithms, advanced data structures, and sophisticated techniques used by seasoned professionals.",
      courseLogo: LogoAds2,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      dynamicHeight: 200,
      dynamicWidth: 200,
      link: "/course/ads2",
    },
  };*/

  const [style, setStyle] = useState({ display: "none" });

  return (
    <div className="flex flex-row items-center justify-center py-48 w-full bg-black">
      <div className="grid grid-cols-7 grid-rows-7 w-4/5 gap-5 min-h-screen">
        {/* Algorithm and Data Structures 1 bento grid element */}
        <div
          onMouseEnter={(e) => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
          onClick={() => {
            window.location.href = "/course/ads1";
          }}
          className="col-start-1 col-end-3 row-start-1 row-end-5 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex bg-cover bg-center bg-neutral-950"
        >
          <h1
            style={{ backgroundImage: "url('/algo-logo.svg')", style }}
            className="text-3xl p-5 bg-neutral-950 rounded-lg border-2"
          >
            Algorithms and Data Structures
          </h1>
        </div>
        {/* Python bento grid element */}
        <div
          onClick={() => {
            window.location.href = "/course/python";
          }}
          style={{ backgroundImage: "url('/python-logo.svg')" }}
          className="col-start-3 col-end-8 row-start-1 row-end-3 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex bg-cover bg-center bg-neutral-950"
        >
          <h1 className="text-3xl p-5 bg-neutral-950 rounded-lg border-2">
            Python
          </h1>
        </div>
        {/* C++ bento grid element */}
        <div
          style={{ backgroundImage: "url('/cpp-logo.svg')" }}
          onClick={() => {
            window.location.href = "/course/cplusplus";
          }}
          className="col-start-3 col-end-8 row-start-6 row-end-8 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex bg-cover bg-center bg-neutral-950"
        >
          <h1 className="text-3xl p-5 bg-neutral-950 rounded-lg border-2">
            C++
          </h1>
        </div>
        {/* Java bento grid element */}
        <div
          style={{ backgroundImage: "url('/java-logo.svg')" }}
          onClick={() => {
            window.location.href = "/course/java";
          }}
          className="col-start-1 col-end-3 row-start-5 row-end-8 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex bg-cover bg-center bg-neutral-950"
        >
          <h1 className="text-3xl p-5 bg-neutral-950 rounded-lg border-2">
            Java
          </h1>
        </div>
        {/* Algorithm and Data Structures 2 bento grid element */}
        <div
          style={{ backgroundImage: "url('/ads-logo.svg')" }}
          onClick={() => {
            window.location.href = "/course/ads2";
          }}
          className="col-start-6 col-end-8 row-start-3 row-end-6 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex bg-cover bg-top bg-neutral-950"
        >
          <h1 className="text-3xl p-5 bg-neutral-950 rounded-lg border-2">
            Advanced Algorithms and Data Structures
          </h1>
        </div>
        {/* Baccalaureate bento grid element */}
        <div
          style={{ backgroundImage: "url('/bac.svg')" }}
          onClick={() => {
            window.location.href = "/course/bac";
          }}
          className="col-start-3 col-end-6 row-start-3 row-end-6 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex gap-10 bg-cover bg-start bg-neutral-950"
        >
          <h1 className="text-3xl p-5 bg-neutral-950 rounded-lg border-2">
            Romanian Baccalaureate
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BentoCourses;
