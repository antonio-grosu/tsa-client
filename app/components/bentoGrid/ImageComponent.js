//

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ImageComponent = ({
  title,
  description,
  dynamicWidth,
  dynamicHeight,
  courseLogo,
  bgColor,
  textColor,
  link,
}) => {
  const [style, setStyle] = useState({ display: "none" });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Link href={link} onClick={scrollToTop}>
      <div
        className={`flex flex-col border-2 rounded-lg justify-center content-fit w-fit h-fit ml-5 p-3 shadow-lg ${bgColor} ${textColor}`}
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <Image
          src={courseLogo}
          alt="image"
          width={dynamicWidth}
          height={dynamicHeight}
        />
        <h1>{title}</h1>
        <p style={style}>{description}</p>
      </div>
    </Link>
  );
};

export default ImageComponent;
