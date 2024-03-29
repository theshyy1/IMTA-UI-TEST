import React from "react";

const ServiceItem = ({ service, indexActive, index }) => {
  const { title, image } = service;
  const handleActive = (number) => {
    let className =
      "h-[214px] w-[373px] px-10 flex flex-col justify-center py-3 rounded-lg shadow-lg ";
    if (number === Number(index)) {
      className += " bg-[#4AC8AE] text-white";
    } else {
      className += "bg-white text-black";
    }
    return className;
  };
  const handleActiveText = (number) => {
    let className = "text-[18px] hover:underline";
    if (number === Number(index)) {
      className += " text-white";
    } else {
      className += " text-[#4AC8AE]";
    }
    return className;
  };
  return (
    <div className={handleActive(indexActive)}>
      <div className="flex items-center">
        <img src={image} className="object-cover rounded-lg mr-5" alt="" />        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-base mt-[30px] mb-[22px]">TEXT CHÚ THÍCH</p>

      <a href="#" className={handleActiveText(indexActive)}>
        Learn More
        <i className="fa-solid fa-angle-right ml-5"></i>
      </a>
    </div>
  );
};

export default ServiceItem;
