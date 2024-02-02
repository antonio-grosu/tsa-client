"use client";
import { useState } from "react";
import Link from "next/link";

function CourseContent(props) {
  const [shown, setShown] = useState(false);

  return (
    <div className="bg-gray-600/20 md:p-4 p-8 rounded-lg grid grid-cols-1 gap-4 w-full    poppins ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold inline-block w-full text-center">
          Course content
        </h1>
        {!shown && (
          <svg
            className="w-8 h-8 text-gray-800 dark:text-white inline-block cursor-pointer ml-4 p-2 bg-neutral-700/50 rounded-md"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
            onClick={() => setShown(!shown)}
          >
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
        )}
        {shown && (
          <svg
            className="w-8 h-8 text-gray-800 dark:text-white cursor-pointer p-2 bg-neutral-700 rounded-md"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            onClick={() => setShown(!shown)}
          >
            <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z" />
            <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
            <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
          </svg>
        )}
      </div>
      {/* each chapter and its lessons rendered */}
      <div>
        <h3 className="poppins  font-bold text-xl w-full text-center text-lime-300">
          Subiectul I
        </h3>
        {shown &&
          props.lessons
            .filter((lesson) => lesson.id < 8)
            .map((lesson) => (
              <ul className="list-disc list-inside mt-2">
                <Link
                  href={lesson.link ? lesson.link : "/course/bac"}
                  key={lesson.id}
                  className={
                    lesson.id < 4
                      ? "pl-4 text-white hover:text-lime-300 cursor-pointer text-sm mb-2"
                      : "pl-4 text-gray-500 cursor-auto text-sm mb-2"
                  }
                >
                  {!lesson.link && (
                    <svg
                      className="w-4 h-4 text-gray-800 dark:text-gray-500 inline-block mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-3c0-.6.4-1 1-1Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                  {lesson.title}
                </Link>
              </ul>
            ))}
      </div>
      <div className="border-t-2 border-white/20 pt-4">
        <h3 className="poppins  font-bold text-xl w-full text-center text-lime-300">
          Subiectul II
        </h3>
        {shown &&
          props.lessons
            .filter((lesson) => lesson.id > 7 && lesson.id < 18)
            .map((lesson) => (
              <ul className="list-disc list-inside  mt-2">
                <Link
                  href={lesson.link ? lesson.link : "/course/bac"}
                  key={lesson.id}
                  className="pl-4 text-gray-500 cursor-auto text-sm mb-2"
                >
                  {!lesson.link && (
                    <svg
                      className="w-4 h-4 text-gray-800 dark:text-gray-500 inline-block mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-3c0-.6.4-1 1-1Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                  {lesson.title}
                </Link>
              </ul>
            ))}
      </div>
      <div className="border-t-2 border-white/20 pt-4">
        <h3 className="poppins  font-bold text-xl w-full text-center text-lime-300">
          Subiectul III
        </h3>
        {shown &&
          props.lessons
            .filter((lesson) => lesson.id > 17 && lesson.id < 35)
            .map((lesson) => (
              <ul className="list-disc list-inside  mt-2">
                <Link
                  href={lesson.link ? lesson.link : "/course/bac"}
                  key={lesson.id}
                  className="pl-4 text-gray-500 cursor-auto text-sm mb-2"
                >
                  {!lesson.link && (
                    <svg
                      className="w-4 h-4 text-gray-800 dark:text-gray-500 inline-block mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-3c0-.6.4-1 1-1Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                  {lesson.title}
                </Link>
              </ul>
            ))}
      </div>
    </div>
  );
}

export default CourseContent;
