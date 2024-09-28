"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const [index, setIndex] = useState(1);
  const items = [
    {
      link: "/course/python",
      title: "Python Basics",
      description: "",
      img: "/python-logo.svg",
    },
    {
      link: "/course/cplusplus",
      title: "C++ Basic",
      description: "",
      img: "/cpp-logo.svg",
    },
    {
      link: "/course/js",
      title: "JavaScript FUNdamentals",
      description: "",
      img: "/js-logo.svg",
    },
    {
      link: "/course/frontend-development",
      title: "Frontend Vanilla",
      description: "",
      img: "/fe-logo.svg",
    },
    {
      link: "/course/ads2",
      title: "ADS II",
      description: "",
      img: "/ads-logo.svg",
    },
    {
      link: "/course/hardware",
      title: "Hardware",
      description: "",
      img: "/hardware-logo.svg",
    },
    {
      link: "/course/retelistica",
      title: "Rețelistica",
      description: "",
      img: "/retelistica-logo.svg",
    },
    {
      link: "/course/java",
      title: "Java Basics",
      description: "",
      img: "/java-logo.svg",
    },
    {
      link: "/course/ads1",
      title: "Algoritmi & Structuri de Date",
      description: "",
      img: "/algo-logo.svg",
    },
    {
      link: "/course/facultate",
      title: "BAC -> Facultate",
      description: "",
      img: "/fac-logo.svg",
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex % 5) + 1);

      if (index === 5) {
        setIndex(1);
      }
    }, 3500);

    // Cleanup the interval when the component unmounts or when index changes
    return () => clearInterval(intervalId);
  }, [index]);
  return (
    <div>
      {index === 1 && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link href={items[0].link} className="slide-in" key={0}>
            <div className="slide-content">
              <Image
                alt="Carousel Image"
                width={500}
                height={500}
                src={items[0].img}
                className="mb-2 w-full h-auto"
              />
              <h4 className="text-white text-md font-semibold text-center">
                {items[0].title}
              </h4>
              <p className="text-xs mt-1 font-normal text-white/50 text-center">
                {items[0].description}
              </p>
            </div>
          </Link>
          <Link href={items[1].link} key={1} className="slide-in">
            <div className="slide-content">
              <Image
                alt="Carousel Image"
                width={500}
                height={500}
                src={items[1].img}
                className="mb-2 w-full h-auto"
              />
              <h4 className="text-white text-md font-semibold text-center">
                {items[1].title}
              </h4>
              <p className="text-xs mt-1 font-normal text-white/50 text-center">
                {items[1].description}
              </p>
            </div>
          </Link>
        </div>
      )}
      {index === 2 && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link href={items[2].link} className="slide-in" key={2}>
            <div className="slide-content">
              <Image
                alt="Carousel Image"
                width={500}
                height={500}
                src={items[2].img}
                className="mb-2 w-full h-auto"
              />
              <h4 className="text-white text-md font-semibold text-center">
                {items[2].title}
              </h4>
              <p className="text-xs mt-1 font-normal text-white/50 text-center">
                {items[2].description}
              </p>
            </div>
          </Link>
          <Link href={items[3].link} key={3} className="slide-in">
            <div className="slide-content">
              <Image
                alt="Carousel Image"
                width={500}
                height={500}
                src={items[3].img}
                className="mb-2 w-full h-auto"
              />
              <h4 className="text-white text-md font-semibold text-center">
                {items[3].title}
              </h4>
              <p className="text-xs mt-1 font-normal text-white/50 text-center">
                {items[3].description}
              </p>
            </div>
          </Link>
        </div>
      )}
      {index === 3 && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link href={items[4].link} className="slide-in" key={4}>
            <div className="slide-content">
              <Image
                alt="Carousel Image"
                width={500}
                height={500}
                src={items[4].img}
                className="mb-2 w-full h-auto"
              />
              <h4 className="text-white text-md font-semibold text-center">
                {items[4].title}
              </h4>
              <p className="text-xs mt-1 font-normal text-white/50 text-center">
                {items[4].description}
              </p>
            </div>
          </Link>
          <Link href={items[5].link} key={5} className="slide-in">
            <div className="slide-content">
              <Image
                alt="Carousel Image"
                width={500}
                height={500}
                src={items[5].img}
                className="mb-2 w-full h-auto"
              />
              <h4 className="text-white text-md font-semibold text-center">
                {items[5].title}
              </h4>
              <p className="text-xs mt-1 font-normal text-white/50 text-center">
                {items[5].description}
              </p>
            </div>
          </Link>
        </div>
      )}
      {index === 4 && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link href={items[6].link} className="slide-in" key={6}>
            <div className="slide-content">
              <Image
                alt="Carousel Image"
                width={500}
                height={500}
                src={items[6].img}
                className="mb-2 w-full h-auto"
              />
              <h4 className="text-white text-md font-semibold text-center">
                {items[6].title}
              </h4>
              <p className="text-xs mt-1 font-normal text-white/50 text-center">
                {items[6].description}
              </p>
            </div>
          </Link>
          <Link href={items[7].link} key={7} className="slide-in">
            <div className="slide-content">
              <Image
                alt="Carousel Image"
                width={500}
                height={500}
                src={items[7].img}
                className="mb-2 w-full h-auto"
              />
              <h4 className="text-white text-md font-semibold text-center">
                {items[7].title}
              </h4>
              <p className="text-xs mt-1 font-normal text-white/50 text-center">
                {items[7].description}
              </p>
            </div>
          </Link>
        </div>
      )}
      {index === 5 && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link href={items[8].link} className="slide-in" key={8}>
            <div className="slide-content">
              <Image
                alt="Carousel Image"
                width={500}
                height={500}
                src={items[8].img}
                className="mb-2 w-full h-auto"
              />
              <h4 className="text-white text-md font-semibold text-center">
                {items[8].title}
              </h4>
              <p className="text-xs mt-1 font-normal text-white/50 text-center">
                {items[8].description}
              </p>
            </div>
          </Link>
          <Link href={items[9].link} key={9} className="slide-in">
            <div className="slide-content">
              <Image
                alt="Carousel Image"
                width={500}
                height={500}
                src={items[9].img}
                className="mb-2 w-full h-auto"
              />
              <h4 className="text-white text-md font-semibold text-center">
                {items[9].title}
              </h4>
              <p className="text-xs mt-1 font-normal text-white/50 text-center">
                {items[9].description}
              </p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Carousel;
