import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

function MinPreOrder() {
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
    <div className="rounded-md bg-lime-300/10 p-8 poppins gap-4  flex item-center justify-center">
      <div>
        <h1 className="text-2xl text-white font-bold">
          Fii printre primii care au acces la acest curs și obține reducere de{" "}
          <span className="text-lime-300 ">50%</span>
        </h1>
        <p className="mt-4 text-white"></p>
        <div className="w-full flex items-center justify-center md:justify-end">
          <button
            className="mt-4 px-4 py-2 bg-white text-neutral-950 shadow-lg shadow-lime-300/30  animate-[bounce_2s_infinite] font-semibold rounded-md"
            onClick={handlePayment}
          >
            Precomandă Azi -{" "}
            <span className="font-semibold text-lg">12.49 Ron</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MinPreOrder;
