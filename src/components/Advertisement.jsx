import React from "react";
import logo from "../assets/image 2.png";
import author from "../assets/Avatar (7).png";

const Advertisement = () => {
  return (
    <div className="bg-[#F0FAF7]  px-[80px] py-[96px]">
      <div className="container py-3 text-center text-black flex flex-col justify-center items-center">
        <img src={logo} alt="" />
        <h2 className="py-8 text-5xl font-medium">
          Courses was fantastic! It is Master platform for those looking to
          start a new career, or need a refresher.
        </h2>
        <div className="flex flex-col items-center">
          <img
            src={author}
            className="object-cover block rounded-full"
            alt=""
          />
          <h3 className="mt-4 mb-1 text-[18px] font-medium">Jacob Jones</h3>
          <span className="text-[#667085]">Student, National University</span>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
