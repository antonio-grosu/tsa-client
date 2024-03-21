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
  };
  return (
    <div className="flex flex-row items-center justify-center p-10 w-full bg-black">
      <div className="grid grid-cols-2 col-auto w-2/3 bg-white">
        {Object.keys(courses).map((course, index) => {
          return (
            <ImageComponent
              key={index}
              title={courses[course].title}
              description={courses[course].description}
              dynamicWidth={courses[course].dynamicWidth}
              dynamicHeight={courses[course].dynamicHeight}
              courseLogo={courses[course].courseLogo}
              bgColor={courses[course].bgColor}
              textColor={courses[course].textColor}
              link={courses[course].link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BentoCourses;
