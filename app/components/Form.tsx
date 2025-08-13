"use client";
import React, { useCallback, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted:", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
    },
    [name, email, message]
  );

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-[#a9835e] rounded-xl bg-gray-300/0 placeholder-[#a9835e] text-[#a9835e] focus:outline-none focus:scale-102 transition duration-300 ease-in-out"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-[#a9835e] rounded-xl bg-gray-300/0 placeholder-[#a9835e] text-[#a9835e] focus:outline-none focus:scale-102 transition duration-300 ease-in-out"
          />
        </div>

        <div>
          <textarea
            value={message}
            placeholder="Message ..."
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={8}
            className="w-full mt-1 p-2 border border-[#a9835e] rounded-xl bg-gray-300/0 placeholder-[#a9835e] text-[#a9835e] focus:outline-none focus:scale-102 transition duration-300 ease-in-out"
          />
        </div>

        <button
          type="submit"
          className="w-28 bg-[#a9835e] text-white border border-[#a9835e]/0 text-md py-2 rounded-xl hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out hover:scale-105"
        >
          Send Now
        </button>
      </form>
    </div>
  );
};

export default Form;
