import React from "react";

const ServiceItem = ({ title, img, background }) => {
  return (
    <div
      className={`h-[214px] w-[27%] ${background === "bg-green-300"
        ? "bg-[#4AC8AE] text-white"
        : "bg-white text-black"
        }  px-10 flex flex-col justify-center py-3 rounded-lg shadow-lg`}
    >
      <div className="flex items-center">
        <img src={img} className="object-cover rounded-lg mr-5" alt="" />
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-base mt-[30px] mb-[22px]">TEXT CHÚ THÍCH</p>
      <a
        href="#"
        className={`text-[18px] ${background === "bg-green-300"
          ? "bg-[#4AC8AE] text-white"
          : "bg-white text-[#4AC8AE]"
          } hover:underline`}
      >
        Learn More
        <i className="fa-solid fa-angle-right ml-5"></i>
      </a>
    </div>
  );
};

export default ServiceItem;
