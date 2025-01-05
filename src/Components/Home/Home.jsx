import React from "react";
import img from "../../assets/Screenshot 2025-01-05 190806.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          I am passionate about crafting innovative solutions and building impactful web applications. With a strong foundation in front-end and back-end technologies, I enjoy transforming ideas into digital realities that make a difference. Let us create something amazing together.
        </p>
        <button className="mt-20 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact: 9814923201
        </button>
      </div>
      <div>
        <img className="" src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
