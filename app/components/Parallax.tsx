"use client";
import React, { useEffect, useRef } from "react";

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const Parallax = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const speed = 0.3;

    const update = () => {
      if (!containerRef.current || !bgRef.current) return;

      const containerBounds = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const offsetTop = containerBounds.top;

      if (offsetTop < windowHeight && offsetTop > -containerBounds.height) {
        // Calculate the max shift possible without showing edges
        const maxShift =
          (bgRef.current.offsetHeight - containerRef.current.offsetHeight) / 2;

        // Calculate raw parallax offset
        const rawYPos = -offsetTop * speed;

        // Clamp the parallax offset to maxShift boundaries
        const yPos = clamp(rawYPos, -maxShift, maxShift);

        // Apply the transform
        bgRef.current.style.transform = `translateY(${yPos}px)`;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative max-w-[1400px] mx-auto w-full rounded-4xl overflow-hidden bg-black"
      style={{ height: "540px" }}
    >
      <div
        ref={bgRef}
        className="bg-black/40 bg-blend-darken pointer-events-none"
        style={{
          backgroundImage: `url('/images/sala.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          willChange: "transform",
          transform: "translateY(0)",
          minWidth: "100%",
          height: "170%",
          top: "-35%",
          left: 0,
          right: 0,
          position: "absolute",
          scale: 1.05,
          transformOrigin: "center center",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg leading-tight">
            What Our Customer Says
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Real voices. Real experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
