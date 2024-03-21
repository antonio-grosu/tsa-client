"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import BentoCourses from "./components/bentoGrid/BentoCourses";

// Componenta pentru afișarea secțiunii "Hero"
const Hero = () => {
  return (
    <div className="bg-neutral-950 py-24 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 flex items-center md:flex-row flex-col justify-center md:justify-end">
      {/* ********* Hero Content ********* */}
      <div className="slide-in md:w-1/2 lg:w-4/12 mt-16">
        <h1 className="text-4xl text-white font-semibold poppins">
          Cursurile Tale, Oportunitatea Ta
        </h1>
        <p className="text-white poppins my-6 lg:my-12">
          Descoperă platforma care transformă pasiunea ta în succesul tău
          personal și profesional.
        </p>
        <Link
          href="/course/bac"
          className="hidden md:inline-flex items-center justify-center hover:shadow-lime-500 hover:shadow-md transition-all transition-ease-in-out px-4 py-2 rounded-md font-semibold poppins text-neutral-950 bg-lime-300"
        >
          <svg
            className="w-6 inline-block h-6 text-gray-950"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18 3h-5.7a2 2 0 0 0-1.4.6L3.6 11a2 2 0 0 0 0 2.8l6.6 6.6a2 2 0 0 0 2.8 0l7.4-7.5a2 2 0 0 0 .6-1.4V6a3 3 0 0 0-3-3Zm-2.4 6.4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>

          <p className="ml-2">Preorder - 50% OFF</p>
        </Link>
      </div>

      {/* ********* Hero Illustrations 4 squares ********* */}
      <div className="flex gap-4 md:items-center items-start w-full md:justify-end md:w-8/12">
        <div className="flex-col items-center mt-8">
          {/* Primul pătrat cu ilustrație */}
          <div className="bg-neutral-950 pulsing px-3 py-2 rounded-md md:w-44 md:h-44 border-2 border-white/50 flex flex-col justify-between">
            <div className="text-white text-sm poppins">
              <h3 className="font-bold">Personalizare a Conținutului</h3>
            </div>
            <Image
              alt="Education Illustration"
              width={500}
              height={500}
              src="/content.svg"
              className="w-8/12 mx-auto"
            />
          </div>
          {/* Al doilea pătrat cu ilustrație */}
          <div className="bg-white pulsing p-8 rounded-md md:w-44 md:h-44 mt-6 border-2 px-3 py-2 flex flex-col justify-between">
            <div className="text-neutral-950 text-sm poppins">
              <h3 className="font-bold">Conținut Educațional Interactiv</h3>
            </div>
            <Image
              alt="Education Illustration"
              width={500}
              height={500}
              src="/educate.svg"
              className="w-8/12 mx-auto"
            />
          </div>
        </div>
        <div className="flex-col items-center ">
          {/* Al treilea pătrat cu ilustrație */}
          <div className="bg-white pulsing p-8 rounded-md md:w-44 md:h-44  border-2 px-3 py-2 flex flex-col justify-between">
            <div className="text-neutral-950 text-sm poppins">
              <h3 className="font-bold">Comunitate și Colaborare</h3>
            </div>
            <Image
              alt="Education Illustration"
              width={500}
              height={500}
              src="/community.svg"
              className="w-8/12 mx-auto"
            />
          </div>
          {/* Al patrulea pătrat cu ilustrație */}
          <div className="bg-neutral-950 pulsing px-3 py-2 rounded-md md:w-44 md:h-44  border-2 border-white/50 flex flex-col mt-6 justify-between">
            <div className="text-white text-sm poppins">
              <h3 className="font-bold">Urmărire a Progresului</h3>
            </div>
            <Image
              alt="Education Illustration"
              width={500}
              height={500}
              src="/progress.svg"
              className="w-8/12 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* ********* Hero Button Hidden on Desktop ********* */}
      <Link
        href="/course/bac"
        className="md:hidden flex w-full mt-8 items-center justify-center hover:shadow-lime-500 hover:shadow-md transition-all transition-ease-in-out px-4 py-2 rounded-md font-semibold poppins text-neutral-950 bg-lime-300"
      >
        <svg
          className="w-6 inline-block h-6 text-gray-950"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18 3h-5.7a2 2 0 0 0-1.4.6L3.6 11a2 2 0 0 0 0 2.8l6.6 6.6a2 2 0 0 0 2.8 0l7.4-7.5a2 2 0 0 0 .6-1.4V6a3 3 0 0 0-3-3Zm-2.4 6.4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        </svg>

        <p className="ml-2">Preorder - 50% OFF</p>
      </Link>
    </div>
  );
};

