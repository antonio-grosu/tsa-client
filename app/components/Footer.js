import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="bg-white px-8 py-8 md:px-12  lg:px-16 xl:px-24  2xl:px-28 ">
        <div className=" grid grid-cols-1 md:grid-cols-4 md:items-start gap-12 md:gap-0  ">
          <div className=" flex flex-col items-start  mr-6 text-neutral-950">
            <div className="md:w-3/12">
              <img
                src="/Logo.svg"
                alt="Logo"
                className="w-full mb-4 inline-block bg-neutral-950 px-2 py-1 rounded-md mr-2"
              />
            </div>
            {/* <span className="font-semibold text-xl tracking-tight poppins">ScienceIT</span> */}
            <p className="poppins text-sm  mt-2 ">
              © Copyright ScienceIT 2024
              <br />
              All rights reserved <br />
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-center">
            <h3 className=" poppins font-bold text-lg">Navigation</h3>
            <Link
              href="/"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              Home
            </Link>
            <Link
              href="/courses"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              Courses
            </Link>
            <Link
              href="/profile"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              My profile
            </Link>
          </div>
          <div className="flex flex-col gap-4 md:items-center">
            <h3 className=" poppins font-bold  text-lg">Social media</h3>
            <Link
              href="https://www.instagram.com/softeneers/"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              Instagram Softeneers
            </Link>
            <Link
              href="https://www.instagram.com/codevs.ro/"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              Instagram Codevs
            </Link>
          </div>

          <div className="flex flex-col gap-4 md:items-center">
            <h3 className=" poppins font-bold text-lg">Popular</h3>
            <Link
              href="/course/bac"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              Bacalaureat
            </Link>
          </div>
        </div>

        <p className=" mt-6 poppins font-semibold  w-full text-center text-gray-950/50 ">
          {" "}
          Powered by{" "}
          <Link
            className="text-orange-400 underline underline-offset-2 hover:text-orange-600 font-bold"
            href="https://softeneers.com/"
          >
            softeneers
          </Link>{" "}
          |{" "}
          <Link
            className="text-purple-500 underline underline-offset-2 hover:text-purple-700 font-bold"
            href="https://codevs.ro/"
          >
            codevs
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
