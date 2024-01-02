import React from "react";

const CourseItem = () => {
  return (
    <div className="w-[384px] py-2 px-4 shadow-md">
      <div className="mb-8">
        <img
          src="https://picsum.photos/326/240"
          alt=""
          className="object-cover rounded"
        />
      </div>
      <article className="space-y-4">
        <span className="text-sm text-[#1A906B]">Desgin</span>
        <div className="flex items-center">
          <h2 className="text-xl font-semibold mr-7">Figma UI UX Design..</h2>
          <i className="fa-solid fa-up-right-from-square"></i>
        </div>
        <p NaclassNameName="text-[#667085]">
          Use Figma to get a job in UI Design, User Interface, User Experience
          design.
        </p>
        <div className="flex space-x-2">
          <span className="text-[#3FC89E]">4.3</span>
          <ul className="text-[#FF9B26]">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </ul>
          <span>(16.325)</span>
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
              <h3>Jane Cooper</h3>
              <span className="text-[#667085]">2001 Enrolled</span>
            </div>
          </div>
          <span className="text-[#3FC89E] text-2xl">$17.84</span>
        </div>
      </article>
    </div>
  );
};

export default CourseItem;