// Componenta pentru secțiunea "Presentation"
const Presentation = () => {
  // Componenta pentru afișarea fiecărui element "Card"

  const Card = (props) => {
    return (
      <div>
        <li className="cursor-pointer md:w-full max-w-fit hover:scale-105 transition-all ease-in-out hover:bg-white/20 mb-4 py-2 px-4 flex items-center flex-col justify-center text-center border-2 border-white/50 rounded-md">
          <span className="font-bold text-md text-lime-300">{props.title}</span>
          <div className="w-full">
            <Image
              alt="Education Illustration"
              width={500}
              height={500}
              src={props.img}
              className="w-24 h-24 rounded-md mt-2"
            />
          </div>
        </li>
      </div>
    );
  };

  // Un array de obiecte cu titlul și descrierea fiecărui "Card"
  const arr = [
    {
      key: 0,
      index: 0,
      title: "C/C++",
      img: "/cpp-logo.svg",
      description:
        "Our instructors have years of experience in the industry and are passionate about teaching.",
    },
    {
      key: 1,
      index: 1,
      title: "JavaScript",
      img: "/js-logo.svg",
      description:
        "Our instructors have years of experience in the industry and are passionate about teaching.",
    },
    {
      key: 2,
      index: 2,
      img: "/python-logo.svg",
      title: "Python",
      description:
        "Our instructors have years of experience in the industry and are passionate about teaching.",
    },
    {
      key: 3,
      index: 3,
      img: "/java-logo.svg",
      title: "Java",
      description:
        "Our instructors have years of experience in the industry and are passionate about teaching.",
    },
  ];

  return (
    <div className="bg-neutral-950 items-center flex flex-col px-8 py-12 md:px-24 lg:px-36 xl:px-48 2xl:px-72">
      <h2 className="w-full text-center text-3xl poppins font-bold mb-8 text-white">
        Urmatoarele cursuri de la{" "}
        <div className="inline-block">
          {" "}
          <p className="font-bold text-lime-300 underline underline-offset-4">
            The Software Academy
          </p>
        </div>
      </h2>
      <ul className="text-lg mb-8 text-white grid md:grid-cols-4 grid-cols-2 gap-4 justify-center">
        {arr.map((item) => {
          return (
            <Card
              key={item.key}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          );
        })}
      </ul>

      <Link
        href="/courses"
        className="bg-lime-300 hover:shadow-lime-500 hover:shadow-md hover:scale-105 transition-all transition-ease-in-out text-neutral-950 font-bold py-2 px-4 rounded"
      >
        Vezi Cursurile
      </Link>
    </div>
  );
};

