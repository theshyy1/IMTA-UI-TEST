import React from "react";

const Advertisement = () => {
  return (
    <div className="container text-center text-black flex flex-col justify-center items-center py-[96px]">
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
        <h3>Jacob Jones</h3>
        <span>Student, National University</span>
      </div>
      <ul className="flex justify-center space-x-2 mt-10">
        <li>
          <span className="inline-block h-3 w-10 rounded-full bg-[#4AC8AE]"></span>
        </li>
        <li>
          <span className="inline-block h-3 w-3 rounded-full bg-neutral-500"></span>
        </li>
        <li>
          <span className="inline-block h-3 w-3 rounded-full bg-neutral-500"></span>
        </li>
      </ul>
    </div>
  );
};

export default Advertisement;
