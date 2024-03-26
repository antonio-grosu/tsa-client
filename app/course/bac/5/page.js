"use client";
import Lesson from "../../TypeLesson";

function Bac5() {
  return (
    <Lesson
      title="Lectia 4"
      course="N-am chef de BAC, ce fac?"
      parts={[
        {
          key: 0,
          type: 1,

          content: [
            "Titlul lectiei",
            "Termeni grei, știu, dar cu o explicație mult mai simplă. Ei de fapt reprezintă operații simple de matematică, cum ar fi adunarea, scăderea, înmulțirea și împărțirea. În cazul operatorilor liniari, se adaugă și împărțirea cu rest.",
            `Cum era aia... "Nu știu ce e aia împărțire cu rest, dar știu că era simplă"? Ei bine, nu e chiar așa de simplă, dar nici foarte grea.`,
          ],
        },
        {
          key: 1,
          type: 2,

          content: [
            "/bac.svg",
            "Termeni grei, știu, dar cu o explicație mult mai simplă. Ei de fapt reprezintă operații simple de matematică, cum ar fi adunarea, scăderea, înmulțirea și împărțirea. În cazul operatorilor liniari, se adaugă și împărțirea cu rest.",
          ],
        },
        {
          key: 2,
          type: 3,

          content: [
            "/bac.svg",
            "Termeni grei, știu, dar cu o explicație mult mai simplă. Ei de fapt reprezintă operații simple de matematică, cum ar fi adunarea, scăderea, înmulțirea și împărțirea. În cazul operatorilor liniari, se adaugă și împărțirea cu rest.",
          ],
        },
        {
          key: 3,
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
          key: 4,
          type: 5,

          content: [
            "Titlul lectiei",
            "Termeni grei, știu, dar cu o explicație mult mai simplă. Ei de fapt reprezintă operații simple de matematică, cum ar fi adunarea, scăderea, înmulțirea și împărțirea. În cazul operatorilor liniari, se adaugă și împărțirea cu rest.",
          ],
        },
      ]}
    />
  );
}

export default Bac5;
