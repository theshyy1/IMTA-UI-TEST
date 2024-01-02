import React from "react";
import CourseItem from "./CourseItem";

const Courses = () => {
  return (
    <div className="my-[60px]">
      <div className="flex justify-start flex-col items-start">
        <p className="text-[#20B486]">Explore Programs</p>
        <h4 className="text-4xl text-black my-3">Course</h4>
        <p>
          Let's join our famous class, the knowledge provided will definitely be
          useful for you.
        </p>
      </div>
      <div className="flex justify-between items-center my-[30px]">
        <CourseItem />
        <CourseItem />
        <CourseItem />
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
      <button className="block mx-auto py-3 px-4 rounded bg-white my-8">
        Explore All Programs
      </button>
    </div>
  );
};

export default Courses;
