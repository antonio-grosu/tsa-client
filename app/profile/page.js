"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    xp: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUser({
      userName: localStorage.getItem("userName"),
      xp: localStorage.getItem("xp"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      email: localStorage.getItem("email"),
    });
  }, []);

  if (
    user.email &&
    user.userName &&
    user.xp &&
    user.firstName &&
    user.lastName
  ) {
    return (
      <div className="py-28 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 md:flex-row flex-col bg-neutral-950 text-lime-300 p-4 min-h-screen flex  items-center  gap-8 justify-between">
        <div className="flex-col flex items-center justify-center md:items-start gap-8 w-full mt-12 ">
          <div className="text-4xl text-white font-bold inline-block justify-center items-center flex flex-row">
            Hei,
            <span className="text-lime-300 text-4xl p-3 font-bold mr-5">
              {user.userName}
            </span>
          </div>
        </div>

        <div className="w-full overflow-hidden mt-8 sm:rounded-lg poppins ">
          <div className="mb-8 ">
            <h3 className="text-lg  font-medium w-full flex items-center justify-center gap-1 text-center">
              <svg
                className="inline-block w-4 h-4 text-lime-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 18"
              >
                <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>{" "}
              Informații Profil
            </h3>
            <p className="mt-4  w-full text-sm text-white  text-center">
              Detalii personale.
            </p>
          </div>
          <div className=" p-8 sm:p-0 bg-lime-300/10 rounded-lg">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Username</dt>
                <dd className="mt-1 text-sm text-gray-white sm:mt-0 sm:col-span-2">
                  {user.userName}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  First name
                </dt>
                <dd className="mt-1 text-sm text-gray-white sm:mt-0 sm:col-span-2">
                  {user.firstName}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Last name</dt>
                <dd className="mt-1 text-sm text-gray-white sm:mt-0 sm:col-span-2">
                  {user.lastName}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-white sm:mt-0 sm:col-span-2">
                  {user.email}
                </dd>
              </div>

              {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Date of creation
              </dt>
              <dd className="mt-1 text-sm text-gray-white sm:mt-0 sm:col-span-2">
                {user.dateOfCreation ? user.dateOfCreation : "49 Decembrie"}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Date of last login
              </dt>
              <dd className="mt-1 text-sm text-gray-white sm:mt-0 sm:col-span-2">
                {user.dateOfLastLogin ? user.dateOfLastLogin : "32 Noiembrie"}
              </dd>
            </div> */}
            </dl>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="py-28 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 bg-neutral-950 text-lime-300 p-4 h-screen  poppins">
        <div className="w-8/12 mx-auto flex flex-col mt-16 items-center">
          <h1 className="text-2xl text-white font-bold text-center">
            Hei! Trebuie să fii logat pentru a-ți accesa profilul...
          </h1>
          <div className="mt-8">
            <img src="/oops.svg" className="w-9/12 mx-auto" />
          </div>
        </div>
      </div>
    );
}

export default Profile;
