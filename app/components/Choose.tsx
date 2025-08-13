import React from "react";
import Image from "next/image";

const Choose = () => {
  const whycard = [
    {
      id: "1",
      title: "Reliable Quality",
      desc: "We prioritize top-notch materials and craftsmanship to ensure every product exceeds your expectations.",
    },
    {
      id: "2",
      title: "Exceptional Service",
      desc: "Our friendly and responsive team is here to support you every step of the way.",
    },
    {
      id: "3",
      title: "Swift Delivery",
      desc: "Get your orders quickly and safely, right to your doorstep.",
    },
    {
      id: "4",
      title: "Satisfaction Guaranteed",
      desc: "We stand behind our products with a hassle-free return and refund policy.",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto rounded-4xl">
      <div className="flex justify-center text-center">
        <span className="font-bold text-xl text-gray-300">Timeless Design</span>
      </div>
      <div className="title flex justify-center max-w-2xl mx-auto text-center pb-4">
        <span className="title text-4xl lg:text-5xl text-[#a9835e] leading-tight font-bold transition-all duration-300 ease-in-out">
          Why Choose Us
        </span>
      </div>

      <div className="flex flex-col gap-4 px-4 pt-4">
        <div className="">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 gap-4">
            {whycard.map((why, index) => (
              <div key={index}>
                <div className="flex flex-col col-span-1 gap-4 px-2 py-4 lg:p-4 lg:text-left justify-start items-center h-full">
                  <div className="group relative w-20 numbering text-4xl italic text-[#a9835e] shadow-lg font-bold p-4 overflow-hidden cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-0 bg-[#a9835e] transition-all duration-500 ease-in-out group-hover:h-full"></div>
                    <span className="relative z-10 text-[#a9835e] group-hover:text-white">
                      0{why.id}
                    </span>
                  </div>

                  <div className="title text-xl text-[#a9835e] font-bold pt-2">
                    {why.title}
                  </div>
                  <div className="desc text-sm text-gray-400 text-center">
                    {why.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-12 p-4">
          {[
            "/images/plant.jpg",
            "/images/whyus.jpg",
            "/images/plant.jpg",
            "/images/bed.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="flex-1 relative overflow-hidden rounded-4xl cursor-pointer group"
            >
              <Image
                src={src}
                alt={src}
                width={300}
                height={200}
                priority
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 bg-opacity-30 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 rounded-4xl"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <p className="text-white text-lg font-semibold drop-shadow-lg">
                  Furniture
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
