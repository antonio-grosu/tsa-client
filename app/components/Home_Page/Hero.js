import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-neutral-950 py-24 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 flex items-center md:flex-row flex-col justify-center md:justify-end">
      {/* ********* Hero Content ********* */}
      <div className="slide-in md:w-1/2 lg:w-4/12 mt-16">
        <h1 className="text-4xl text-white font-semibold poppins">
          Cursurile Tale, Oportunitatea Ta
        </h1>
        <p className="text-white poppins my-6 lg:my-12">
          Descoperă platforma care transformă pasiunea ta în succesul tău
          personal și profesional.
        </p>
        <Link
          href="/courses"
          className="hidden md:inline-flex items-center justify-center hover:shadow-lime-500 hover:shadow-md transition-all transition-ease-in-out px-4 py-2 rounded-md  poppins text-neutral-950 bg-lime-300"
        >
          <p className="ml-2">Descoperă Cursurile</p>
        </Link>
      </div>

      {/* ********* Hero Illustrations 4 squares ********* */}
      <div className="flex gap-4 md:items-center items-start w-full md:justify-end md:w-8/12">
        <div className="flex-col items-center mt-8">
          {/* Primul pătrat cu ilustrație */}
          <div className="bg-neutral-950 pulsing px-3 py-2 rounded-md md:w-44 md:h-44 border-2 border-white/50 flex flex-col justify-between">
            <div className="text-white text-sm poppins">
              <h3 className="font-bold">Personalizare a Conținutului</h3>
            </div>
            <Image
              alt="Education Illustration"
              width={500}
              height={500}
              src="/content.svg"
              className="w-8/12 mx-auto"
            />
          </div>
          {/* Al doilea pătrat cu ilustrație */}
          <div className="bg-white pulsing p-8 rounded-md md:w-44 md:h-44 mt-6 border-2 px-3 py-2 flex flex-col justify-between">
            <div className="text-neutral-950 text-sm poppins">
              <h3 className="font-bold">Conținut Educațional Interactiv</h3>
            </div>
            <Image
              alt="Education Illustration"
              priority
              width={500}
              height={500}
              src="/educate.svg"
              className="w-8/12 mx-auto"
            />
          </div>
        </div>
        <div className="flex-col items-center ">
          {/* Al treilea pătrat cu ilustrație */}
          <div className="bg-white pulsing p-8 rounded-md md:w-44 md:h-44  border-2 px-3 py-2 flex flex-col justify-between">
            <div className="text-neutral-950 text-sm poppins">
              <h3 className="font-bold">Comunitate și Colaborare</h3>
            </div>
            <Image
              alt="Education Illustration"
              priority
              width={500}
              height={500}
              src="/community.svg"
              className="w-8/12 mx-auto"
            />
          </div>
          {/* Al patrulea pătrat cu ilustrație */}
          <div className="bg-neutral-950 pulsing px-3 py-2 rounded-md md:w-44 md:h-44  border-2 border-white/50 flex flex-col mt-6 justify-between">
            <div className="text-white text-sm poppins">
              <h3 className="font-bold">Urmărire a Progresului</h3>
            </div>
            <Image
              alt="Education Illustration"
              priority
              width={500}
              height={500}
              src="/progress.svg"
              className="w-8/12 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* ********* Hero Button Hidden on Desktop ********* */}
      <Link
        href="/courses"
        className="md:hidden flex w-full mt-8 items-center justify-center hover:shadow-lime-500 hover:shadow-md transition-all transition-ease-in-out px-4 py-2 rounded-md  poppins text-neutral-950 bg-lime-300"
      >
        <p className="ml-2">Descoperă Cursurile</p>
      </Link>
    </div>
  );
};

export default Hero;
