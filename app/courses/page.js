"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "../components/Loading";
import Bundle from "../components/Courses_Page/Bundle";
import Section from "../components/Courses_Page/Section";

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

export default Courses;
