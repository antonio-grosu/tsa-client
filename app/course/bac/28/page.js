"use client";

import Highlight from "../../Highlight";
import Link from "next/link";
import TypeLesson from "../../TypeLesson";

function Bac28() {
  return (
    <TypeLesson
      title="Bac 28"
      course="N-am chef de BAC, ce fac?"
      next="29"
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

export default Bac28;