"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
const Section = (props) => {
  return (
    <div className=" mt-16 gap-12 flex items-center justify-between md:flex-row flex-col">
      {props.type == 2 && (
        <Image
          alt="Section Image"
          width={500}
          height={500}
          src={props.src}
          className=" md:block hidden w-5/12"
        />
      )}
      <div className="md:w-1/2">
        <h1 className="text-4xl poppins font-bold text-white">{props.title}</h1>
        <Image
          alt="Section Image"
          width={500}
          height={500}
          src={props.src}
          className="md:hidden"
        />
        <p className="mt-4 poppins text-white">{props.description}</p>
      </div>
      {props.type == 1 && (
        <Image
          alt="Section Image"
          width={500}
          height={500}
          src={props.src}
          className=" md:block hidden w-5/12"
        />
      )}
    </div>
  );
};

export default Section;
