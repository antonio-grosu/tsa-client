"use client";
import Highlight from "../../Highlight";
import Link from "next/link";
import TypeLesson from "../../TypeLesson";

function Bac2() {
  return (
    // <div className="w-full mx-auto bg-neutral-950 py-36  min-h-screen px-8">
    //   <h1 className="slide-in underline underline-offset-4 text-4xl text-lime-300 font-bold text-center poppins">
    //     Backtracking
    //   </h1>
    //   <div className="slide-in flex flex-col poppins gap-8 items-start mx-auto mt-24 md:w-1/2">
    //     <p className="text-white text-sm">
    //       Hmm... Alt termen greu, dar de fapt extrem de simplu. Hai să ne aducem
    //       aminte de clasa a II-a, când am avut un exercițiu de genul:
    //     </p>
    //     <Highlight content="Scrieți toate numerele de 3 cifre distincte care se pot forma cu cifrele 2, 3 și 4." />
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       Păi simplu: 234, 243, 324, 342, 423, 432.
    //     </h3>
    //     <p className="text-white text-sm">Hmm... sunt crescătoare.</p>
    //     <p className="text-white text-sm">Acum, din nou, dar cu alte reguli:</p>
    //     <Highlight
    //       content="Scrieți toate numerele de 5 cifre distincte care se pot forma cu cifrele 2, 3, 4, 5 și 6,
    //         dar în care nu putem așeza cifrele pare una lângă alta."
    //     />
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       Un pic mai greu, dar tot simplu: 23456,{" "}
    //       <span className="line-through">23645</span>,{" "}
    //       <span className="line-through">23546</span>,{" "}
    //       <span className="line-through">23564</span>, 23654, etc.
    //     </h3>
    //     <Highlight
    //       content="Răspunsul final:
    //       23456, 23654, 25436, 25436, 25634, 43256, 43652, 45236, 45632, 63254,
    //       63452, 65234 și 65432."
    //     />
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       Și acum, variantele de probleme întâlnite la bac:
    //     </h3>
    //     <Highlight
    //       content="Avem trandafiri, lalele, azalee și orhidee.
    //         Dacă nu putem avea lalele lângă orhidee, câte buchete de 3 flori putem face?"
    //     />
    //     <p className="text-white text-sm">Hai să le numerotăm:</p>
    //     <Highlight
    //       content=" trandafir = 1, lalea = 2, azalee = 3, orhidee =
    //       4."
    //     />
    //     <p className="text-white text-sm">
    //       Și avem ghivece cu 3 flori, adică numere de 3 cifre.
    //     </p>
    //     <p className="text-white text-sm">
    //       Cu alte cuvinte, reformulând, avem numere de 3 cifre, în care nu putem
    //       avea cifra 2 lângă cifra 4.
    //     </p>
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       Din nou... simplu, nu?
    //     </h3>
    //     <Highlight content="            132, 134, 142, 143, 231, 234, 241, 243, 314, 324, 341, 342, 413, 423, 431, 432." />
    //     <Link
    //       href="/course/bac/3"
    //       className="text-gray-950 font-bold rounded-md hover:scale-105 hover:shadow-lime-300/50 transition-all hover:shadow-md  bg-lime-300 px-4 py-2  mx-auto"
    //     >
    //       Lecția următoare
    //     </Link>
    //   </div>
    // </div>
    <TypeLesson
      title="Backtracking"
      next="4"
      course="N-am chef de BAC, ce fac?"
      parts={[
        {
          key: 0,
          type: 1,

          content: [
            "Ce poate fi asta?",
            "Hmm... sunt ciudat, nu? Promit, este extrem de simplu. Ia-ti o foaie de hartie si un creion sau deschide un note si hai să ne aducem aminte de clasa a II-a, când am avut un exercițiu de genul:",
            "Scrieți toate numerele de 3 cifre distincte care se pot forma cu cifrele 2, 3 și 4. Te invit să încerci și tu inainte să continui.",
          ],
        },
        {
          key: 1,
          type: 1,

          content: [
            "Păi simplu: 234, 243, 324, 342, 423, 432.",
            "Hmm... sunt crescătoare.",
            `Acum, din nou, dar cu alte reguli...`,
          ],
        },
        {
          key: 2,
          type: 1,
          content: [
            "Scrieți toate numerele de 5 cifre distincte care se pot forma cu cifrele 2, 3, 4, 5 și 6, dar în care nu putem așeza cifrele pare una lângă alta.",
            " Variante corecte : 23456,23654",
            "Dar nu : 23645, 23546, 23564",
          ],
        },
        {
          key: 3,
          type: 5,
          def: false,
          content: [
            `Răspunsul final`,
            "23456, 23654, 25436, 25436, 25634, 43256, 43652, 45236, 45632, 63254, 63452, 65234 și 65432",
            ,
          ],
        },
        {
          key: 4,
          type: 1,
          content: [
            "Și acum, variantele de probleme întâlnite la bac...            ",
            "Avem trandafiri, lalele, azalee și orhidee. Dacă nu putem avea lalele lângă orhidee, câte buchete de 3 flori putem face?",
            "Hai să le numerotăm !           ",
          ],
        },
        {
          key: 5,
          type: 1,
          content: [
            "trandafir = 1, lalea = 2, azalee = 3, orhidee = 4.            ",
            "Și avem ghivece cu 3 flori, adică numere de 3 cifre.            ",
            "Cu alte cuvinte, reformulând, avem numere de 3 cifre, în care nu putem avea cifra 2 lângă cifra 4.            ",
          ],
        },
        {
          key: 6,
          type: 5,
          def: false,
          content: [
            "Din nou... simplu, nu?            ",
            "132, 134, 142, 143, 231, 234, 241, 243, 314, 324, 341, 342, 413, 423, 431, 432.            ",
          ],
        },
      ]}
    />
  );
}

export default Bac2;
