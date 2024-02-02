"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Loading from "@/app/components/Loading";
import Buy from "@/app/components/Buy";
import CourseContent from "@/app/components/CourseContent";
import ComingSoon from "@/app/components/ComingSoon";

function AdsCourse() {
  const [loading, setLoading] = useState(false);
  const [owns, setOwns] = useState(false);
  const [userId, setUserId] = useState("");
  const [noAcc, setNoAcc] = useState(true);
  const courseId = 1;
  const price = 25;
  const name = "Curs BAC";
  const description =
    "Cursul care te va ajuta sa iti atingi potentialul maxim si sa iei nota 10 (zece) la examenul de Bacalaureat";

  useEffect(() => {
    setLoading(true);
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
      .get(`http://localhost:8081/owns/${courseId}/1`)
      .then(() => {
        setOwns(true);
        setLoading(false);
      })
      .catch((err) => {
        setOwns(false);
        setLoading(false);
      });
  }, [owns]);

  const lessons = [
    { id: 1, title: " Aritmetica și Operatori Liniari" },
    { id: 2, title: "How does Python store data?" },
    { id: 3, title: "What types of variables are there?" },
    { id: 4, title: "Casting from a type to other" },
    { id: 5, title: "How to attribute values to variables" },
    { id: 6, title: "Why?" },
    { id: 7, title: "How to use?" },
    { id: 8, title: "Casting ... again" },
    { id: 9, title: "Functions" },
    { id: 10, title: "Line by line" },
    { id: 11, title: "Everything at Once" },
  ];
  const handlePayment = () => {
    try {
      const response = axios
        .post("http://localhost:8081/payment/create-checkout-session", {
          name,
          price,
          description,
          userId,
          courseId,
        })
        .then((res) => (window.location.href = res.data.url));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="flex min-h-screen px-8 bg-neutral-950  poppins gap-24  mt-8 py-36 flex-col  items-center justify-start text-white">
          <ComingSoon />

          <div className="flex slide-in items-center justify-center">
            <div className="md:w-1/2  text-center md:text-left">
              {" "}
              <h1 className="text-3xl font-bold mb-4 ">Curs ADS II</h1>
              <div className=" p-1  md:hidden  rounded-md my-8  items-center justify-center poppins font-bold text-gray-950 text-xl">
                <img className="w-full" src="/ads-logo.svg" />
              </div>
              <p className="text-sm mb-4">
                Building on your foundational knowledge, this course delves deep
                into intricate algorithms, <br /> advanced data structures, and{" "}
                <span className="font-bold">sophisticated</span> techniques used
                by seasoned <span className="font-bold">professionals.</span>
                <br />{" "}
              </p>
              <div>
                <p className="text-sm mb-4 inline-block mr-2">
                  Created 12.01.2024
                </p>
                <p className="text-sm mb-4 inline-block">
                  by{" "}
                  <Link className="text-lime-300" href="/">
                    The Software Academy
                  </Link>
                </p>
              </div>
            </div>
            <div className=" p-1  md:w-2/12  rounded-md hidden md:flex items-center justify-center poppins font-bold text-gray-950 text-xl">
              <img className="w-full" src="/ads-logo.svg" />
            </div>
          </div>
        </div>
      )}
      {/* {noAcc && (
        <div className="py-24 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 bg-neutral-950 text-white p-4 min-h-screen flex flex-col  justify-center items-center">
          <h1 className="text-md bg-red-200/20 text-red-500 border-2 border-red-500 py-2 px-4 rounded-sm font-bold text-center">
            Pentru a accesa cursul trebuie sa{" "}
            <Link href="/login" className="underline underline-offset-1">
              te loghezi
            </Link>{" "}
            /{" "}
            <Link href="/signup" className="underline underline-offset-1">
              creezi un cont
            </Link>
          </h1>
          <div className="flex items-center poppins gap-8 justify-center mt-8 flex-col md:flex-row">
            <div className="md:w-1/2 text-center md:text-left">
              {" "}
              <h1 className="text-3xl font-bold mb-4 ">Curs Bacalaureat</h1>
              <div className=" p-1  md:hidden  rounded-md my-8  items-center justify-center poppins font-bold text-gray-950 text-xl">
                <img className="w-full" src="/ads-logo.svg" />
              </div>
              <p className="text-sm mb-4">
                Acest curs te va ajuta sa intelegi notiunile de informatica
                invatate in liceu si sa te perfectionezi pentru a lua <br />{" "}
                <span className="font-bold"> nota 10 (zece)</span> la examenul
                de BAC!
              </p>
              <div>
                <p className="text-sm mb-4 inline-block mr-2">
                  Created 12.01.2024
                </p>
                <p className="text-sm mb-4 inline-block">
                  by{" "}
                  <Link className="text-lime-300" href="/The Software Academy">
                    The Software Academy
                  </Link>
                </p>
              </div>
            </div>
            <div className=" p-1  md:w-2/12  rounded-md hidden md:flex items-center justify-center poppins font-bold text-gray-950 text-xl">
              <img className="w-full" src="/ads-logo.svg" />
            </div>
          </div>
        </div>
      )}
      {!noAcc && (
        <div className="py-24 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 bg-neutral-950 text-white p-4 min-h-screen flex flex-col  justify-between items-center">
          <div className="flex items-center poppins gap-8 justify-center mt-24 flex-col md:flex-row">
            <div className="md:w-1/2 text-center md:text-left">
              {" "}
              <h1 className="text-3xl font-bold mb-4 ">Curs ADS</h1>
              <div className=" p-1  md:hidden  rounded-md my-8  items-center justify-center poppins font-bold text-gray-950 text-xl">
                <img className="w-full" src="/ads-logo.svg" />
              </div>
              <p className="text-sm mb-4">
                Acest curs te va ajuta sa intelegi notiunile de informatica
                invatate in liceu si sa te perfectionezi pentru a lua <br />{" "}
                <span className="font-bold"> nota 10 (zece)</span> la examenul
                de BAC!
              </p>
              <div>
                <p className="text-sm mb-4 inline-block mr-2">
                  Created 12.01.2024
                </p>
                <p className="text-sm mb-4 inline-block">
                  by{" "}
                  <Link className="text-lime-300" href="/The Software Academy">
                     The Software Academy
                  </Link>
                </p>
              </div>
            </div>
            <div className=" p-1  md:w-2/12  rounded-md hidden md:flex items-center justify-center poppins font-bold text-gray-950 text-xl">
              <img className="w-full" src="/ads-logo.svg" />
            </div>
          </div>
          {!owns && (
            <div className="flex md:flex-row flex-col gap-8 items-start w-full justify-between mt-4">
              <Buy />
              <CourseContent lessons={lessons} />
            </div>
          )}
          {owns && (
            <div className="flex md:flex-row flex-col gap-8 items-start w-full justify-between mt-4">
              <Progress />
              <CourseContent lessons={lessons} />
            </div>
          )}
        </div>
      )} */}
    </>
  );
}

export default AdsCourse;
