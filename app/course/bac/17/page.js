"use client";

import Highlight from "../../Highlight";
import Link from "next/link";
import TypeLesson from "../../TypeLesson";

function Bac17() {
  return (
    <TypeLesson
      title="Bac 17"
      course="N-am chef de BAC, ce fac?"
      next="18"
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

export default Bac17;
