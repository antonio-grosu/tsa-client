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
            <span className="font-semibold text-xl tracking-tight poppins">
              The Software Academy
            </span>
          </div>
          <div className="flex flex-col gap-4 md:items-center">
            <h3 className=" poppins font-bold text-lg">Navigatie</h3>
            <Link
              href="/"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              Acasa
            </Link>
            <Link
              href="/courses"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              Cursuri
            </Link>
            <Link
              href="/profile"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              Profilul Meu
            </Link>
          </div>
          <div className="flex flex-col gap-4 md:items-center">
            <h3 className=" poppins font-bold  text-lg">Social media</h3>
            <Link
              href="https://www.instagram.com/softeneers/"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              Instagram
            </Link>
            <Link
              href="https://www.instagram.com/codevs.ro/"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/codevs.ro/"
              className="hover:text-lime-500 transition-all text-sm poppins "
            >
              {" "}
              Tiktok
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

        <p className=" mt-12 poppins text-sm hover:cursor-pointer p-4    text-center  ">
          {" "}
          Powered by{" "}
          <Link
            className="text-teal-400  font-bold"
            href="https://blooming-solutions.ro/"
          >
            Blooming Solutions
          </Link>{" "}
        </p>
      </footer>
    </div>
  );
}

export default Footer;
