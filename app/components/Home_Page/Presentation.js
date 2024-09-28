import Link from "next/link";
import Image from "next/image";
const Presentation = () => {
  // Componenta pentru afișarea fiecărui element "Card"
  const Card = (props) => {
    return (
      <div>
        <li className="cursor-pointer md:w-full max-w-fit hover:scale-105 transition-all ease-in-out hover:bg-white/20 mb-4 py-2 px-4 flex items-center flex-col justify-center text-center border-2 border-white/50 rounded-md">
          <span className="font-bold text-md text-lime-300">{props.title}</span>
          <div className="w-full">
            <Image
              alt="Education Illustration"
              priority
              width={500}
              height={500}
              src={props.img}
              className="w-24 h-24 rounded-md mt-2"
            />
          </div>
        </li>
      </div>
    );
  };

  // Un array de obiecte cu titlul și descrierea fiecărui "Card"
  const arr = [
    {
      key: 0,
      index: 0,
      title: "C/C++",
      img: "/cpp-logo.svg",
      description:
        "Our instructors have years of experience in the industry and are passionate about teaching.",
    },
    {
      key: 1,
      index: 1,
      title: "JavaScript",
      img: "/js-logo.svg",
      description:
        "Our instructors have years of experience in the industry and are passionate about teaching.",
    },
    {
      key: 2,
      index: 2,
      img: "/python-logo.svg",
      title: "Python",
      description:
        "Our instructors have years of experience in the industry and are passionate about teaching.",
    },
    {
      key: 3,
      index: 3,
      img: "/java-logo.svg",
      title: "Java",
      description:
        "Our instructors have years of experience in the industry and are passionate about teaching.",
    },
  ];

  return (
    <div className="bg-neutral-950 items-center flex flex-col px-8 py-12 md:px-24 lg:px-36 xl:px-48 2xl:px-72">
      <h2 className="w-full text-center text-2xl md:text-3xl poppins font-bold mb-8 text-white">
        Urmatoarele cursuri de la{" "}
        <div className="inline-block">
          {" "}
          <p className="font-bold text-lime-300 underline underline-offset-4">
            The Software Academy
          </p>
        </div>
      </h2>
      <ul className="text-lg mb-8 text-white grid md:grid-cols-4 grid-cols-2 gap-4 justify-center">
        {arr.map((item) => {
          return (
            <Card
              key={item.key}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          );
        })}
      </ul>

      <Link
        href="/courses"
        className="bg-lime-300 md:w-auto w-full text-center hover:shadow-lime-500 hover:shadow-md hover:scale-105 transition-all transition-ease-in-out text-neutral-950  py-2 px-4 rounded-md"
      >
        Vezi Cursurile
      </Link>
    </div>
  );
};

export default Presentation;
