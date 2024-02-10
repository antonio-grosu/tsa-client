"use client";
import Lesson from "../../TypeLesson";
import { useState } from "react";
const lesson = {
  parts: [
    {
      key: 1,
      type: 1,

      content: [
        "Titlul lectiei",
        "Termeni grei, știu, dar cu o explicație mult mai simplă. Ei de fapt reprezintă operații simple de matematică, cum ar fi adunarea, scăderea, înmulțirea și împărțirea. În cazul operatorilor liniari, se adaugă și împărțirea cu rest.",
      ],
    },
    {
      key: 2,
      type: 2,

      content: [
        "/bac.svg",
        "Termeni grei, știu, dar cu o explicație mult mai simplă. Ei de fapt reprezintă operații simple de matematică, cum ar fi adunarea, scăderea, înmulțirea și împărțirea. În cazul operatorilor liniari, se adaugă și împărțirea cu rest.",
      ],
    },
    {
      key: 3,
      type: 3,

      content: [
        "/bac.svg",
        "Termeni grei, știu, dar cu o explicație mult mai simplă. Ei de fapt reprezintă operații simple de matematică, cum ar fi adunarea, scăderea, înmulțirea și împărțirea. În cazul operatorilor liniari, se adaugă și împărțirea cu rest.",
      ],
    },
    {
      key: 4,
      type: 4,

      content: [
        "INTREBARE",
        "Raspuns 1",
        "Raspuns 2",
        "Raspuns 3",
        "Raspuns 4",
        "Hint",
        "Explicatie",
        "Raspuns 1",
      ],
    },
    {
      key: 5,
      type: 5,

      content: [
        "Titlul lectiei",
        "Termeni grei, știu, dar cu o explicație mult mai simplă. Ei de fapt reprezintă operații simple de matematică, cum ar fi adunarea, scăderea, înmulțirea și împărțirea. În cazul operatorilor liniari, se adaugă și împărțirea cu rest.",
      ],
    },
  ],
  noParts: 5,
};
function Bac4() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Lesson type={lesson.parts[4].type} content={lesson.parts[4].content} />
    </div>
  );
}

export default Bac4;
