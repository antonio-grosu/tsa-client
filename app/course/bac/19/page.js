"use client";

import Highlight from "../../Highlight";
import Link from "next/link";
import TypeLesson from "../../TypeLesson";

function Bac19() {
  return (
    <TypeLesson
      title="Bac 19"
      course="N-am chef de BAC, ce fac?"
      next="20"
      parts={[
        {
          key: 0,
          type: 1,

          content: [
            "Coming soon",
            "Thank you for choosing to participate in our online courses",
            "We promise to give you a new lesson asap.",
          ],
        },
      ]}
    />
  );
}

export default Bac19;
