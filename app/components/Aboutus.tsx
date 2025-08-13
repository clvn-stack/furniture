"use client";
import React from "react";
import { motion, MotionProps } from "framer-motion";
import Image, { ImageProps } from "next/image";

// MotionImage wrapper using motion.div
interface MotionImageProps extends ImageProps {
  animateProps?: MotionProps["animate"];
  transitionProps?: MotionProps["transition"];
  alt: string; // explicitly require alt
}

export const MotionImage: React.FC<MotionImageProps> = ({
  animateProps,
  transitionProps,
  alt,
  ...imgProps
}) => {
  return (
    <motion.div animate={animateProps} transition={transitionProps}>
      <Image {...imgProps} alt={alt} />
    </motion.div>
  );
};
MotionImage.displayName = "MotionImage";

// Aboutus component
const Aboutus: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center text-center">
        <span className="font-bold text-xl text-gray-300">Who We Are</span>
      </div>

      <div className="title flex justify-center max-w-2xl mx-auto text-center">
        <span className="title text-3xl lg:text-5xl text-[#a9835e] leading-tight font-bold transition-all duration-300 ease-in-out">
          We are built on simplicity
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 text-center py-8 px-2 md:px-8">
        {/* Left image */}
        <div className="col-span-1 lg:flex justify-center hidden">
          <MotionImage
            className="w-[280px] h-full rounded-4xl"
            width={280}
            height={420}
            src="/images/bed.jpg"
            alt="Bed Furniture"
            animateProps={{ y: [0, -10, 0] }}
            transitionProps={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Center text */}
        <div className="col-span-1">
          <div className="px-4 pb-12 lg:py-6 text-md text-gray-500">
            We are a modern furnishing brand focused{" "}
            <span className="text-[#a9835e] font-bold">simplicity</span>,
            functionality, and timeless design. Our mission is to make living
            spaces feel intentional and effortless—offering clean, minimalist
            pieces that blend seamlessly into everyday life.
            <br />
            <br />
            We believe that a well-designed space can bring clarity and calm.
            That&apos;s why we prioritize honest materials, clean lines, and
            thoughtful craftsmanship in every piece we make. Our goal is to
            simplify your space—so you can focus on what truly matters.
          </div>
        </div>

        {/* Right images */}
        <div className="col-span-1 flex justify-center">
          <div className="flex flex-col md:flex-row gap-8">
            <MotionImage
              className="w-[280px] rounded-4xl flex lg:hidden"
              width={280}
              height={420}
              src="/images/bed.jpg"
              alt="Bed Furniture"
              animateProps={{ y: [0, -10, 0] }}
              transitionProps={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <MotionImage
              className="w-[280px] rounded-4xl"
              width={280}
              height={420}
              src="/images/plant.jpg"
              alt="Plant Furniture"
              animateProps={{ y: [0, -10, 0] }}
              transitionProps={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Aboutus.displayName = "Aboutus";
export default Aboutus;
