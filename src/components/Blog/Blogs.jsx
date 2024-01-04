import React from "react";
import BlogItem from "./BlogItem";
import blog1 from "../../assets/Image (3).png";
import blog2 from "../../assets/Image (4).png";
import blog3 from "../../assets/Image (5).png";

const Blogs = () => {
  const blogs = [
    {
      date: "November 16, 2014",
      title: "Three Pillars of User Delight",
      desc: "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
      major: [
        { name: "Research", color: "#C11574", background: "#FDF2FA" },
        { name: "UI UX", color: "#3538CD", background: "#EEF4FF" },
      ],
      image: blog1,
    },
    {
      date: "September 24, 2017",
      title: "UX Mapping Methods",
      desc: "Visual-design principles can be applied consistently throughout the process of creating a polished UX map...",
      major: [
        { name: "Research", color: "#C11574", background: "#FDF2FA" },
        { name: "UI Design", color: "#3538CD", background: "#EEF4FF" },
      ],
      image: blog2,
    },
  ];

  const aBlog = {
    date: "March 13, 2014",
    title: "Agile Development Projects and Usability",
    desc: "Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. ",
    major: [
      { name: "Programming", color: "#FF9B26", background: "FFF9F3" },
      { name: "Research", color: "#3538CD", background: "#EEF4FF" },
      { name: "Developments", color: "#C11574", background: "#AA7492" },
    ],
  };

  // const a = aBlog.major.map(({ name, background, color }) => {
  //   return (
  //     <li
  //       key={name}
  //       className={`bg-[${background}] text-[${color}] px-2 rounded-lg`}
  //     >
  //       {name}
  //     </li>
  //   );
  // });

  // console.log(a);

  return (
    <div className="pt-5">
      {/* Effect */}
      <ul className="flex justify-center space-x-2 mb-[98px]">
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
      <div className="mb-[100px]">
        <h2 className="text-2xl font-semibold mb-8">Our recent blogs</h2>
        <div className="grid grid-cols-2 gap-8 py-1">
          {/* Left */}
          <div className="flex flex-col justify-between gap-8">
            {blogs.map((blog) => {
              return <BlogItem blog={blog} key={blog.title} />;
            })}
          </div>

          {/* Right */}
          <article className="hover:shadow-lg shadow-md">
            <div className="">
              <img src={blog3} alt="" />
            </div>
            <div className="mt-8 pl-3">
              <span className="text-sm text-[#20B486]">{aBlog.date}</span>
              <h3 className="text-2xl font-semibold my-3">{aBlog.title}</h3>
              <p className="text-base text-[#667085] mb-6">{aBlog.desc}</p>
              <ul className="flex text-sm space-x-3 rounded-md">
                {/* {aBlog.major.map((item) => {
                  return (
                    <li
                      key={item.name}
                      className={`bg-[${item.background}] text-[${item.color}] px-2 rounded-lg`}
                    >
                      {item.name}
                    </li>
                  );
                })} */}
                <li className="bg-[#FFF9F3] text-[#FF9B26] px-2 py-[2px] rounded-lg">
                  Programming
                </li>
                <li className="bg-[#EEF4FF] text-[#3538CD] px-2 py-[2px] rounded-lg">
                  Research
                </li>
                <li className="bg-[#FDF2FA] text-[#C11574] px-2 py-[2px] rounded-lg">
                  Developments
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
