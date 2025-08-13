"use client";
import React from "react";

const Map = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        className="w-full h-42 rounded-2xl"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7713.9664188188135!2d120.71031536926272!3d14.826200442510478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339650086f75f3eb%3A0x221ba5d32051d60!2sMercado%2C%20Hagonoy%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1754894589874!5m2!1sen!2sph"
      ></iframe>
    </div>
  );
};

export default Map;
