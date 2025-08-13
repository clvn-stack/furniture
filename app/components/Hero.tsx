"use client";
import React, { useEffect, useState } from "react";

interface setImgProps {
  setImg: string;
}

const Hero = ({ setImg }: setImgProps) => {
  const [bgImage, setBgImage] = useState(setImg);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (setImg === bgImage) return;

    const img = new Image();
    img.src = `/images/${setImg}.jpg`;

    img.onload = () => {
      setIsTransitioning(true);

      setTimeout(() => {
        setBgImage(setImg);
        setIsTransitioning(false);
      }, 150);
    };
  }, [setImg, bgImage]);

  return (
    <div className="relative max-w-[1400px] mx-auto h-[580px] w-full rounded-4xl overflow-hidden">
      <div
        className={`
          absolute inset-0 bg-cover bg-bottom bg-black/40 bg-blend-darken
          transition-all duration-300 ease-in-out
          ${isTransitioning ? "opacity-0 blur-md" : "opacity-100 blur-0"}
        `}
        style={{
          backgroundImage: `url('/images/${bgImage}.jpg')`,
        }}
      />

      <div className="relative z-10 flex p-4 h-full">
        <div className="flex flex-col md:flex-row md:items-end justify-end px-2 lg:px-4 xl:px-22 pb-4 w-full">
          <div className="md:basis-2/3 capitalize font-normal text-[1.8rem] lg:text-[2.5rem] leading-tight text-white">
            bringing{" "}
            <span className="text-[#e2d6c8] font-bold capitalize">
              Simplicity
            </span>
            <br />
            in the furnishing market
          </div>
          <div className="md:basis-1/3 text-sm text-white leading-tight py-2">
            <span>
              Bringing simplicity to the furnishing market by offering clean,
              functional, and timeless pieces designed to elevate everyday
              living without the clutter.
            </span>
            <br />
            <button className="bg-white text-[#a9835e] font-bold md:text-sm p-2 w-60 rounded-xl cursor-pointer mt-3 active:opacity-90 hover:scale-105 transition-all duration-300 ease-in-out">
              Start your furnishing journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
