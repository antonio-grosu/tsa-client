"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "./Carousel";

const Bundle = () => {
  const [owns, setOwns] = useState(false);
  const [userId, setUserId] = useState();
  const [noAcc, setNoAcc] = useState(true);
  const courseId = 1;

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  useEffect(() => {
    if (userId !== null) {
      setNoAcc(false);
    } else setNoAcc(true);
  }, [userId]);

  return (
    <div className="w-full my-24 gap-8 items-center flex justify-between md:flex-row flex-col poppins">
      <div className="md:w-5/12">
        <h1 className="text-2xl font-bold text-white">
          Ne asigurăm că tu să urmezi calea academică cât mai eficient posibil!
        </h1>

        <Link
          href="/course/bac"
          className="md:w-9/12 slide-in p-12 md:p-4 mt-4 bg-neutral-500/10 flex flex-col items-center"
        >
          <Image
            alt="Carousel Image"
            width={500}
            height={500}
            src="/bac.svg"
            className="mb-4 "
            loading="lazy"
          />
          <h4 className="text-white text-md font-semibold ">Curs BAC</h4>
          <p className="text-xs w-full mt-2 font-normal text-white/50 text-center">
            Parcurge materia de liceu cu ușurință
          </p>
        </Link>
      </div>
      <div className="md:w-5/12 flex slide-in flex-col gap-8">
        <div className="slide-in mt-12 md:mt-0 bg-neutral-500/20 p-8 rounded-md">
          <h1 className="text-2xl text-center  font-bold text-white">
            Alte cursuri disponibile
          </h1>
          <div className="mt-8 w-10/12 mx-auto">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bundle;
