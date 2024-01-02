import React from "react";

const ServiceItem = ({ title, icon, background }) => {
  return (
    <div
      className={`h-[214px] w-[373px] ${
        background === "bg-green-300"
          ? "bg-[#4AC8AE] text-white"
          : "bg-white text-black"
      }  px-7 flex flex-col justify-around py-3 rounded-lg shadow-md`}
    >
      <div className="flex items-center">
        <span className="text-3xl mr-6">
          <i className={`${icon}`}></i>
        </span>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-base">TEXT CHÚ THÍCH</p>
      <div
        className={`text-[18px] ${
          background === "bg-green-300"
            ? "bg-[#4AC8AE] text-white"
            : "bg-white text-[#4AC8AE]"
        } `}
      >
        Learn More
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};

export default ServiceItem;
