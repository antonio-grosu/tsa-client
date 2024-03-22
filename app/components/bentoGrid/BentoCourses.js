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

import React from "react";
import ImageComponent from "./ImageComponent";

const BentoCourses = () => {
  const Logo = "/Logo.svg";
  const courses = {
    bacalaureat: {
      title: "Bacalaureat",
      description: "description example",
      courseLogo: Logo,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      dynamicHeight: 200,
      dynamicWidth: 200,
      link: "/course/bac",
    },
    cpp: {
      title: "C++",
      description: "description example",
      courseLogo: Logo,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      dynamicHeight: 200,
      dynamicWidth: 200,
      link: "/course/cplusplus",
    },
    java: {
      title: "Java",
      description: "description example",
      courseLogo: Logo,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      dynamicHeight: 200,
      dynamicWidth: 200,
      link: "/course/java",
    },
    python: {
      title: "Python",
      description: "description example",
      courseLogo: Logo,
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
      courseLogo: Logo,
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
      courseLogo: Logo,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      dynamicHeight: 200,
      dynamicWidth: 200,
      link: "/course/ads2",
    },
  };
  return (
    <div className="flex flex-row items-center justify-center p-10 w-full bg-black">
      <div className="grid grid-cols-5 col-auto w-2/3 bg-white">
        <ImageComponent
          title={courses.ads1.title}
          description={courses.ads1.description}
          courseLogo={courses.ads1.courseLogo}
          bgColor={courses.ads1.bgColor}
          textColor={courses.ads1.textColor}
          dynamicHeight={courses.ads1.dynamicHeight}
          dynamicWidth={courses.ads1.dynamicWidth}
          link={courses.ads1.link}
        />
      </div>
    </div>
  );
};

export default BentoCourses;
