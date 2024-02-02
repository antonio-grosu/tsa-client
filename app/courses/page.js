"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import MinPreOrder from "../components/MinPreOrder";
import Loading from "../components/Loading";
import MinBought from "../components/MinBought";
import Image from "next/image";

function Courses() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);
  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <div className="bg-neutral-950 py-24 min-h-screen px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 ">
          <Bundle />
          <Section
            type={1}
            title="Cursuri Conduse de Experți"
            description="Învață de la cei mai pricepuți profesioniști din domeniu. Cursurile noastre sunt predate de experți recunoscuți, cu o vastă experiență în industrie. Descoperă o educație practică și inspirațională, adaptată pentru a-ți dezvolta abilitățile într-un mediu online accesibil și interactiv."
            src="/education.svg"
          />
          <Section
            title=" Investește în tine însuți și atinge-ți potențialul maxim."
            description=" Vei descoperi instrumente și resurse esențiale pentru a-ți construi drumul spre succesul pe care îl meriți. Alege să evoluezi și să te transformi cu noi , oportunități nelimitate așteaptă să fie explorate în lumea tehnologiei!"
            src="/study.svg"
            type={2}
          />
        </div>
      )}
    </>
  );
}

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

  useEffect(() => {
    const response = axios
      .get(
        `https://walrus-app-wcxde.ondigitalocean.app/owns/${localStorage.getItem(
          "userId"
        )}/${courseId}`
      )
      .then(() => {
        setOwns(true);
      })
      .catch((err) => {
        // activeaza true daca nu are cursul
        setOwns(false);
      });
  }, []);
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
        {owns && !noAcc && <MinBought />}
        {!owns && !noAcc && <MinPreOrder />}
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

const Section = (props) => {
  return (
    <div className=" mt-16 gap-12 flex items-center justify-between md:flex-row flex-col">
      {props.type == 2 && (
        <Image
          alt="Section Image"
          width={500}
          height={500}
          src={props.src}
          className=" md:block hidden w-1/2"
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
          className=" md:block hidden w-1/2"
        />
      )}
    </div>
  );
};

export default Courses;