// Componenta pentru secțiunea "Product"
const Product = () => {
  return (
    <div className="border-b-2 border-black/10 bg-white items-center flex flex-col justify-center px-8 py-12 md:px-24 lg:px-36 xl:px-48 2xl:px-72 ">
      <div className="w-full flex items-center justify-between md:flex-row flex-col">
        <div className="md:w-5/12 poppins text-neutral-950">
          <h1 className="font-semibold text-3xl">
            Descoperă Știința cu The Software Academy
          </h1>
          <p className="mt-4 md:mb-8">
            The Software Academy este pașaportul tău către lumea fascinantă a
            științei. Explorează lecții interactive și experimentează într-un
            mod distractiv. Începe aventura ta științifică astăzi!
          </p>

          <Link
            href="/courses"
            className="hidden md:inline-block bg-lime-300  hover:shadow-lime-500 hover:shadow-md hover:scale-105 transition-all transition-ease-in-out text-neutral-950 font-bold py-2 px-4 rounded"
          >
            <svg
              className="w-4 h-4  text-neutral-950 mr-2 inline-block"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
            </svg>{" "}
            Explorează Cursurile
          </Link>
        </div>
        <div className="md:w-5/12">
          <Image
            alt="Education Illustration"
            width={500}
            height={500}
            src="/student.svg"
            className="w-full"
          />
        </div>
        <Link
          href="/courses"
          className="w-full text-center mt-8 md:hidden bg-lime-300  hover:shadow-lime-500 hover:shadow-md hover:scale-105 transition-all transition-ease-in-out text-neutral-950 font-bold py-2 px-4 rounded"
        >
          <svg
            className="w-4 h-4 text-neutral-950 text-neutral-950 mr-2 inline-block"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
          </svg>{" "}
          Explorează Cursurile
        </Link>
      </div>
      <div className="w-full flex items-center justify-between mt-24 md:flex-row flex-col">
        <div className="w-5/12">
          <Image
            alt="Students"
            width={500}
            height={500}
            src="/teacher.svg"
            className="hidden md:block w-full"
          />
        </div>
        <div className="md:w-5/12 poppins text-neutral-950 mb-16">
          <h1 className="font-semibold text-3xl">
            Conduceti Învățărea în Era Digitală
          </h1>
          <p className="mt-4 md:mb-8">
            The Software Academy este instrumentul esențial pentru predarea
            științei într-un mod captivant. Personalizați lecțiile, urmăriți
            progresul și inspirați-vă elevii. Transformați învățarea științei
            într-o experiență interactivă cu The Software Academy!
          </p>
          <div className="flex items-center justify-start gap-2">
            <Link
              href="/"
              className="hidden md:inline-block bg-lime-300 cursor-progress hover:shadow-lime-500 hover:shadow-md hover:scale-105 transition-all transition-ease-in-out text-neutral-950 font-bold py-2 px-4 rounded"
            >
              <svg
                className="w-4 h-4 mr-2 inline-block text-gray-800 text-neutral-950"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 20"
              >
                <path d="M20.168 6.136 14.325.293a1 1 0 0 0-1.414 0l-1.445 1.444a1 1 0 0 0 0 1.414l5.844 5.843a1 1 0 0 0 1.414 0l1.444-1.444a1 1 0 0 0 0-1.414Zm-4.205 2.927L11.4 4.5a1 1 0 0 0-1-.25L4.944 5.9a1 1 0 0 0-.652.624L.518 17.206a1 1 0 0 0 .236 1.04l.023.023 6.606-6.606a2.616 2.616 0 1 1 3.65 1.304 2.615 2.615 0 0 1-2.233.108l-6.61 6.609.024.023a1 1 0 0 0 1.04.236l10.682-3.773a1 1 0 0 0 .624-.653l1.653-5.457a.999.999 0 0 0-.25-.997Z" />
                <path d="M10.233 11.1a.613.613 0 1 0-.867-.868.613.613 0 0 0 .867.868Z" />
              </svg>{" "}
              Creează Cursuri
            </Link>
            <p className="text-gray-950  hidden md:block font-bold text-sm poppins ">
              {" "}
              - Coming Soon
            </p>
          </div>
          <div className="">
            <Image
              alt="Teacher"
              width={500}
              height={500}
              src="/teacher.svg"
              className="md:hidden w-full"
            />
          </div>
          <div className="flex items-center justify-start gap-2">
            <Link
              href="/"
              className="md:hidden  bg-lime-300 cursor-progress hover:shadow-lime-500 hover:shadow-md hover:scale-105 transition-all transition-ease-in-out text-neutral-950 font-bold py-2 px-4 rounded"
            >
              <svg
                className="w-4 h-4 mr-2 inline-block text-gray-800 text-neutral-950"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 20"
              >
                <path d="M20.168 6.136 14.325.293a1 1 0 0 0-1.414 0l-1.445 1.444a1 1 0 0 0 0 1.414l5.844 5.843a1 1 0 0 0 1.414 0l1.444-1.444a1 1 0 0 0 0-1.414Zm-4.205 2.927L11.4 4.5a1 1 0 0 0-1-.25L4.944 5.9a1 1 0 0 0-.652.624L.518 17.206a1 1 0 0 0 .236 1.04l.023.023 6.606-6.606a2.616 2.616 0 1 1 3.65 1.304 2.615 2.615 0 0 1-2.233.108l-6.61 6.609.024.023a1 1 0 0 0 1.04.236l10.682-3.773a1 1 0 0 0 .624-.653l1.653-5.457a.999.999 0 0 0-.25-.997Z" />
                <path d="M10.233 11.1a.613.613 0 1 0-.867-.868.613.613 0 0 0 .867.868Z" />
              </svg>{" "}
              Creează Cursuri
            </Link>
            <p className="text-gray-950 md:hidden font-bold text-sm poppins ">
              {" "}
              - Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componenta principală "Home" care adună toate secțiunile
const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      {/* <Presentation /> */}
      {/* <BentoCourses /> */}
    </>
  );
};

export default Home;
