import React from "react";

const BlogItem = ({ blog }) => {
  const { date, title, desc, major } = blog;
  return (
    <article className="flex items-center gap-5 hover:shadow-md transform transition-transform hover:scale-105 duration-300">
      <div className="">
        <img src="https://picsum.photos/320/200" alt="" />
      </div>
      <div className="flex flex-col items-start justify-between">
        <span className="text-sm font-semibold text-[#20B486]">{date}</span>
        <h3 className="text-[18px] font-semibold mt-3 mb-2 hover:underline">
          {title}
        </h3>
        <p className="text-base text-[#667085] w-[300px]">{desc}</p>
        <ul className="flex text-sm space-x-2 rounded-md mt-6">
          {major.map(({ name, color, background }) => {
            return (
              <li
                className={`bg-[${background}] text-[${color}] px-2 py-1 rounded-full`}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default BlogItem;
