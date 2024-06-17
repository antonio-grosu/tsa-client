"use client";
import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import Image from "next/image";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate({ email, password });
      const response = await axios.post(
        "https://walrus-app-wcxde.ondigitalocean.app/auth/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);

      //localstorage remember the user info
      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("userId", response.data.user.id);
      localStorage.setItem("userName", response.data.user.userName);
      localStorage.setItem("firstName", response.data.user.firstName);
      localStorage.setItem("lastName", response.data.user.lastName);
      localStorage.setItem("xp", response.data.user.xp);

      // redirect to home page
      window.location.href = "/";
    } catch (err) {
      setError(err.response.data.error);
    }
  };
  return (
    <div className="py-28 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 min-h-screen bg-neutral-950 text-lime-300 p-4  flex flex-col justify-center items-center">
      <h1 className="text-4xl poppins slide-in">
        The Software Academy Inapoi Curand!
      </h1>
      <Image
        src="/coding.svg"
        width={0}
        height={0}
        className="w-1/3 slide-in"
      />
      {/* <form
        onSubmit={handleSubmit}
        className="bg-gray-500/10 p-8 rounded-md w-full md:w-1/2 mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && (
          <p className="text-red-500 mb-4 text-center poppins bg-red-500/20 p-2 rounded-sm">
            {error}
          </p>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-400 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 placeholder:text-gray-50/20 bg-gray-500/10 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-400 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 placeholder:text-gray-50/20 bg-gray-500/10 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 mt-4 mx-auto text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form> */}
    </div>
  );
};

export default Login;
