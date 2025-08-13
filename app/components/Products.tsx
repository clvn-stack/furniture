"use client";
import React, { useState } from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { ImageProps } from "next/image";

interface MotionImageProps extends ImageProps {
  animateProps?: MotionProps["animate"];
  transitionProps?: MotionProps["transition"];
  onAnimationComplete?: () => void;
  alt: string;
}

export const MotionImage: React.FC<MotionImageProps> = ({
  animateProps,
  transitionProps,
  onAnimationComplete,
  alt,
  ...imgProps
}) => (
  <motion.div
    animate={animateProps}
    transition={transitionProps}
    onAnimationComplete={onAnimationComplete}
  >
    <Image {...imgProps} alt={alt} />
  </motion.div>
);
MotionImage.displayName = "MotionImage";

// Product types
type ProductsDesc = {
  id: number;
  name: string;
  img: string;
  desc: string;
  category: string;
  material: string;
  finish: string;
  weight: number;
  capacity: number;
  durability: string;
  style: { stylename: string }[];
};

interface ProductProps {
  prod: ProductsDesc[];
}

const Products: React.FC<ProductProps> = ({ prod }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const durability = parseInt(prod[activeIndex].durability);

  if (!prod || prod.length === 0) {
    return (
      <div className="text-center text-gray-500">No products available.</div>
    );
  }

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % prod.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + prod.length) % prod.length);
  };

  return (
    <div>
      <div className="flex justify-center text-center">
        <span className="font-bold text-xl text-gray-300">What we Offer</span>
      </div>
      <div className="title flex justify-center max-w-2xl mx-auto text-center pb-1 md:pb-10">
        <span className="title text-4xl lg:text-5xl text-[#a9835e] leading-tight font-bold transition-all duration-300 ease-in-out">
          Curated Selection
        </span>
      </div>

      <div className="max-w-xl lg:max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="p-4 w-full">
            <div className="w-full lg:w-[420px] max-w-xl mx-auto px-4 py-12">
              <div className="relative w-full h-74 flex items-center justify-center rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <MotionImage
                    key={prod[activeIndex].id}
                    src={`/images/${prod[activeIndex].img}.png`}
                    alt={prod[activeIndex].name || "Product image"}
                    animateProps={{ opacity: [0, 1], scale: [0.95, 1] }}
                    transitionProps={{ duration: 0.3 }}
                    onAnimationComplete={() => setIsAnimating(false)}
                    className="w-full h-full object-contain"
                    width={420}
                    height={256}
                  />
                </AnimatePresence>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handlePrev}
                className="bg-[#a9835e] p-2 rounded-full shadow hover:scale-105 transition"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="bg-[#a9835e] p-2 rounded-full shadow hover:scale-105 transition"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          <div className="p-4 w-full">
            <div className="flex flex-col gap-2">
              <div className="title font-bold text-3xl text-[#a9835e] capitalize">
                {prod[activeIndex].name}
              </div>
              <div className="category text-md font-bold text-[#a9835e]">
                <div className="progress w-full md:w-60 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-warning h-full transition-all duration-700 ease-in-out"
                    style={{ width: `${durability}%` }}
                  ></div>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mt-1">
                    Rated {durability}/100 for long-term use
                  </span>
                </div>
              </div>
              <div className="text-sm leading-tight text-gray-400 pt-4 pb-6">
                {prod[activeIndex].desc}
              </div>

              <div className="category text-md font-bold text-[#a9835e] capitalize">
                Category:{" "}
                <span className="text-gray-400 font-normal">
                  {prod[activeIndex].category}
                </span>
              </div>
              <div className="category text-md font-bold text-[#a9835e]">
                Weight:{" "}
                <span className="text-gray-400 font-normal">
                  {prod[activeIndex].weight}kg
                </span>
              </div>
              <div className="category text-md font-bold text-[#a9835e]">
                Capacity:{" "}
                <span className="font-normal p-2 text-gray-400 text-md">
                  {prod[activeIndex].capacity}
                </span>
              </div>
              <div className="category text-md font-bold text-[#a9835e]">
                Style:{" "}
                <span className="font-normal p-2 text-gray-400 text-md capitalize">
                  {prod[activeIndex].style.map((s) => s.stylename).join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Products.displayName = "Products";
export default Products;
