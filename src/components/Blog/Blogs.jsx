import React from "react";
import BlogItem from "./BlogItem";

const Blogs = () => {
  const options = [
    { name: "Research", color: "#C11574", bg: "#FDF2FA" },
    { name: "UI UX", color: "#026AA2", bg: "#F0F9FF" },
    { name: "Programming", color: "#FF9B26", bg: "#FFF9F3" },
    { name: "UI Design", color: "#3538CD", bg: "#EEF4FF" },
  ];

  const blogs = [
    {
      date: "November 16, 2014",
      title: "Three Pillars of User Delight",
      desc: "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
      major: [
        { name: "Research", color: "#C11574", background: "#C11574" },
        { name: "UI UX", color: "#026AA2", background: "#F0F9FF" },
      ],
    },
    {
      date: "September 24, 2017",
      title: "UX Mapping Methods",
      desc: "Visual-design principles can be applied consistently throughout the process of creating a polished UX map...",
      major: [
        { name: "Research", color: "#C11574", background: "#C11574" },
        { name: "UI Design", color: "#026AA2", background: "#F0F9FF" },
      ],
    },
  ];

  const aBlog = {
    date: "March 13, 2014",
    title: "Agile Development Projects and Usability",
    desc: "Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. ",
    major: [
      { name: "Programming", color: "#FF9B26", background: "#FFF3E8" },
      { name: "Research", color: "#1215C0", background: "#EEF4FF" },
      { name: "Developments", color: "#C11574", background: "#FDF2FA" },
    ],
  };
  return (
    <div className="pt-4">
      <ul className="flex justify-center space-x-2 mb-[100px]">
        <li>
          <span className="inline-block h-3 w-12 rounded-full bg-[#4AC8AE]"></span>
        </li>
        <li>
          <span className="inline-block h-3 w-3 rounded-full bg-[#D9D9D9]"></span>
        </li>
        <li>
          <span className="inline-block h-3 w-3 rounded-full bg-[#D9D9D9]"></span>
        </li>
      </ul>
      <div className="mb-[100px]">
        <h2 className="text-2xl font-semibold mb-8">Our recent blogs</h2>
        <div className="grid grid-cols-2 gap-4 py-1">
          {/* Left */}
          <div className="flex flex-col justify-between">
            {blogs.map((blog) => {
              return <BlogItem blog={blog} />;
            })}
          </div>

          {/* Right */}
          <article>
            <div className="">
              <img src="https://picsum.photos/592/240" alt="" />
            </div>
            <div className="mt-8">
              <span className="text-sm text-[#20B486]">{aBlog.date}</span>
              <h3 className="text-[18px] my-3">{aBlog.title}</h3>
              <p className="text-base text-[#667085] mb-5">{aBlog.desc}</p>
              <ul className="flex text-sm space-x-2 rounded-md">
                {aBlog.major.map(({ name, color, background }) => {
                  return (
                    <li
                      className={`bg-[${background}] text-[${color}] px-2 rounded-lg`}
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
