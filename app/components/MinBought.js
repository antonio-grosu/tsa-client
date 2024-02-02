import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

function MinBought() {
  const [loading, setLoading] = useState(false);
  const [owns, setOwns] = useState(false);
  const [userId, setUserId] = useState("");
  const [noAcc, setNoAcc] = useState(true);
  const courseId = 1;
  const price = 12.49;
  const name = "Curs BAC";
  const description =
    "Cursul care te va ajuta să-ți atingi potențialul maxim și să iei nota 10 (zece) la examenul de Bacalaureat";

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

  return (
    <div className="rounded-md bg-lime-300/10 p-8 poppins gap-4  flex item-center justify-center">
      <div>
        <h1 className="text-lg md:text-2xl text-white font-bold">
          Ești printre primii care au acces la acest curs!
        </h1>
        <p className="mt-4 text-white"></p>
        <div className="w-full flex items-center justify-center gap-2  p-4 text-sm poppins text-center bg-blue-300 font-bold rounded-md">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-gray-950 animate-bounce"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11 21V2.4a3.5 3.5 0 0 0-4.8 1.8A3.5 3.5 0 0 0 4 8l-.7 1.1-.1.4-.1.3a3.5 3.5 0 0 0 0 1.5A3.9 3.9 0 0 0 2 14v.9l.2.6a3.8 3.8 0 0 0 1 1.4 4 4 0 0 0 .6.5v.1A3.5 3.5 0 0 0 7 21a3.4 3.4 0 0 0 4.2.5 1 1 0 0 1-.2-.5Zm11-7.7v-.1a4 4 0 0 0-1-2 3.4 3.4 0 0 0-.2-1.7V9c-.3-.4-.5-.8-.8-1a3.4 3.4 0 0 0-.6-2.6 4 4 0 0 0-1.6-1.3A3.5 3.5 0 0 0 13 2.4V21c0 .2 0 .4-.2.5A3.4 3.4 0 0 0 17 21a3.5 3.5 0 0 0 3-3.5 5.4 5.4 0 0 0 .7-.5 4.2 4.2 0 0 0 .7-.9l.3-.5.2-.7v-.2a4 4 0 0 0 0-1.4Z" />
          </svg>
          Precomandă Plasată
        </div>
      </div>
    </div>
  );
}

export default MinBought;
