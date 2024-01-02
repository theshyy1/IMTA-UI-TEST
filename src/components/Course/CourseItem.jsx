import React from "react";

const CourseItem = ({ course }) => {
  const { name, price, description, rate, review, nameAuthor, descAuthor } =
    course;
  return (
    <div className="w-[384px] py-2 px-4 shadow-md">
      <div className="">
        <img
          src="https://picsum.photos/326/240"
          alt=""
          className="object-cover rounded p-6"
        />
      </div>
      <article className="space-y-4 pb-8 pt-1 px-6">
        <span className="text-sm text-[#1A906B]">Desgin</span>
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold mr-7 hover:underline">
            {name}
          </h2>
          <i className="fa-solid fa-up-right-from-square"></i>
        </div>
        <p NaclassNameName="text-[#667085]">{description}</p>
        <div className="flex space-x-2 text-sm">
          <span className="text-[#3FC89E]">{rate}</span>
          <ul className="text-[#FF9B26]">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </ul>
          <span className="text-[#667085]">({review})</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center text-sm">
            <div className="">
              <img
                src="https://picsum.photos/40/40"
                className="object-cover rounded-full"
                alt=""
              />
            </div>
            <div className="">
              <h3>{nameAuthor}</h3>
              <span className="text-[#667085]">2001 Enrolled</span>
            </div>
          </div>
          <span className="text-[#3FC89E] text-[26px] font-bold">${price}</span>
        </div>
      </article>
    </div>
  );
};

export default CourseItem;
