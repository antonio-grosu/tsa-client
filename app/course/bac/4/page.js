"use client";

import Highlight from "../../Highlight";
import Link from "next/link";
import TypeLesson from "../../TypeLesson";

function Bac4() {
  return (
    // <div className="w-full mx-auto bg-neutral-950 py-36 min-h-screen px-8">
    //   <h1 className="slide-in underline underline-offset-4 text-4xl text-lime-300 font-bold text-center poppins">
    //     C++ Variabile și Operatori
    //   </h1>
    //   <div className="slide-in flex flex-col poppins gap-16 items-start mx-auto mt-24 md:w-1/2">
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       Nu prea ai cum să iei o notă bună la informatică fără să știi măcar un
    //       fir de cod.
    //     </h3>
    //     <p className="text-white text-sm">
    //       E timpul să ne murdărim mâinile și de puțină programare. Programarea
    //       este, pe scurt, instruirea unui robot, numit compilator, să facă ce îi
    //       zicem noi. Cel cu care lucrăm noi vorbește strict în C++. Când
    //       discutăm cu el, evident în limbajul lui, trebuie să îi oferim 3
    //       lucruri, ca în orice dialog uman:
    //     </p>
    //     <ol className="text-white gap-4 bg-lime-300/20 rounded-md p-8 w-full flex items-center justify-center ">
    //       <div className="list-decimal flex items-start flex-col justify-start font-bold">
    //         <li> Context</li>
    //         <li> Valori</li>
    //         <li> Acțiuni</li>
    //       </div>
    //     </ol>{" "}
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       Sau mai concret: variabile, alături de declararea și citirea /
    //       inițializarea acestora, cât și instrucțiunile / operațiile pe care
    //       vrem să le facă robotul nostru.
    //     </h3>
    //     <p className="text-white text-sm">
    //       Variabilele sunt niște cutii în care putem pune orice, de la numere,
    //       la litere, la cuvinte, la propoziții și nu în ultimul rând, valori de
    //       adevăr.
    //     </p>
    //     <p className="text-white text-sm">
    //       În declararea acestora, ele sunt de 3 feluri:
    //     </p>
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       1. Valori numerice, fie ele <br />
    //     </h3>
    //     <div className="flex items-start justify-start flex-col">
    //       <p className="text-white text-sm">
    //         <span className="font-bold text-lg">Intregi</span> și se declară cu{" "}
    //         <span className="py-1 px-4 fira bg-lime-300/20 font-bold mx-2 rouneded-2xl code ">
    //           int
    //         </span>{" "}
    //         <span className="py-1 px-4 fira bg-lime-300/20 font-bold mx-2 rouneded-2xl code ">
    //           long long
    //         </span>
    //       </p>

    //       <p className="text-white text-sm mt-6">
    //         <span className="font-bold text-lg">Reale</span> și se declară cu și
    //         se declară cu
    //         <span className="py-1 fira  px-4 bg-lime-300/20 font-bold mx-2 rouneded-2xl code ">
    //           float
    //         </span>
    //         sau
    //         <span className="py-1  fira px-4 bg-lime-300/20 font-bold mx-2 rouneded-2xl code ">
    //           double
    //         </span>
    //       </p>
    //       <p className="text-white text-sm mt-6">
    //         <span className="font-bold text-lg">Caractere</span> și se declară
    //         cu
    //         <span className="py-1 px-4 fira bg-lime-300/20 font-bold mx-2 rouneded-2xl code ">
    //           char
    //         </span>
    //       </p>
    //       <p className="text-white text-sm mt-6">
    //         <span className="font-bold text-lg">Valori de Adevar</span> se
    //         declară cu
    //         <span className="py-1 px-4 fira bg-lime-300/20 font-bold mx-2 rouneded-2xl code ">
    //           bool
    //         </span>
    //         și pot avea doar 2 valori, adevărat sau fals.
    //       </p>
    //     </div>
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       OK, ok... Dar ce facem cu ele?
    //     </h3>
    //     <Highlight content="- Algoritmi?" />
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       Da, algoritmi. Nu știi ce sunt algoritmii?"
    //     </h3>
    //     <p className="text-white text-sm">
    //       Uite, hai să-ți dau un exemplu de algoritm:
    //     </p>
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       Când te speli pe dinți, ce faci?
    //     </h3>
    //     <div className="flex items-center justify-center w-full bg-lime-300/10 rounded-md">
    //       <img src="/bac3Illustration.svg" className="w-5/12" />
    //       <ol className="text-white text-sm flex flex-col items-start justify-start gap-2 font-bold">
    //         <li>1. Deschizi robinetul</li>
    //         <li>2. Umezești periuța</li>
    //         <li>3. Aplici pastă de dinți</li>
    //         <li>4. Te speli pe dinți</li>
    //         <li>5. Te clătești</li>
    //         <li>6. Clătești periuța</li>
    //         <li>7. Închizi robinetul</li>
    //       </ol>
    //     </div>
    //     <Highlight content="- Da, dar ce legătură are asta cu programarea?" />
    //     <p className="text-white text-sm">
    //       Un algoritm este o secvență de instrucțiuni care rezolvă o problemă.
    //     </p>
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       În cazul nostru, problema era să ne spălăm pe dinți. Mai sunt 100 de
    //       algoritmi pe care îi folosim zilnic, dar nu ne-am format vederea să îi
    //       vedem așa.
    //     </h3>
    //     <p className="text-sm text-white">
    //       Ia o mică pauză și gândește-te la alți algoritmi pe care îi folosești
    //       uzual. Gata? Hai să continuăm.{" "}
    //     </p>
    //     <p className="text-white text-sm">
    //       Hai acum să vedem cum arată un algoritm în C++ și care sunt pașii pe
    //       care trebuie să îi urmăm pentru a-l scrie.
    //     </p>
    //     <ol className="text-white gap-4 bg-lime-300/20 rounded-md p-8 w-full flex items-center justify-center ">
    //       <div className="text-center flex items-start flex-col justify-start font-bold">
    //         <li>1. Declarăm variabilele de care avem nevoie</li>
    //         <li>2. Citim valorile de care avem nevoie</li>
    //         <li>3. Rezolvăm problema</li>
    //         <li>4. Afișăm rezultatul</li>
    //       </div>
    //     </ol>{" "}
    //     <p className="text-white text-sm">Uite triviala sumă a 2 numere:</p>
    //     <p className="text-whixte text-sm w-full p-4 rounded-md justify-center bg-lime-300/10 text-white fira">
    //       <div className="w-10/12 mx-auto">
    //         {" "}
    //         {`#include <iostream>`} <br />
    //         {`using namespace std; \n \t`} <br />
    //         {`int main () { \n \t \t`} <br />
    //         {`    int a, b, sum; // 1. Declarăm variabilele \n \t \t`} <br />
    //         {`    cin >> a >> b; // 2. Citim valorile \n \t \t`} <br />
    //         {`    sum = a + b; // 3. Rezolvăm problema \n \t \t`} <br />
    //         {`    cout << sum; // 4. Afișăm rezultatul \n \t \t`} <br />
    //         {`    return 0; \n \t`} <br />
    //         {`}`}
    //       </div>
    //     </p>{" "}
    //     <h3 className="text-2xl font-bold text-lime-300">
    //       Ne amintim din prima lecție și ce alte operații putem face cu
    //       variabilele. Îți aduci aminte de adunare, scădere, înmulțire și
    //       împărțire?
    //     </h3>
    //     <p className="text-white text-sm">
    //       Așa cum erau folosite la exercițiul 1, așa se folosesc și aici.
    //     </p>
    //     <Link
    //       href="/course/bac/buy"
    //       className="text-gray-950 font-bold rounded-md  hover:scale-105 hover:shadow-lime-300/50 transition-all hover:shadow-md bg-lime-300 px-4 py-2 mx-auto"
    //     >
    //       Pasul Următor
    //     </Link>
    //   </div>
    // </div>
    <TypeLesson
      title="C++ Variabile & Operatori"
      next="buy"
      course="N-am chef de BAC, ce fac?"
      parts={[
        {
          key: 0,
          type: 1,

          content: [
            "Sa incepem",
            "E timpul să ne murdărim mâinile și de puțină programare. Nu prea ai cum să iei o notă bună la informatică fără să știi măcar un fir de cod.",
            "Programarea este, pe scurt, instruirea unui robot, numit compilator, să facă ce îi zicem noi. Cel cu care lucrăm noi vorbește strict în C/C++. ",
          ],
        },
        {
          key: 1,
          type: 6,

          content: [
            "Poti sa o iei ca pe un dialog cu un robot",
            "Iar atunci când discutăm cu el, evident în limbajul C/C++, trebuie să îi oferim urmatoarele lucruri:",
            "Context (despre ce vorbim), Valori (cu care lucram), Acțiuni (ce se va intampla cu contextul si/sau valorile). Chiar seamana putin cu un dialog, nu?",
          ],
        },
        {
          key: 2,
          type: 1,
          content: [
            "Contextul si valorile",
            "Okay. Cum se folosesc valorile astea?",
            "",
            // "Sau mai concret: variabile, alături de declararea și citirea / inițializarea acestora, cât și instrucțiunile / operațiile pe care vrem să le facă robotul nostru.",
            // "Variabilele sunt niște cutii în care putem pune orice, de la numere, la litere, la cuvinte, la propoziții și nu în ultimul rând, valori de adevăr.",
          ],
        },
        {
          key: 3,
          type: 1,
          content: [
            `Tipuri de date (Partea I)`,
            "Intregi și se declară cu `int` sau `long long`",
            "Reale  și se declară cu `float` sau `double`",
          ],
        },
        {
          key: 4,
          type: 1,
          content: [
            "Tipuri de date (Partea II)",
            "Caractere și se declară cu `char`",
            "Valori de Adevar se declară cu `bool` și pot avea doar 2 valori, adevărat sau fals.            ",
          ],
        },
        {
          key: 5,
          type: 1,
          content: [
            "OK, ok... Dar ce facem cu ele?            ",
            "- Algoritmi?            ",
            "Da, algoritmi. Nu știi ce sunt algoritmii?            ",
          ],
        },
        {
          key: 6,
          type: 3,
          content: [
            "/bac3Illustration.svg",
            "Când te speli pe dinți, ce faci?            ",
          ],
        },
        {
          key: 7,
          type: 1,
          content: [
            "Un exemplu de algoritm:",
            "Deschizi robinetul , Umezești periuța , Aplici pastă de dinți",
            "Te speli pe dinți , Te clătești , Clătești periuța , Închizi robinetul ",
          ],
        },
        {
          key: 8,
          type: 5,
          def: false,
          content: [
            "Un algoritm este o secvență de instrucțiuni care rezolvă o problemă.",
            "În cazul nostru, problema era să ne spălăm pe dinți. Mai sunt 100 de algoritmi pe care îi folosim zilnic, dar nu ne-am format vederea să îi vedem așa.",
          ],
        },
        {
          key: 9,
          type: 1,
          content: [
            "Ia o mică pauză",
            "Gândește-te la alți algoritmi pe care îi folosești uzual.",
            "Gata? Hai să continuăm.",
          ],
        },
        {
          key: 10,
          type: 1,
          content: [
            "Hai acum să vedem cum arată un algoritm în C++ și care sunt pașii pe care trebuie să îi urmăm pentru a-l scrie.",
            "Declarăm variabilele de care avem nevoie ,  Citim valorile de care avem nevoie ",
            "Rezolvăm problema , Afișăm rezultatul ! ",
          ],
        },
        {
          key: 11,
          type: 3,
          code: true,
          content: [
            "/bac3Code.svg",
            "Uite triviala sumă a 2 numere            ",
          ],
        },
        {
          key: 12,
          type: 5,
          def: false,
          content: [
            "Ne amintim din prima lecție și ce alte operații putem face cu variabilele. Îți aduci aminte de adunare, scădere, înmulțire și împărțire?",
            "Așa cum erau folosite la exercițiul 1, așa se folosesc și aici.            ",
          ],
        },
      ]}
    />
  );
}

export default Bac4;
