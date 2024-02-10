"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const Lesson = (props) => {
  const [playSound, setPlaySound] = useState(false);

  const handleClick = () => {
    setPlaySound(true);
  };

  useEffect(() => {
    if (playSound) {
      const audio = new Audio("/click.mp3");
      audio.play();
      audio.onendedc = () => {
        setPlaySound(false);
      };
    }
  }, [playSound]);

  const [choice, setChoice] = useState("");
  const [corect, setCorect] = useState();
  const [wrong, setWrong] = useState();
  useEffect(() => {
    if (choice === props.content[7]) {
      setCorect(true);
    } else if (choice !== "") setWrong(true);
  }, [choice]);

  return (
    <div className="h-screen   px-8 bg-neutral-950 p-1 flex items-center justify-center poppins">
      <div className="bg-neutral-500/20 md:w-1/2 flex flex-col items-center justify-between rounded-md gap-24 md:gap-12 p-8 ">
        <div className="flex flex-col justify-start  w-full gap-4">
          <div className="flex items-center justify-start gap-6 text-white">
            <div className="md:w-24 md:h-24 w-1/3">
              <Image
                src="/bac.svg"
                alt="BAC"
                width={32}
                height={32}
                className="w-full border-2"
              />
            </div>
            <div>
              <h3 className="text-2xl text-lime-300 font-bold z-0">
                Aritmetică și Operatori Liniari
              </h3>
              <p className="text-sm underline underline-offset-2 mt-2">
                N-am chef de BAC, ce fac?
              </p>
            </div>
          </div>
          <div className="grid  grid-cols-8 w-full p-2 rounded-full">
            <div className="w-full bg-lime-300 rounded-l-full relative p-2">
              <svg
                className="w-8 h-8 z-10 text-sky-600 absolute -right-2 -bottom-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm13.7-1.3a1 1 0 0 0-1.4-1.4L11 12.6l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l4-4Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div className="w-full bg-lime-300 relative p-2">
              <div className="w-8 h-8 z-10 bg-green-900 rounded-full flex items-center justify-center text-sky-600 absolute -right-2 -bottom-2">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20.3 3.7c.2.2.4.4.4.7.3 1.8.7 5.2-.9 6.8A75.2 75.2 0 0 1 8.6 18a1 1 0 0 1-.6-.3l-.8-.9-1-.8a1 1 0 0 1 0-1.2c1-2.2 4.8-8.9 6.6-10.6 1.6-1.6 5-1.2 6.8-1l.7.5ZM5.4 7.6l4-.4-2.7 4.5-2.8-.3a1 1 0 0 1-.6-1.7l2.1-2.1Zm11.4 7-.4 4-2 2.1a1 1 0 0 1-1.8-.6l-.4-2.8 4.6-2.7Zm.8-6.2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {props.type === 1 && (
          <div className="flex flex-col gap-4 text-white md:w-10/12 md:px-12">
            <h4 className="slide-in text-2xl font-bold text-center w-full text-lime-300">
              {props.content[0]}
            </h4>
            <p className="slide-in bg-white/20 p-4 text-sm rounded-md ">
              {props.content[1]}
            </p>
            <p className="slide-in bg-white/20 p-4 text-sm rounded-md ">
              {props.content[2]}
            </p>
          </div>
        )}
        {props.type === 2 && (
          <div className="flex flex-col gap-4 text-white md:w-10/12 md:px-12">
            <Image
              className="w-5/12 mx-auto"
              src={props.content[0]}
              width={300}
              height={300}
            />
            <p className="slide-in bg-white/20 p-4 text-sm rounded-md ">
              {props.content[1]}
            </p>
          </div>
        )}
        {props.type === 3 && (
          <div className="flex flex-col md:flex-row gap-4  items-center text-white md:w-10/12 md:px-12">
            <Image
              className="w-5/12 mx-auto"
              src={props.content[0]}
              width={300}
              height={300}
            />
            <p className="slide-in bg-white/20 p-4 text-sm rounded-md ">
              {props.content[1]}
            </p>
          </div>
        )}
        {props.type === 4 && (
          <div className="flex flex-col gap-4 text-white md:w-10/12 md:px-12">
            <h4 className="slide-in text-2xl font-bold text-center w-full text-lime-300">
              {props.content[0]}
            </h4>
            {wrong && !corect && (
              <p className=" text-center bg-yellow-300/20 border-2 border-yellow-300 text-yellow-300 font-bold slide-in bg-white/20 p-4 text-sm rounded-md ">
                {props.content[5]}
              </p>
            )}
            {corect && (
              <p className="bg-green-300/20 border-2 border-green-300 text-green-300 text-center slide-in bg-white/20 p-4 text-sm rounded-md ">
                {props.content[6]}
              </p>
            )}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setChoice(props.content[1])}
                className="slide-in bg-white/20 p-4 text-sm rounded-md hover:bg-lime-300 hover:text-white transition-all"
              >
                {props.content[1]}
              </button>
              <button
                onClick={() => setChoice(props.content[2])}
                className="slide-in bg-white/20 p-4 text-sm rounded-md hover:bg-lime-300 hover:text-white transition-all"
              >
                {props.content[2]}
              </button>
              <button
                onClick={() => setChoice(props.content[3])}
                className="slide-in bg-white/20 p-4 text-sm rounded-md hover:bg-lime-300 hover:text-white transition-all"
              >
                {props.content[3]}
              </button>
              <button
                onClick={() => setChoice(props.content[4])} // ✅
                className="slide-in bg-white/20 p-4 text-sm rounded-md hover:bg-lime-300 hover:text-white transition-all"
              >
                {props.content[4]}{" "}
                {choice === props.content[4] && wrong ? "❌" : "✅"}
              </button>
            </div>
          </div>
        )}
        {props.type === 5 && (
          <div className="flex flex-col gap-4 text-white md:w-10/12 md:px-12"></div>
        )}
        <button
          onClick={handleClick}
          className={
            corect
              ? "w-full md:w-1/2 bg-gradient-to-r from-sky-600 to-lime-300 font-bold text-lg py-2 rounded-full border-2 hover:border-lime-300 border-white text-white hover:scale-105 transition-all "
              : "w-full md:w-1/2 bg-gradient-to-r from-sky-600/20 to-lime-300/20 font-bold text-lg py-2 rounded-full text-gray-500 cursor-not-allowed "
          }
        >
          Urmatoarea Parte
        </button>
      </div>
    </div>
  );
};

export default Lesson;