import React, { useState } from "react";
import PracticeList from "./PracticeList";
/**
 * Renders the Exercise Menu component.
 * @returns {JSX.Element} The Exercise Menu component.
 */
import { useParams } from "react-router-dom";

const ExerciseMenu = () => {
  const { courseId } = useParams();

  return (
    <div className="bg-zinc-900 h-screen flex flex-col gap-8 items-center justify-center py-24 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72">
      <PracticeList courseId={courseId} />
    </div>
  );
};

export default ExerciseMenu;
