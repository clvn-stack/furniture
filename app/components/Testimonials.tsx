"use client";
import React, { useState, useEffect, useRef } from "react";

type Cards = {
  id: number;
  name: string;
  avatar: string;
  message: string;
};

interface CardsProps {
  cards: Cards[];
}

const Testimonials = ({ cards }: CardsProps) => {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [index, setIndex] = useState(cardsPerView);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const extendedCards = [
    ...cards.slice(-cardsPerView),
    ...cards,
    ...cards.slice(0, cardsPerView),
  ];

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      let perView = 3;

      if (width < 768) {
        perView = 1;
      } else if (width >= 768 && width < 1024) {
        perView = 2;
      }

      setCardsPerView(perView);
      setIndex(perView);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = () => {
    if (index >= extendedCards.length - cardsPerView) return;
    setIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!transitionEnabled) return;

    if (index === extendedCards.length - cardsPerView) {
      timeoutRef.current = setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(cardsPerView);
      }, 500);
    }

    if (index === 0) {
      timeoutRef.current = setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(extendedCards.length - 2 * cardsPerView);
      }, 500);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, extendedCards.length, cardsPerView, transitionEnabled]);

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  }, [transitionEnabled]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPaused, index, cardsPerView]);

  return (
    <div
      className="max-w-6xl mx-auto px-4 relative overflow-visible"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex text-center justify-center">
        <div className="text-gray-500 px-4 md:px-14">
          <span className="font-bold text-[#a9835e] text-lg">Discover </span>
          the experiences and feedback from our valued customers. Their stories
          reflect the quality, service, and satisfaction we strive to deliver
          every day. See why people trust us and how we’ve made a difference in
          their lives.
        </div>
      </div>
      <div className="overflow-hidden px-6 py-16">
        <div
          className="flex"
          style={{
            width: `${(extendedCards.length * 100) / cardsPerView}%`,
            transform: `translateX(-${(index * 100) / extendedCards.length}%)`,
            transition: transitionEnabled
              ? "transform 0.5s ease-in-out"
              : "none",
          }}
        >
          {extendedCards.map((card, i) => (
            <div
              key={`${card.id}-${i}`}
              className="flex-none px-4"
              style={{ width: `${100 / extendedCards.length}%` }}
            >
              <div
                className="bg-white rounded-lg text-center font-bold p-6 h-full"
                style={{
                  boxShadow:
                    "0 10px 20px rgba(0,0,0,0.05), 0 -10px 20px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex flex-col gap-2 justify-center items-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-18">
                      <img src={card.avatar} />
                    </div>
                  </div>
                  <div className="text-md text-black">{card.name}</div>
                  <div className="text-gray-400 text-sm font-normal italic">
                    {`"${card.message}"`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
