import React from "react";

const Advertisement = () => {
  return (
    <div className="container text-center text-black flex flex-col justify-center items-center px-[80px] py-[96px]">
      <img src="https://picsum.photos/80/72" alt="" />
      <h2 className="my-8 text-5xl font-medium">
        Courses was fantastic! It is Master platform for those looking to start
        a new career, or need a refresher.
      </h2>
      <div className="flex flex-col items-center">
        <img
          src="https://picsum.photos/64/64"
          className="object-cover block rounded-full"
          alt=""
        />
        <h3 className="mt-4 mb-1 text-[18px] font-medium">Jacob Jones</h3>
        <span className="text-[#667085]">Student, National University</span>
      </div>
    </div>
  );
};

export default Advertisement;
