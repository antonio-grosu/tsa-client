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
            "Operatorii de comparație sunt simboluri speciale pe care le folosim când programăm pentru a spune calculatorului să compare două valori ",
            "și să ne spună dacă ele sunt la fel sau diferite, sau dacă unul este mai mare sau mai mic decât celălalt",
            "5 > 6 este fals.",
          ],
        },
        {
          key: 3,
          type: 1,
          content: [
            `În cazul operatorilor de comparație, se adaugă și operatorii logici, cum ar fi  &&, || ,!`,
            "Aceștia se folosesc pentru a combina două valori adevărate sau false, iar rezultatul va fi adevărat sau fals.",
            "|| înseamnă sau, && înseamnă și, iar ! înseamnă nu / not sau opusul.",
          ],
        },
        {
          key: 4,
          type: 1,
          content: [
            `Operațiile de bază sunt adunarea, scăderea, înmulțirea și împărțirea, dar și atribuirea.`,
            "a = 2 + 3  ; b = 3 - 1 ;  ",
            "a = 3 * 8 ;   b = 25 / 5 ;   a = b ;",
          ],
        },
        {
          key: 5,
          type: 1,
          content: [
            "Cum rezolv acest exercițiu la BAC?",
            `Ei bine, în primul rând trebuie să citești cu atenție enunțul. Dacă nu înțelegi ceva, citește-l din nou. Dacă nu înțelegi nimic, citește-l iar din nou. După asta, totul este simplu. Matematica de clasa a 3-a. Cel mai simplu este să-ți pui întrebarea, "cum ar arăta asta în caietul meu de când eram în (școala) primară?"`,
            `Și încă ceva, uneori, este cel mai bine să iau fiecare variantă și să o verific. Totuși, lucrăm cu grile => răspunsul este acolo, trebuie doar să-l găsim.`,
          ],
        },
        {
          key: 6,
          type: 4,
          content: [
            "Variabila x este de tip real. Care dintre următoarele expresii C/C++ are valoarea 1 dacă și numai dacă numărul real memorat în variabila x aparține intervalului(5, 8]?",
            "a. (x<8) && (x>=5)",
            "b. (x<=8) || (x>5)",
            "c. (x>8) || (x<=5)",
            "d. (x<=8) && (x>5)",
            "Cum ar arăta asta în caietul meu de când eram în (școala) primară?",
            "X este mai mare decât 5 și mai mic sau egal cu 8.",
            "d. (x<=8) && (x>5)",
          ],
        },
      ]}
    />
  );
}

export default Bac1;
