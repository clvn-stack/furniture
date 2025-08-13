"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Data = {
  id: number;
  text: string;
  bg: string;
};

interface DataProps {
  slideData: Data[];
  onActiveData: (data: Data) => void;
}

const Carousel = ({ slideData, onActiveData }: DataProps) => {
  const items = slideData;

  const VISIBLE_COUNT = 4;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VISIBLE_COUNT);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const activeItem = items[activeIndex];
    onActiveData(activeItem);
  }, [activeIndex, items, onActiveData]);

  const visibleItems = items.slice(0, VISIBLE_COUNT);

  return (
    <div className="max-w-[1200px] mx-auto px-2 lg:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-6 min-h-[200px]">
        {visibleItems.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={item.id}
              className={`col-span-1 h-[160px] items-center justify-center text-white text-xl font-bold transition-all duration-300 ${
                isActive ? "lg:-translate-y-4" : ""
              }`}
            >
              <Image
                width="388"
                height="296"
                className="w-full h-full rounded-2xl"
                src={`/images/${item.bg}.jpg`}
                alt={item.bg}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
