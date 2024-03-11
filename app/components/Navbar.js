"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

function Navbar() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);

  const [menu, setMenu] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <nav className="z-20 flex fixed w-full top-0 items-center justify-between flex-wrap bg-neutral-950 px-8 py-6 md:px-12 lg:px-16 xl:px-24 2xl:px-28">
        <div className="flex items-center justify-between just text-white mr-6">
          <Link href="/" onClick={scrollToTop}>
            <Image
              width={500}
              height={500}
              src="/Logo.svg"
              alt="Logo"
              className="inline-block h-12 w-12 mr-2"
            />
            {/* <span className="font-semibold text-xl tracking-tight poppins">The Software Academy</span> */}
          </Link>
          <Link
            href="/"
            onClick={scrollToTop}
            className="hidden ml-8 hover:underline hover:underline-offset-4 md:flex lg:flex lg:items-center poppins text-lime-300 transition-all text-2xl mr-12"
          >
            The Software Academy
            {/* <span className="font-semibold text-xl tracking-tight poppins">The Software Academy</span> */}
          </Link>
          <Link
            onClick={scrollToTop}
            href="/courses"
            className="hidden ml-8 hover:underline hover:underline-offset-4 md:flex lg:flex lg:items-center poppins text-white hover:text-lime-300 transition-all"
          >
            Explorează cursuri
          </Link>
        </div>

        <div className="hidden md:flex lg:flex lg:items-center poppins">
          <div>
            {!userName && (
              <>
                {" "}
                <Link
                  href="/login"
                  onClick={scrollToTop}
                  className="px-6 py-2 hover:bg-gray-200 transition-all bg-white text-gray-950 text-sm font-bold rounded-sm"
                >
                  Logare
                </Link>
                <Link
                  href="/signup"
                  onClick={scrollToTop}
                  className="px-6 py-2 ml-4 bg-lime-300 hover:bg-lime-500 transition-all text-gray-950 text-sm font-bold rounded-sm"
                >
                  Creează Cont
                </Link>
              </>
            )}
            {userName && (
              <Link
                href="/profile"
                onClick={scrollToTop}
                className="poppins px-4 border-2 inline-block py-2 bg-gray-50/20 hover:bg-gray-50/30 transition-all rounded-md text-white text-sm font-bold"
              >
                <svg
                  className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 14 18"
                >
                  <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                {userName}
              </Link>
            )}
            {userName && (
              <button
                className="px-8 py-2 border-2 border-red-500 bg-red-200/20 rounded-md text-red-400 poppins font-bold text-sm ml-4 transition-all ease-in-out hover:bg-red-200/50 hover:text-red-500 dark:hover:bg-red-500 dark:hover:text-red-200"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Log Out
              </button>
            )}
          </div>
        </div>
        <svg
          className="w-6 h-6 md:hidden text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </nav>

      {menu && (
        <>
          <div
            className="fixed md:hidden w-5/12 z-30 p-8 h-screen bg-gray-950/50 left-0 "
            onClick={() => {
              setMenu(!menu);
            }}
          ></div>
          <div className="md:hidden z-30 px-4 py-4 fixed h-screen right-0 w-7/12 bg-gray-50">
            <div className="flex items-center justify-start gap-4">
              <Link
                href="/"
                onClick={() => {
                  setMenu(!menu);
                  scrollToTop();
                }}
              >
                <Image
                  width={500}
                  height={500}
                  src="/Logo.svg"
                  alt="Logo"
                  className="bg-gray-950 p-1 rounded-md inline-block h-12 w-12 mr-2"
                />
                <span className="font-semibold text-xl poppins">Menu</span>
              </Link>
            </div>
            <div className="flex flex-col justify-between gap-2">
              <div className="mt-16">
                <p className="poppins text-ms capitalize font-semibold">
                  Navigare
                </p>

                <div className="grid grid-cols-1 w-full px-2 mt-2 gap-2">
                  <Link
                    href="/"
                    className="p-2 poppins text-sm"
                    onClick={() => {
                      setMenu(!menu);
                      scrollToTop();
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    href="/courses"
                    className="p-2 poppins text-sm"
                    onClick={() => {
                      setMenu(!menu);
                      scrollToTop();
                    }}
                  >
                    Cursuri
                  </Link>
                </div>
              </div>
              <div>
                <p className="poppins text-ms capitalize font-semibold mt-6">
                  Contactează-ne
                </p>
                <div className="grid grid-cols-1 w-full px-2 mt-2 gap-2">
                  <Link
                    href="mailto:business.thesoftwareacademy@gmail.com"
                    className="poppins text-sm"
                    onClick={scrollToTop}
                  >
                    Email
                  </Link>
                </div>
              </div>
              <div>
                <p className="poppins text-ms capitalize font-semibold mt-6">
                  Contul Meu
                </p>
                {!userName && (
                  <div className="text-sm">
                    <Link
                      href="/login"
                      onClick={() => {
                        scrollToTop();
                        setMenu(!menu);
                      }}
                      className="z-30 block mt-4 transition-all w-full ease-in-out text-center hover:bg-white/20 text-sm poppins font-semibold px-4 py-2 border-2 border-gray/50 rounded-md lg:inline-block lg:mt-0 text-gray-950 mr-4"
                    >
                      Logare
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => {
                        scrollToTop();
                        setMenu(!menu);
                      }}
                      className="z-30 hover:shadow-lime-500  text-center hover:shadow-md transition-all ease-in-out block font-semibold poppins text-sm bg-lime-300 px-4 py-2 border-2 border-lime-300 rounded-md mt-4 lg:inline-block lg:mt-0 text-neutral-950"
                    >
                      Înscrie-te Acum
                    </Link>
                  </div>
                )}
                {userName && (
                  <div className="text-xs poppins text-gray-950">
                    <Link
                      href="/profile"
                      onClick={() => {
                        scrollToTop();
                        setMenu(!menu);
                      }}
                      className="flex items-center justify-center py-2 poppins font-bold bg-gray-200 px-2 gap-2 mt-2"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-gray-800 dark:text-gray-950 inline-block"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 14 18"
                      >
                        <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                      </svg>
                      <p className="inline-block">{userName}</p>
                    </Link>
                    <button
                      className="bg-red-200/50 border-2 mt-4 w-full border-red-500 rounded-md px-4 py-2"
                      onClick={() => {
                        localStorage.clear();
                        window.location.href = "/";
                      }}
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
