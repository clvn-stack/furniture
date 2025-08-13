import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Furniture Site",
  description:
    "Discover high-quality, stylish furniture crafted to transform your home. Explore our wide range of modern and classic pieces designed for comfort, durability, and elegance. Shop now for sofas, dining sets, bedroom essentials, and more — delivered right to your doorstep.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body
        className={`antialiased w-full max-w-[1520px] mx-auto ${montserrat.variable} font-montserrat`}
      >
        <Header />
        {children}
        <section id="contact">
          <Footer />
        </section>
      </body>
    </html>
  );
}
