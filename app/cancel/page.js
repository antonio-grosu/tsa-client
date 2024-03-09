"use client";
import Link from "next/link";
function Cancel() {
  return (
    <div className="bg-neutral-950 py-24 px-8 md:px-24 lg:px-36 xl:px-48 min-h-screen 2xl:px-72 flex items-center md:flex-row flex-col justify-center md:justify-between">
      <div className="md:w-1/2 ">
        <h1 className="poppins text-3xl font-bold text-gray-50 mt-8">
          Plata anulată!
        </h1>
        <div className=" block md:hidden ">
          <img src="/cancel.svg" className="w-full" />
        </div>
        <p className="poppins text-sm text-gray-50 my-8">
          Aceasta este o notificare pentru anularea plății.
        </p>
        <Link
          href="/"
          className="poppins px-12 md:inline-block hidden py-2 font-bold rounded-sm  text-sm bg-lime-300 text-gray-950 "
          onClick={() => {
            localStorage.clear();
          }}
        >
          <svg
            className="w-4 h-4 text-gray-950 inline-block"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <p className="ml-2 inline-block">Home</p>
        </Link>
      </div>
      <div className="md:w-4/12 md:inline hidden ">
        <img src="/cancel.svg" className="w-full" />
      </div>
      <Link
        href="/"
        className="poppins px-12 py-2 font-bold md:hidden rounded-sm flex items-center justify-center mt-4  text-sm bg-lime-300 text-gray-950 "
      >
        <svg
          className="w-4 h-4 text-gray-950 inline-block"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
        <p className="ml-2 inline-block">Home</p>
      </Link>
    </div>
  );
}

export default Cancel;
