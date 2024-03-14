"use client";

import Highlight from "../../Highlight";
import Link from "next/link";
import TypeLesson from "../../TypeLesson";

function Bac0() {
  return (
    <TypeLesson
      title="Introducere"
      course="N-am chef de BAC, ce fac?"
      next="2"
      parts={[
        {
          key: 0,
          type: 1,

          content: [
            "Introducere",
            "Bine ai venit la cursul de BAC. Prima lecție va fi despre cum poți folosi acest curs pentru a-ți atinge potențialul maxim și a lua nota 10 (zece) la examenul de Bacalaureat",
            "Vei găsi informații, teorie explicată, exerciții rezolvate și multe altele. Pentru a trece la următoarea parte a lecției, apasă butonul de mai jos.",
          ],
        },
        {
          key: 1,
          type: 1,

          content: [
            "Ce ar trebui să stiu / să fac pentru a lua BAC-ul?",
            "Încearcă să urmăreșți cât de atent poți acest curs. La finalul fiecărei lecții vei avea câteva exerciții pentru a-ți testa cunoștiințele dobândite. Dacă nu înțelegi ceva, te rugăm, nu ezita să revii la începutul lecției (folosește bara de progres sau butonul de back / săgeată stânga) pentru a putea reciti părțile dificile ale cursului.",
            "De asemenea, în curând, vei putea să pui întrebări pe forumul nostru și să primești răspunsuri de la câțiva colegi sau chiar de la profesorii noștri acreditați de The Software Academy.",
          ],
        },
        {
          key: 2,
          type: 1,
          content: [
            "Ce primesc la schimb?",
            "Stai. Pe lângă cunoștinte, mai primesc și altceva? Logic. Doar nu învățăm informatică strict pentru un examen, nu? Și chiar și așa, cine știe, poate-ți vei dori până la finalul cursului să fii și tu un stimat programmer.",
            "La finalul fiecărei lecții vei colecta XP (puncte de experiență) care te vor ajuta să avansezi în clasamentul nostru. Alături de asta, pe profilul tău vei avea și badge-uri ce vor reprezenta realizările tale în învățarea informaticii. Apoi... cu fiecare nivel, vei primi și alte beneficii... dar, mai avem până acolo. O ultimă chestie și lăsăm...",
          ],
        },
        {
          key: 3,
          type: 1,
          content: [
            "Cum vei putea, drag student, să parcurgi toate lecțiile și să înveți cât mai eficient?",
            "Structura pe lecții este făcută pe baza exercițiilor pe care le poți întâlni la examenul de bacalaureat. Pentru a lua o notă cât mai mare, va fi mai simplu să învățăm subiectele I și II, să împușcăm nota 7, și după, pentru a ajunge mai departe, trecem subiectul III.",
            "Primele 2 capitole vor face întocmai asta, deci hai să începem cu Subiectul I: Lecția 1. Aritmetică și Operatori Liniari.",
          ],
        },
      ]}
    />
  );
}

export default Bac0;
