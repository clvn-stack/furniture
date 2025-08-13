import React from "react";
import Form from "./Form";
import Map from "./Map";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYelp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="py-6 max-w-6xl mx-auto">
      <div className="flex justify-center text-center">
        <span className="font-bold text-xl text-gray-300">Contact Us</span>
      </div>
      <div className="title flex justify-center max-w-2xl mx-auto text-center pb-4">
        <span className="title text-3xl lg:text-5xl text-[#a9835e] leading-tight font-bold transition-all duration-300 ease-in-out">
          Reach Out
        </span>
      </div>
      <div className="desc text-sm text-gray-500 text-center px-6 pb-8 lg:px-12">
        <span>
          Whether you have questions, feedback, or need assistance, our team is
          ready to listen. Fill out the form below or reach out through our
          provided contact details, and we’ll get back to you as soon as
          possible. Your inquiries matter to us, and we’re committed to
          providing prompt, friendly, and helpful responses.
        </span>
      </div>
      <div>
        <div className="flex justify-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#a9835e] rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white"
          >
            <FaFacebookF className="text-lg" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#a9835e] rounded-full transition-all duration-300 hover:bg-sky-500 hover:text-white"
          >
            <FaTwitter className="text-lg" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#a9835e] rounded-full transition-all duration-300 hover:bg-pink-500 hover:text-white"
          >
            <FaInstagram className="text-lg" />
          </a>

          <a
            href="https://yelp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#a9835e] rounded-full transition-all duration-300 hover:bg-red-600 hover:text-white"
          >
            <FaYelp className="text-lg" />
          </a>
        </div>
      </div>

      {/* section starts here */}

      <div className="flex flex-col lg:flex-row px-8 py-6 lg:py-18 gap-8">
        <div className="lg:basis-1/2">
          <Form />
        </div>
        <div className="lg:basis-1/2 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-[#a9835e] text-2xl" />
            <span>Hagonoy, Bulacan</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaMobileAlt className="text-[#a9835e] text-2xl" />
            <span>+63 912 345 6789</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className="text-[#a9835e] text-2xl" />
            <span className="text-gray-500">calvin@example.com</span>
          </div>
          <div className="flex flex-col justify-end items-end">
            <Map />
          </div>
        </div>
      </div>

      <div className="foo py-8 px-8">
        <div className="flex justify-center items-center">
          <div className="">
            <div className="">
              <p className="text-center text-sm text-gray-400">
                © {new Date().getFullYear()} theFurniture Template. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
