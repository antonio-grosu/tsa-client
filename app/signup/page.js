"use client";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import Image from "next/image";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate({ userName, firstName, lastName, email, password });
      const response = await axios.post(
        "https://walrus-app-wcxde.ondigitalocean.app/auth",
        {
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          password: password,
          email: email,
        }
      );
      window.location.href = "/login";
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="py-28 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 bg-neutral-950 text-lime-300 p-4 min-h-screen flex flex-col justify-center items-center">
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
        className=" bg-neutral-500/10 poppins  rounded-md p-8 w-full md:w-1/2 mx-auto text-lime-300 flex flex-col justify-center items-center"
      >
        <div className="mb-4 w-full">
          <h2 className="text-2xl font-bold mb-6 text-center mt-8">Sign up</h2>
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="email"
            >
              First Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 placeholder:text-gray-50/20 bg-gray-500/10 leading-tight focus:outline-none focus:shadow-outline ${
                errors.firstName ? "border-red-500" : ""
              }`}
              id="firstName"
              type="name"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Last Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 placeholder:text-gray-50/20 bg-gray-500/10 leading-tight focus:outline-none focus:shadow-outline ${
                errors.lastName ? "border-red-500" : ""
              }`}
              id="lastName"
              type="name"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <label
            className="block text-gray-400 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 placeholder:text-gray-50/20 bg-gray-500/10 leading-tight focus:outline-none focus:shadow-outline ${
              errors.userName ? "border-red-500" : ""
            }`}
            id="userName"
            type="text"
            placeholder="Username"
            name="userName"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic">{errors.username}</p>
          )}
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-400 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 placeholder:text-gray-50/20 bg-gray-500/10 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-400 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 placeholder:text-gray-50/20 bg-gray-500/10 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : ""
            }`}
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 mx-auto mt-4 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </form> */}
    </div>
  );
};

export default Signup;
