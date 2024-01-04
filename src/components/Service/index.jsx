import React, { useState } from "react";
import ServiceItem from "./ServiceItem";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

const Services = () => {
  const serviceItems = [
    { id: 1, title: "AI CHAT BOT", image: img1, background: "bg-[#4AC8AE]" },
    { id: 2, title: "GEN QUIZZ", image: img2, background: "bg-[#fff]" },
    { id: 3, title: "AUTOMATION", image: img3, background: "bg-[#fff]" },
  ];
  const [isActive, setActive] = useState(1);

  const handleClick = (number) => {
    setActive(number);
  };
  return (
    <div className=" mb-[100px]">
      <div className="flex justify-center flex-col items-center mb-[40px]">
        <p className="text-[#20B486] text-base font-semibold mb-3">
          Our services
        </p>
        <h4 className="text-4xl font-semibold text-black">Company</h4>
      </div>
      <div className="flex justify-between items-center mt-[30px]">
        <ServiceItem
          title={"AI CHAT BOT"}
          img={img1}
          background={"bg-green-300"}
          indexActive={isActive}
          index="1"
        />
        <ServiceItem
          title={"GEN QUIZZ"}
          img={img2}
          background={"bg-white"}
          indexActive={isActive}
          index="2"
        />
        <ServiceItem
          title={"AUTOMATION"}
          img={img3}
          background={"bg-white"}
          indexActive={isActive}
          index="3"
        />
      </div>
      {/* Effect */}
      <ul className="flex justify-center space-x-2 mt-10">
        {Array(3)
          .fill(0)
          .map((item, index) => (
            <li
              className="group"
              onClick={() => handleClick(index + 1)}
              key={index}
            >
              <span className="inline-block h-3 w-3 rounded-full bg-[#D9D9D9] group-hover:w-12 group-hover:bg-[#4AC8AE] transition-all duration-300"></span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Services;
