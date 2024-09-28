import Link from "next/link";
import Image from "next/image";
const Product = () => {
  return (
    <div className="border-b-2 border-black/10 bg-white items-center flex flex-col justify-center px-8 py-12 md:px-24 lg:px-36 xl:px-48 2xl:px-72 ">
      <div className="w-full flex items-center justify-between md:flex-row flex-col">
        <div className="md:w-5/12 poppins text-neutral-950">
          <h1 className="font-semibold text-3xl">
            Descoperă Știința cu The Software Academy
          </h1>
          <p className="mt-4 md:mb-8">
            The Software Academy este pașaportul tău către lumea fascinantă a
            științei. Explorează lecții interactive și experimentează într-un
            mod distractiv. Începe aventura ta științifică astăzi!
          </p>

          <Link
            href="/courses"
            className="hidden md:inline-block bg-lime-300  hover:shadow-lime-500 hover:shadow-md hover:scale-105 transition-all transition-ease-in-out text-neutral-950  py-2 px-4 rounded"
          >
            <svg
              className="w-4 h-4  text-neutral-950 mr-2 inline-block"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
            </svg>{" "}
            Explorează Cursurile
          </Link>
        </div>
        <div className="md:w-5/12">
          <Image
            alt="Education Illustration"
            width={500}
            height={500}
            src="/student.svg"
            className="w-full"
          />
        </div>
        <Link
          href="/courses"
          className="w-full text-center mt-8 md:hidden bg-lime-300  hover:shadow-lime-500 hover:shadow-md hover:scale-105 transition-all transition-ease-in-out text-neutral-950  py-2 px-4 rounded"
        >
          <svg
            className="w-4 h-4 text-neutral-950 mr-2 inline-block"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
          </svg>{" "}
          Explorează Cursurile
        </Link>
      </div>
      <div className="w-full flex items-center justify-between mt-24 md:flex-row flex-col">
        <div className="w-5/12">
          <Image
            alt="Students"
            width={500}
            height={500}
            src="/teacher.svg"
            className="hidden md:block w-full"
          />
        </div>
        <div className="md:w-5/12 poppins text-neutral-950 mb-16">
          <h1 className="font-semibold text-3xl">
            Conduceti Învățărea în Era Digitală
          </h1>
          <p className="mt-4 md:mb-8">
            The Software Academy este instrumentul esențial pentru predarea
            științei într-un mod captivant. Personalizați lecțiile, urmăriți
            progresul și inspirați-vă elevii. Transformați învățarea științei
            într-o experiență interactivă cu The Software Academy!
          </p>
          {/* <div className="flex items-center justify-start gap-2">
            <Link
              href="/"
              className="hidden md:inline-block font-normal bg-lime-300 cursor-progress hover:shadow-lime-500 hover:shadow-md hover:scale-105 transition-all transition-ease-in-out text-neutral-950  py-2 px-4 rounded-md "
            >
              <svg
                className="w-4 h-4 mr-2 inline-block  text-neutral-950"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 20"
              >
                <path d="M20.168 6.136 14.325.293a1 1 0 0 0-1.414 0l-1.445 1.444a1 1 0 0 0 0 1.414l5.844 5.843a1 1 0 0 0 1.414 0l1.444-1.444a1 1 0 0 0 0-1.414Zm-4.205 2.927L11.4 4.5a1 1 0 0 0-1-.25L4.944 5.9a1 1 0 0 0-.652.624L.518 17.206a1 1 0 0 0 .236 1.04l.023.023 6.606-6.606a2.616 2.616 0 1 1 3.65 1.304 2.615 2.615 0 0 1-2.233.108l-6.61 6.609.024.023a1 1 0 0 0 1.04.236l10.682-3.773a1 1 0 0 0 .624-.653l1.653-5.457a.999.999 0 0 0-.25-.997Z" />
                <path d="M10.233 11.1a.613.613 0 1 0-.867-.868.613.613 0 0 0 .867.868Z" />
              </svg>{" "}
              Creează Cursuri
            </Link>
            <p className="text-gray-950  hidden md:block font-bold text-sm poppins ">
              {" "}
              - Coming Soon
            </p>
          </div> */}
          <div className="">
            <Image
              alt="Teacher"
              width={500}
              height={500}
              src="/teacher.svg"
              className="md:hidden w-full"
            />
          </div>
          {/* <div className="flex items-center justify-start gap-2">
            <Link
              href="/"
              className="md:hidden  bg-lime-300 cursor-progress rounded-md hover:shadow-lime-500 hover:shadow-md hover:scale-105 transition-all transition-ease-in-out text-neutral-950  py-2 px-4 "
            >
              <svg
                className="w-4 h-4 mr-2 inline-block  text-neutral-950"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 20"
              >
                <path d="M20.168 6.136 14.325.293a1 1 0 0 0-1.414 0l-1.445 1.444a1 1 0 0 0 0 1.414l5.844 5.843a1 1 0 0 0 1.414 0l1.444-1.444a1 1 0 0 0 0-1.414Zm-4.205 2.927L11.4 4.5a1 1 0 0 0-1-.25L4.944 5.9a1 1 0 0 0-.652.624L.518 17.206a1 1 0 0 0 .236 1.04l.023.023 6.606-6.606a2.616 2.616 0 1 1 3.65 1.304 2.615 2.615 0 0 1-2.233.108l-6.61 6.609.024.023a1 1 0 0 0 1.04.236l10.682-3.773a1 1 0 0 0 .624-.653l1.653-5.457a.999.999 0 0 0-.25-.997Z" />
                <path d="M10.233 11.1a.613.613 0 1 0-.867-.868.613.613 0 0 0 .867.868Z" />
              </svg>{" "}
              Creează Cursuri
            </Link>
            <p className="text-gray-950 md:hidden rounded-md text-sm poppins ">
              {" "}
              - Coming Soon
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
