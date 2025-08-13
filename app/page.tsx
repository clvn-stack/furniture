"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import data from "./utils/data.json";
import products from "./utils/products.json";
import testi from "./utils/testimonials.json";
import Aboutus from "./components/Aboutus";
import Products from "./components/Products";
import Parallax from "./components/Parallax";
import Testimonials from "./components/Testimonials";
import Choose from "./components/Choose";

type Data = {
  id: number;
  text: string;
  bg: string;
};

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      staggerDirection: -1,
    },
  },
};

const sectionVariants: Variants = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<string>("hero");

  const handleSelectProduct = (data: Data) => {
    setSelectedProduct(data.bg);
  };
  const newImg = selectedProduct;

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.section id="home" className="px-4" variants={sectionVariants}>
        <Hero setImg={newImg} />
      </motion.section>

      <motion.main
        className="flex items-center justify-center px-8 lg:px-4 py-18"
        variants={sectionVariants}
      >
        <Carousel slideData={data} onActiveData={handleSelectProduct} />
      </motion.main>

      <motion.section
        id="aboutus"
        className="px-4 pb-18"
        variants={sectionVariants}
      >
        <Aboutus />
      </motion.section>

      <motion.section
        id="products"
        className="px-4 pb-18"
        variants={sectionVariants}
      >
        <Products prod={products} />
      </motion.section>

      <motion.section
        id="testimonials"
        className="px-4 pb-18"
        variants={sectionVariants}
      >
        <Parallax />
      </motion.section>

      <motion.section className="px-4 pb-18" variants={sectionVariants}>
        <Testimonials cards={testi} />
      </motion.section>

      <motion.section
        id="whychoose"
        className="px-4 pb-18"
        variants={sectionVariants}
      >
        <Choose />
      </motion.section>
    </motion.div>
  );
}
