"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Loading from "@/app/components/Loading";
import Image from "next/image";

function PreOrder() {
  const [recycle, setRecycle] = useState(true);
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
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://walrus-app-wcxde.ondigitalocean.app/ownedbies/${courseId}/${userId}`
        );
        setOwns(true);
        setLoading(false);
      } catch (error) {
        // activeaza true daca nu are cursul
        setOwns(false);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "https://walrus-app-wcxde.ondigitalocean.app/payment/create-checkout-session",
        {
          name,
          price,
          description,
          userId,
          courseId,
        }
      );
      window.location.href = response.data.url;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setRecycle(false);
    }, 3000);
  }, [recycle]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="bg-neutral-950 poppins text-white py-36 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 flex items-center md:flex-row flex-col justify-center md:justify-between min-h-screen">
          <Confetti numberOfPieces={3000} recycle={recycle} />
          <div className="md:w-1/2  p-8 rounded-md ">
            {!owns && (
              <h1 className="text-2xl slide-in  text-center md:text-left md:text-4xl  font-bold">
                Felicitări! Ai parcurs{" "}
                <span className="text-lime-300">DEMO-ul</span> cursului de BAC!
              </h1>
            )}
            {owns && (
              <h1 className="text-2xl slide-in  text-center md:text-left md:text-4xl  font-bold">
                Cursul integral în curând!
              </h1>
            )}
            {!owns && (
              <p className="mt-8 slide-in text-center md:text-left">
                {" "}
                Ai demonstrat dedicare și înțelegere în explorarea conținutului
                pregătit pentru tine. Cu resursele noastre educaționale de
                înaltă calitate, vei fi pregătit în mod optim pentru examenul de
                Bacalaureat.
              </p>
            )}
            {!owns && (
              <button
                onClick={() => handlePayment()}
                className=" slide-in px-8 xhidden md:block  py-2 text-neutral-950  font-bold  text-lg rounded-md  mt-8 bg-lime-300"
              >
                {" "}
                Cumpără Acum - 12.49 Ron
              </button>
            )}

            {owns && (
              <div className="slide-in w-full rounded-md bg-green-300/30 border-2 mt-8 border-green-300 text-green-300 p-4 fira ">
                {" "}
                {`#include <iostream>`} <br />
                {`using namespace std; \n`} <br />
                {`int main () { \n \t`} <br />
                {`    bool preOrder = true ;`} <br />
                {`    float timeLeft = 1.25 // exprimat în luni \n \t`} <br />
                {`    return 0; \n \t`} <br />
                {`}`}
              </div>
            )}
          </div>
          <div className="md:w-5/12">
            <Image
              width={500}
              height={500}
              src="/completeDemo.svg"
              alt="Completed Demo"
              className="w-full"
            />
          </div>
          {!owns && (
            <button
              onClick={() => handlePayment()}
              className=" slide-in md:hidden px-8 py-2 text-neutral-950 w-full font-bold  text-lg rounded-md  mt-4 bg-lime-300"
            >
              {" "}
              Cumpără Acum - 12.49 Ron
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default PreOrder;
