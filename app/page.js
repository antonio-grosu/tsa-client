"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Hero from "./components/Home_Page/Hero";
import Product from "./components/Home_Page/Product";
import Presentation from "./components/Home_Page/Presentation";

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <Presentation />
    </>
  );
};

export default Home;
