"use client";

import Highlight from "../../Highlight";
import Link from "next/link";
import Exercise from "../../Exercise";
import { useEffect, useState } from "react";
import TypeLesson from "../../TypeLesson";

function Bac1() {
  return (
    <TypeLesson
      title="Aritmetică și Operatori Logici"
      course="N-am chef de BAC, ce fac?"
      next="3"
      parts={[
        {
          key: 0,
          type: 1,

          content: [
            "Aritmetică: Recapitulare",
            "Aritmetica este matematica din anii primari: adunarea, scăderea, înmulțirea, etc. Da, este extrem de simplu. De exemplu: 2 + 3 = 5, 5 - 3 = 2, 2 * 3 = 6. Și așa mai departe.",
            "Ca sa facem lucrurile mai interesante, putem sa lucram si cu necunoscute (variabile). Avem ecuatia 2 + x = 7, de unde putem deduce usor ca x = 5.",
          ],
        },
        {
          key: 1,
          type: 1,

          content: [
            "Ce poate sa ne pice?",
            "Operatorii logici tot din matematica fac parte, dar nu lucreaza cu numere, ci cu valori de adevar (adevarat sau fals). Sa luam o propozitie: Bacalaureatul are probe scrise si orale - propozitie adevarata. Luam alta propozitie: Programarea nu se face pe calculator - propozitie falsa.",
            "Desi, noi nu lucram cu propozitii deocamdata, lucram cu numere, nu? Hai sa vedem si un exemplu pentru asta: Propozitia 6 < 7 este adevarata. Hai sa intram mai in detaliu:",
          ],
        },
        {
          key: 2,
          type: 6,
          content: [
            "Operatorii de comparație sunt simboluri speciale pe care le folosim când programăm pentru a spune calculatorului să compare două valori",
            "Ca sa ii punem pe hartie, avem: < (mai mic ca), > (mai mare ca), <= (mai mic sau egal cu), >= (mai mare sau egal cu), == (egal cu), != (diferit de).",
            "De exemplu: 2 < 3, 3 > 2, 2 <= 2, 3 >= 3, 2 == 2, 3 != 2.",
          ],
        },
        {
          key: 3,
          type: 4,
          content: [
            "Variabila x este de tip real. Care dintre următoarele expresii C/C++ are valoarea 1 (e adevarata) dacă și numai dacă numărul real memorat în variabila x aparține intervalului (5, 8]?",
            "a. (x<8) && (x>=5)",
            "b. (x<=8) || (x>5)",
            "c. (x>8) || (x<=5)",
            "d. (x<=8) && (x>5)",
            "Cum ar arăta asta în caietul meu de când eram în (școala) primară?",
            "X este mai mare decât 5 și mai mic sau egal cu 8.",
            "d. (x<=8) && (x>5)",
          ],
        },
        {
          key: 4,
          type: 4,
          content: [
            "Care dintre următoarele expresii C/C++ are valoarea 1 dacă şi numai dacă numărul real memorat în variabila x se află în intervalul (-2,2)",
            "a. x * x - 4 <= 0",
            "b. 4 - x * x > 0",
            "c. (2 < x && x < -2)",
            "d. (x - 2) * (x + 2) > 0",
            "* este operatorul de înmulțire, iar && este operatorul și.",
            "Orice numar real ridicat la patrat este pozitiv, iar daca |x| < 2, atunci x patrat este mai mic decat 4.",
            "b. 4 - x * x > 0",
          ],
        },
        {
          key: 5,
          type: 1,
          content: [
            "Deci, pe scurt, acestea sunt comparatiile pe care le putem face in C/C++",
            "In continuare vom lucra mai mult partea teoretica in cursuri, iar exercitiile pentru fixarea cunostintelor le vei gasi in sectiunea respectiva.",
            "Ati vazut in exercitiul anterior operatorul && (si). Acesta este un operator logic. Hai sa vedem mai departe 1. Ce inseamna concret && 2. Ce alti operatori logici mai exista.",
          ],
        },
      ]}
    />
  );
}

export default Bac1;
