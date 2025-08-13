"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const menuSections = ["aboutus", "testimonials", "products", "whychoose"];

    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);

      let currentSection = "";

      menuSections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const menuItem = [
    { tag: "who we are", anch: "aboutus" },
    { tag: "our products", anch: "products" },
    { tag: "client stories", anch: "testimonials" },
    { tag: "why choose us", anch: "whychoose" },
  ];

  return (
    <div
      className={`sticky top-0 z-50 mx-6 pt-2 transition-transform duration-500 ease-in-out`}
      style={{
        transform: isSticky ? "translateY(-24px)" : "",
      }}
    >
      <AnimatePresence>
        <motion.div
          initial={{ y: -110 }}
          animate={{ y: 0 }}
          exit={{ y: -170 }}
          transition={{ duration: 2 }}
          className="flex justify-between bg-white rounded-4xl max-w-6xl mx-auto shadow-[0_0_10px_rgba(0,0,0,0.2)] py-2 md:py-4 px-6 lg:px-8 relative translate-y-8"
        >
          <div className="flex items-center">
            <a href="#home">
              <Image
                className="w-38 h-auto"
                src="/images/fur-logo.png"
                alt="Furniture Logo"
                style={{ height: "auto" }}
                width={144}
                height={16}
                priority
              />
            </a>
          </div>

          <div className="menuList hidden lg:flex items-center">
            <ul className="flex gap-6 text-black text-sm items-center justify-center cursor-pointer">
              {menuItem.map((item, index) => (
                <li
                  key={index}
                  className={`transition hover:text-[#83603d] capitalize ${
                    activeSection === item.anch ? "text-[#83603d]" : ""
                  }`}
                >
                  <a href={`#${item.anch}`}>{item.tag}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex">
            <button className="bg-[#d1b496] px-4 py-2 text-sm text-white rounded-xl active:bg-black/70 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
              Contact us
            </button>
          </div>

          <div className="flex lg:hidden items-center">
            <Hamburger
              size={20}
              toggled={isOpen}
              toggle={setIsOpen}
              color="#83603d"
            />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full bg-white rounded-xl shadow-md mt-2 z-50 px-4 py-4 lg:hidden flex flex-col gap-4 text-sm text-black"
              >
                {menuItem.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.anch}`}
                    className={`hover:text-[#83603d] ${
                      activeSection === item.anch ? "text-[#83603d]" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.tag}
                  </a>
                ))}
                <button className="bg-[#d1b496] text-white px-4 py-2 rounded-lg mt-2 active:bg-black/70 w-full">
                  Contact us
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Header;
