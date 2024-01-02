import React from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <div className="my-[60px]">
      <div className="flex justify-center flex-col items-center">
        <p className="text-[#20B486]">Our services</p>
        <h4 className="text-4xl text-black">Company</h4>
      </div>
      <div className="flex justify-between items-center mt-[30px]">
        <ServiceItem
          title={"AI CHAT BOT"}
          icon={"fa-solid fa-computer"}
          background={"bg-green-300"}
        />
        <ServiceItem
          title={"GEN QUIZZ"}
          icon={"fa-solid fa-computer"}
          background={"bg-white"}
        />
        <ServiceItem
          title={"AUTOMATION"}
          icon={"fa-solid fa-computer"}
          background={"bg-white"}
        />
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

export default Services;
