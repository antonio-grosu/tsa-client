import React, { useEffect, useState } from "react";

function Level() {
  const [xp, setXp] = useState("");

  useEffect(() => {
    setXp(localStorage.getItem("xp"));
  }, []);

  // algoritm pentru level-ul user-ului in functie de xp cu crestere exponentiala
  // level 1 - above 0xp
  // level 2 - above 100xp
  // level 3 - above 300xp
  // level 4 - above 600xp
  // level 5 - above 1000xp
  // level 6 - above 1500xp
  // level 7 - above 2100xp
  // level 8 - above 2800xp
  // level 9 - above 3600xp
  // level 10 - above 4500xp

  function LevelFromXp() {
    if (xp < 100) return { level: 1, xp: xp };
    if (xp < 300) return { level: 2, xp: xp - 100 };
    if (xp < 600) return { level: 3, xp: xp - 300 };
    if (xp < 1000) return { level: 4, xp: xp - 600 };
    if (xp < 1500) return { level: 5, xp: xp - 1000 };
    if (xp < 2100) return { level: 6, xp: xp - 1500 };
    if (xp < 2800) return { level: 7, xp: xp - 2100 };
    if (xp < 3600) return { level: 8, xp: xp - 2800 };
    if (xp < 4500) return { level: 9, xp: xp - 3600 };
    return { level: 10, xp: xp - 4500 };
  }

  return (
    <div className="flex flex-col text-lime-300 justify-center">
      <h3 className="text-2xl font-bold text-center">
        Nivelul tau este: {LevelFromXp()["level"]}
      </h3>
      <p className="mt-4  w-full text-sm text-center">
        Ai acumulat {LevelFromXp()["xp"]} puncte de experienta
      </p>
    </div>
  );
}

export default Level;
