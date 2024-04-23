import React, { useState } from "react";

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

  const [styleAds, setStyleAds] = useState({ display: "none" });
  const [styleCpp, setStyleCpp] = useState({ display: "none" });
  const [styleJava, setStyleJava] = useState({ display: "none" });
  const [stylePython, setStylePython] = useState({ display: "none" });
  const [styleAds2, setStyleAds2] = useState({ display: "none" });
  const [styleBac, setStyleBac] = useState({ display: "none" });

  return (
    <div className="flex flex-col items-center justify-center p-48 w-full bg-neutral-950 poppins">
      <h1 className="text-3xl text-white font-semibold">Our courses</h1>
      <div className="grid grid-cols-7 grid-rows-7 w-4/5 gap-10 min-h-screen mt-20">
        {/* Algorithm and Data Structures 1 bento grid element */}
        <div
          style={{ backgroundImage: "url('/algo-logo.svg')" }}
          onMouseEnter={(e) => {
            setStyleAds({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyleAds({ display: "none" });
          }}
          onClick={() => {
            window.location.href = "/course/ads1";
          }}
          className="col-start-1 col-end-3 row-start-1 row-end-5 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex bg-cover bg-center bg-neutral-950"
        >
          <h1
            style={styleAds}
            className="text-lg p-5 bg-neutral-950 rounded-lg border-2 animate-bounce duration-700"
          >
            Algorithms and Data Structures
          </h1>
        </div>
        {/* Python bento grid element */}
        <div
          onMouseEnter={(e) => {
            setStylePython({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStylePython({ display: "none" });
          }}
          onClick={() => {
            window.location.href = "/course/python";
          }}
          style={{ backgroundImage: "url('/python-logo.svg')" }}
          className="col-start-3 col-end-8 row-start-1 row-end-3 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex bg-cover bg-center bg-neutral-950"
        >
          <h1
            style={stylePython}
            className="text-lg p-5 bg-blue-950 rounded-lg border-2 animate-bounce duration-700"
          >
            Python
          </h1>
        </div>
        {/* C++ bento grid element */}
        <div
          onMouseEnter={(e) => {
            setStyleCpp({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyleCpp({ display: "none" });
          }}
          style={{ backgroundImage: "url('/cpp-logo.svg')" }}
          onClick={() => {
            window.location.href = "/course/cplusplus";
          }}
          className="col-start-3 col-end-8 row-start-6 row-end-8 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex bg-cover bg-center bg-neutral-950"
        >
          <h1
            style={styleCpp}
            className="text-lg p-5 bg-blue-950 rounded-lg border-2 animate-bounce duration-700"
          >
            C++
          </h1>
        </div>
        {/* Java bento grid element */}
        <div
          onMouseEnter={(e) => {
            setStyleJava({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyleJava({ display: "none" });
          }}
          style={{ backgroundImage: "url('/java-logo.svg')" }}
          onClick={() => {
            window.location.href = "/course/java";
          }}
          className="col-start-1 col-end-3 row-start-5 row-end-8 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex bg-cover bg-center bg-neutral-950"
        >
          <h1
            style={styleJava}
            className="text-lg p-5 bg-orange-950 rounded-lg border-2 animate-bounce duration-700"
          >
            Java
          </h1>
        </div>
        {/* Algorithm and Data Structures 2 bento grid element */}
        <div
          onMouseEnter={(e) => {
            setStyleAds2({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyleAds2({ display: "none" });
          }}
          style={{ backgroundImage: "url('/ads-logo.svg')" }}
          onClick={() => {
            window.location.href = "/course/ads2";
          }}
          className="col-start-6 col-end-8 row-start-3 row-end-6 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex bg-cover bg-top bg-neutral-950"
        >
          <h1
            style={styleAds2}
            className="text-lg p-5 bg-neutral-950 rounded-lg border-2 animate-bounce duration-700"
          >
            Advanced Algorithms and Data Structures
          </h1>
        </div>
        {/* Baccalaureate bento grid element */}
        <div
          onMouseEnter={(e) => {
            setStyleBac({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyleBac({ display: "none" });
          }}
          style={{ backgroundImage: "url('/bac.svg')" }}
          onClick={() => {
            window.location.href = "/course/bac";
          }}
          className="col-start-3 col-end-6 row-start-3 row-end-6 p-10 border-2 rounded-lg text-white hover:shadow-lg hover:shadow-lime-500 hover:scale-125 hover:duration-300 ease-out duration-25 justify-center items-center flex bg-bottom bg-cover bg-neutral-950"
        >
          <h1
            style={styleBac}
            className="text-lg p-5 bg-neutral-950 rounded-lg border-2 animate-bounce duration-700 invisible"
          >
            Romanian Baccalaureate
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BentoCourses;
