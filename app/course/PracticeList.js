import React from "react";

const PracticeList = ({ courseId }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-white font-bold">Exercitii</h1>
        <p className="text-white text-lg">
          Alege exercitiul pe care vrei sa il rezolvi
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <a
          href={`/course/${courseId}/practice/1`}
          className="bg-zinc-900 text-white text-lg font-bold py-2 px-4 rounded-lg"
        >
          Exercitiul 1
        </a>
      </div>
    </div>
  );
};

export default PracticeList;
