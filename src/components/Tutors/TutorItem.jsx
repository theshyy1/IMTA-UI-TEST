import React from "react";

const TutorItem = ({ tutor }) => {
  const { name, description, role, avatar } = tutor;
  return (
    <div className="w-[276px] h-[340px] bg-[#F9FAFB] p-6 shadow-md transform transition-transform hover:scale-110 duration-300">
      <div className="h-full text-center flex flex-col items-center justify-between space-y-3 rounded-lg ">
        <img
          src={avatar}
          className="text-center object-cover rounded-full"
          alt=""
        />
        <div className="">
          <h3 className="text-[18px]">{name}</h3>
          <p className="text-[#22B286]">{role}</p>
        </div>
        <p className="text-[#667085]">{description}</p>
        <ul className="block text-2xl space-x-3 text-[#667085]">
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default TutorItem;
