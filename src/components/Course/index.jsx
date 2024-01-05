import React from "react";
import CourseItem from "./CourseItem";
import courseImg1 from "../../assets/course1.png";
import courseImg2 from "../../assets/course2.png";
import courseImg3 from "../../assets/course3.png";
import author1 from "../../assets/Avatar.png";
import author2 from "../../assets/Avatar1.png";
import author3 from "../../assets/Avatar2.png";

const Courses = () => {
  const courses = [
    {
      name: "Figma UI UX Design..",
      description:
        "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      rate: "4.3",
      review: "16.325",
      price: "17.85",
      nameAuthor: "Jane Cooper",
      descAuthor: "2001 Enrolled",
      img: courseImg1,
      imgAuthor: author1,
    },
    {
      name: "Learn With Shoaib",
      description:
        "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
      rate: "3.9",
      review: "832",
      price: "8.99",
      nameAuthor: "Jenny Wilson",
      descAuthor: "2001 Enrolled",
      img: courseImg2,
      imgAuthor: author2,
    },
    {
      name: "Building User Interface..",
      description:
        "Learn how to apply User Experience (UX) principles to your website designs.",
      rate: "4.2",
      review: "125",
      price: "11.70",
      nameAuthor: "Esther Howard",
      descAuthor: "2001 Enrolled",
      img: courseImg3,
      imgAuthor: author3,
    },
  ];
  return (
    <div className="mb-[100px]">
      <div className="flex justify-start flex-col items-start mb-10">
        <p className="text-[#1A906B] text-base">Explore Programs</p>
        <h4 className="text-4xl text-black mt-3 mb-5">Course</h4>
        <p className="text-[#667085] text-xl">
          Let's join our famous class, the knowledge provided will definitely be
          useful for you.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center flex-wrap my-[30px]">
        {courses.map((course) => {
          return <CourseItem course={course} key={course.name} />;
        })}
      </div>
      {/* Effect */}
      <ul className="flex justify-center space-x-2 my-10">
        <li className="group">
          <span className="inline-block h-3 w-3 rounded-full bg-[#D9D9D9] group-hover:w-12 group-hover:bg-[#4AC8AE] transition-all duration-300"></span>
        </li>
        <li className="group">
          <span className="inline-block h-3 w-3 rounded-full bg-[#D9D9D9] group-hover:w-12 group-hover:bg-[#4AC8AE] transition-all duration-300"></span>
        </li>
        <li className="group">
          <span className="inline-block h-3 w-3 rounded-full bg-[#D9D9D9] group-hover:w-12 group-hover:bg-[#4AC8AE] transition-all duration-300"></span>
        </li>
      </ul>
      <button className="block border-[1px] border-[#D9D9D9] text-sm mx-auto py-3 px-4 rounded bg-white hover:bg-[#4AC8AE] hover:text-white">
        Explore All Programs
      </button>
    </div>
  );
};

export default Courses;
