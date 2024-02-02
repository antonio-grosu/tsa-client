"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "@/app/components/Loading";
import axios from "axios";
import CourseContent from "@/app/components/CourseContent";
import Buy from "@/app/components/Buy";
import Image from "next/image";

function BacCourse() {
  const [loading, setLoading] = useState(false);
  const [owns, setOwns] = useState(false);
  const [userId, setUserId] = useState();
  const [noAcc, setNoAcc] = useState(true);
  const courseId = 1;
  const price = 12.49;
  const name = "Curs BAC";
  const description =
    "Cursul care te va ajuta sa iti atingi potentialul maxim si sa iei nota 10 (zece) la examenul de Bacalaureat";

  useEffect(() => {
    setLoading(true);
    const id = localStorage.getItem("userId");
    if (id !== null) {
      setUserId(id);
    } else setUserId(null);
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
        setLoading(false);
      })
      .catch((err) => {
        // activeaza true daca nu are cursul
        setOwns(false);
        setLoading(false);
      });
  }, []);

  const lessons = [
    { id: 1, title: "Aritmetica și Operatori Liniari", link: "/course/bac/1" },
    { id: 2, title: "Backtracking", link: "/course/bac/2" },
    { id: 3, title: "C++ Variabile si Operatori", link: "/course/bac/3" },
    { id: 4, title: "Grafuri si tot felul" },
    { id: 5, title: "Din nou...grafuri" },
    { id: 6, title: "Exercitii Subiect I" },
    { id: 7, title: "Finalul...deocamdata." },
    { id: 8, title: "C++ If / Else If / Else" },
    { id: 9, title: "C++ Fruit Loops" },
    { id: 10, title: "C++ Fruit Loops 2" },
    { id: 11, title: "Cum ne jucam cu numerele?" },
    { id: 12, title: "Exercitii 1" },
    { id: 13, title: "Pseudocod (Ce poate fi asta ?!)" },
    { id: 14, title: "Structuri de date (Din nou, ce e asta ?!)" },
    { id: 15, title: "Instructiuni si cod" },
    { id: 16, title: "Exercitii 2" },
    { id: 17, title: "Al doilea final." },
    { id: 18, title: "Introducere Subiectul 3" },
    { id: 19, title: "Vectori I" },
    { id: 20, title: "Vectori II" },
    { id: 21, title: "Exercitii Vectori" },
    { id: 22, title: "Subprograme I" },
    { id: 23, title: "Subprograme II" },
    { id: 24, title: "Exercitii Subprograme" },
    { id: 25, title: "Matrici I" },
    { id: 26, title: "Matrici II" },
    { id: 27, title: "Matrici III" },
    { id: 28, title: "Exercitii Matrici" },
    { id: 29, title: "Siruri de caractere I" },
    { id: 30, title: "Siruri de caractere II" },
    { id: 31, title: "Rezolvari concomitente cu citirea" },
    { id: 32, title: "Vectori de frecventa" },
    { id: 33, title: "MARELE ESEU" },
    { id: 34, title: "Finalul finalului" },
  ];

  const handlePayment = () => {
    try {
      const res = axios
        .post(
          "https://walrus-app-wcxde.ondigitalocean.app/payment/create-checkout-session",
          {
            name,
            price,
            description,
            userId,
            courseId,
          }
        )
        .then((res) => (window.location.href = res.data.url));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {loading && <Loading />}
      {!loading && noAcc && (
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
              <h1 className="text-3xl font-bold my-4 ">
                {" "}
                N-am chef de BAC. Ce fac?
              </h1>
              <div className=" p-1  md:hidden  rounded-md my-8  items-center justify-center poppins font-bold text-gray-950 text-xl">
                <Image
                  width={500}
                  height={500}
                  alt="Course Logo"
                  className="w-full"
                  src="/bac.svg"
                />
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
                  <Link className="text-lime-300" href="/">
                    The Software Academy
                  </Link>
                </p>
              </div>
            </div>
            <div className=" p-1  md:w-2/12  rounded-md hidden md:flex items-center justify-center poppins font-bold text-gray-950 text-xl">
              <Image
                alt="Course Logo"
                width={500}
                height={500}
                className="w-full"
                src="/bac.svg"
              />
            </div>
          </div>
        </div>
      )}
      {!loading && !noAcc && (
        <div className="py-24 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 bg-neutral-950 text-white p-4 min-h-screen flex flex-col  justify-center gap-24 items-center">
          <div className="flex items-center slide-in poppins gap-8 justify-center mt-24 flex-col md:flex-row">
            <div className="md:w-1/2 text-center md:text-left">
              {" "}
              {owns && (
                <p className="rounded-full md:inline-block  border-2 text-xs fira border-green-300 px-4 py-2 bg-green-300/30 text-green-300">
                  bool myCourse = true;
                </p>
              )}
              <h1 className="text-3xl font-bold my-4 ">
                N-am chef de BAC. Ce fac?
              </h1>
              <div className=" p-1  md:hidden  rounded-md my-8  items-center justify-center poppins font-bold text-gray-950 text-xl">
                <Image
                  alt="Course Logo"
                  width={500}
                  height={500}
                  className="w-full"
                  src="/bac.svg"
                />
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
                  <Link className="text-lime-300" href="/">
                    The Software Academy
                  </Link>
                </p>
              </div>
            </div>
            <div className=" p-1  md:w-2/12  rounded-md hidden md:flex items-center justify-center poppins font-bold text-gray-950 text-xl">
              <Image
                width={500}
                height={500}
                alt="Course Logo"
                className="w-full"
                src="/bac.svg"
              />
            </div>
          </div>
          {!owns && (
            <div className="slide-in flex md:flex-row flex-col gap-8 items-start w-full justify-between mt-4">
              <Buy
                function={handlePayment}
                title="Precomanda si obtine Reducere de 50%"
                description="Acest curs de va ajuta, teoretic si practic, sa iti maximizezi nota de la BAC-ul la Informatica."
              />
              <CourseContent lessons={lessons} />
            </div>
          )}
          {owns && (
            <div className="slide-in flex md:flex-row flex-col gap-8 items-start w-full justify-between mt-4">
              {/* <Progress /> */}
              <div className="md:w-1/2 mx-auto">
                <CourseContent lessons={lessons} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default BacCourse;
