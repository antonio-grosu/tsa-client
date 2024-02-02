import React from "react";

const Exercise = ({ exercise }) => {
  return (
    <div className="p-4 border-y-2 boder-x-0 border-white w-full  poppins py-9 ">
      <h1 className="text-2xl md:text-4xl font-bold p-2 w-full text-center text-white  ">
        {exercise.question}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4 fira">
        <div className="p-2 bg-lime-300/10 text-center rounded-sm hover:scale-105 cursor-pointer hover:bg-lime-300/60 transition-all">
          <p className="text-xl  text-white">{exercise.answer1}</p>
        </div>
        <div className="p-2 bg-lime-300/10 text-center rounded-sm hover:scale-105 cursor-pointer hover:bg-lime-300/60 transition-all">
          <p className="text-xl  text-white">{exercise.answer2}</p>
        </div>
        <div className="p-2 bg-lime-300/10 text-center rounded-sm hover:scale-105 cursor-pointer hover:bg-lime-300/80">
          <p className="text-xl  text-white">{exercise.answer3}</p>
        </div>
        <div className="p-2 bg-lime-300/10 text-center rounded-sm hover:scale-105 cursor-pointer hover:bg-lime-300/60 transition-all">
          <p className="text-xl  text-white">{exercise.answer4}</p>
        </div>
      </div>
      {/* <p className='w-full p-2 text-lg font-semibold bg-green-300 text-gray-950'>{exercise.correctAnswer}</p> */}
      {/* <p className='w-full p-2 text-lg font-semibold bg-green-300 text-gray-950'>{exercise.explanation}</p>
            <p className='w-full p-2 text-lg font-semibold bg-yellow-300 text-gray-950'>{exercise.hint}</p> */}
    </div>
  );
};

export default Exercise;
