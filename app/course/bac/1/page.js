import Highlight from "../../Highlight";
import Link from "next/link";
import Exercise from "../../Exercise";
function Bac1() {
  return (
    <div className="w-full mx-auto bg-neutral-950 py-36 min-h-screen px-8 ">
      <h1 className="slide-inunderline underline-offset-4 text-4xl text-lime-300 font-bold text-center poppins">
        {" "}
        Aritmetică și Operatori Liniari
      </h1>
      <div className="slide-in flex flex-col poppins gap-16 items-start mx-auto mt-24 md:w-1/2">
        <p className="text-white text-sm">
          Termeni grei, știu, dar cu o explicație mult mai simplă. Ei de fapt
          reprezintă operații simple de matematică, cum ar fi adunarea,
          scăderea, înmulțirea și împărțirea. În cazul operatorilor liniari, se
          adaugă și împărțirea cu rest.
        </p>
        <p className="text-white text-sm">
          Cum era aia... "Nu știu ce e aia împărțire cu rest, dar știu că era
          simplă"? Ei bine, nu e chiar așa de simplă, dar nici foarte grea.
        </p>
        <h3 className="text-2xl font-bold text-lime-300">
          {" "}
          În cazul împărțirii cu rest, împărțirea se face cu /, iar restul se
          notează cu %.
        </h3>
        <Highlight content="De exemplu 6 = 5 * 1 + 1, deci 6 % 5 = 1 și restul întotdeauna va fi mai mic decât împărțitorul." />
        <div className="grid grid-cols-6 items-start text-xl text-gray-950 p-4 gap-8 w-full bg-white font-bold">
          <p>D = </p>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p>A</p>
            <p>Împărțitor</p>
          </div>
          <p>*</p>

          <div className="flex flex-col gap-2 items-center justify-center">
            <p>B</p>
            <p className="text-lime-300 p-1 px-2 bg-neutral-950 flex items-center justify-center rounded-sm">
              /
            </p>
          </div>
          <p>+</p>

          <div className="flex flex-col gap-2 items-center justify-center">
            <p>R</p>
            <p className="text-lime-300 p-1 px-2 bg-neutral-950 flex items-center justify-center rounded-sm">
              %
            </p>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-lime-300">
          În cazul operatorilor liniari, se adaugă și operatorii de comparație,
          cum ar fi{" "}
          <span className="text-white">
            {"<"}, {">"}, {"<="}, {">="}, {"=="}, {"!="}
          </span>
        </h3>
        <Highlight content="De exemplu 5 < 6 este adevărat, iar 5 > 6 este fals." />
        <h3 className="text-2xl font-bold text-lime-300">
          În cazul operatorilor de comparație, se adaugă și operatorii logici,
          cum ar fi <span className="text-white">&& , || , ! .</span>
        </h3>
        <p className="text-white">
          Aceștia se folosesc pentru a combina două valori adevărate sau false,
          iar rezultatul va fi adevărat sau fals. <br />
          <span className="text-bold text-lime-300 text-2xl mr-2">||</span>{" "}
          înseamnă sau,{" "}
          <span className="text-bold text-lime-300 text-2xl mx-2">&&</span>{" "}
          înseamnă și, iar{" "}
          <span className="text-bold text-lime-300 text-2xl mx-2">!</span>{" "}
          înseamnă nu / not sau opusul.
        </p>
        <div className="flex md:flex-row flex-col items-start justify-between w-full gap-8 font-semibold">
          <div className="w-full">
            <h1 className="text-2xl mb-2 text-white text-center font-bold w-full">
              !
            </h1>
            <div className="w-full bg-white rounded-md flex items-top w-3/12 justify-center gap-2 poppins text-xl text-gray-950">
              <div className="grid grid-cols-1 gap-2 p-4 items-center">
                <p className="border-b-2 border-neutral-950">A</p>
                <p className="w-full text-center">T</p>
                <p className="w-full text-center">F</p>
              </div>
              <div className="p-1 bg-neutral-950"></div>
              <div className="grid grid-cols-1 gap-2 p-4 items-center">
                <p className="border-b-2 border-neutral-950">!A</p>
                <p className="w-full text-center">F</p>
                <p className="w-full text-center">T</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-2xl mb-2 text-white text-center font-bold w-full">
              &&
            </h1>

            <div className="w-full bg-white rounded-md flex items-top justify-center gap-2 w-3/12 poppins text-xl text-gray-950">
              <div className="grid grid-cols-1 gap-2 p-4 items-center">
                <p className="border-b-2 border-neutral-950">A B </p>
                <p className="w-full text-center">T T</p>
                <p className="w-full text-center">T F</p>
                <p className="w-full text-center">F T</p>
                <p className="w-full text-center">F F</p>
              </div>
              <div className="p-1 bg-neutral-950"></div>
              <div className="grid grid-cols-1 gap-2 p-4 justify-center items-center">
                <p className="border-b-2 border-neutral-950">A && B</p>
                <p className="w-full text-center">T</p>
                <p className="w-full text-center">F</p>
                <p className="w-full text-center">F</p>
                <p className="w-full text-center">F</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-2xl mb-2 text-white text-center font-bold w-full">
              ||
            </h1>

            <div className="w-full bg-white rounded-md flex items-top justify-center gap-2 w-3/12 poppins text-xl text-gray-950">
              <div className="grid grid-cols-1 gap-2 p-4 items-center">
                <p className="border-b-2 border-neutral-950">A B </p>
                <p className="w-full text-center">T T</p>
                <p className="w-full text-center">T F</p>
                <p className="w-full text-center">F T</p>
                <p className="w-full text-center">F F</p>
              </div>
              <div className="p-1 bg-neutral-950"></div>
              <div className="grid grid-cols-1 gap-2 p-4  items-center">
                <p className="border-b-2 border-neutral-950">A || B</p>
                <p className="w-full text-center">T</p>
                <p className="w-full text-center">T</p>
                <p className="w-full text-center">T</p>
                <p className="w-full text-center">F</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-lime-300">
          {" "}
          Operațiile de bază sunt adunarea, scăderea, înmulțirea și împărțirea,
          dar și atribuirea.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 w-full items-center justify-center gap-8">
          <p className="p-2 text-neutral-950 font-semibold bg-white text-center">
            a = 2 + 3 ;
          </p>
          <p className="p-2 text-neutral-950 font-semibold bg-white text-center">
            b = 3 - 1 ;
          </p>
          <p className="p-2 text-neutral-950 font-semibold bg-white text-center">
            a = 3 * 8 ;
          </p>
          <p className="p-2 text-neutral-950 font-semibold bg-white text-center">
            b = 25 / 5 ;
          </p>
          <p className="p-2 text-neutral-950 font-semibold bg-white text-center">
            a = b ;
          </p>
        </div>
        <h3 className="text-2xl font-bold text-lime-300">
          {" "}
          Cum rezolv acest exercițiu la BAC?
        </h3>
        <Exercise
          exercise={{
            question:
              "Variabila x este de tip real. Care dintre următoarele expresii C/C++ are valoarea 1 dacă și numai dacă numărul real memorat în variabila x aparține intervalului(5, 8]? ",
            answer1: "(x<8) && (x>=5) ",
            answer2: "(x<=8) || (x>5)",
            answer3: "(x>8) || (x<=5)",
            answer4: "(x<=8) && (x>5)",
            correctAnswer: "(x<=8) && (x>5)",
            explanation: "X este mai mare decât 5 și mai mic sau egal cu 8.",
            hint: "Alege intervalul corect.",
          }}
        />

        <p className="text-white">
          Ei bine, în primul rând trebuie să citești cu atenție enunțul. Dacă nu
          înțelegi ceva, citește-l din nou. Dacă nu înțelegi nimic, citește-l
          iar din nou. După asta, totul este simplu. Matematica de clasa a 3-a.
          Cel mai simplu este să-ți pui întrebarea, "cum ar arăta asta în
          caietul meu de când eram în (școala) primară?" Și încă ceva, uneori,
          este cel mai bine să iau fiecare variantă și să o verific. Totuși,
          lucrăm cu grile {"=>"} răspunsul este acolo, trebuie doar să-l găsim.
        </p>
        <h3 className="text-2xl font-bold text-lime-300">
          {" "}
          Explicație: X este mai mare decât 5 și mai mic sau egal cu 8.{" "}
        </h3>
        <Link
          href="/course/bac/2"
          className="text-gray-950 font-bold  rounded-md hover:scale-105 hover:shadow-lime-300/50 transition-all hover:shadow-md bg-lime-300 px-4 py-2 mx-auto"
        >
          Lecția următoare
        </Link>
      </div>
    </div>
  );
}

export default Bac1;
