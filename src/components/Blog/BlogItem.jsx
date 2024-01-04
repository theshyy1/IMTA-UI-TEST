import React from "react";

// transform transition-transform hover:scale-105 duration-300
const BlogItem = ({ blog }) => {
  const { date, title, desc, major, image } = blog;
  return (
    <article className="flex gap-5 hover:shadow-lg shadow-md">
      <div className="h-[200px] w-[320px]">
        <img src={image} className="object-cover " alt="" />
      </div>
      <div className="flex flex-col items-start max-w-[248px] py-2">
        <span className="text-sm font-semibold text-[#20B486]">{date}</span>
        <h3 className="text-[18px] font-semibold mt-3 mb-2 hover:underline">
          {title}
        </h3>
        <p className="text-base text-[#667085] mr-3">{desc}</p>
        <ul className="flex text-sm space-x-3 rounded-md mt-6">
          {major.map(({ name, color, background }, index) => {
            return (
              <li
                key={index}
                className={`bg-[${background}] text-[${color}] px-2 py-[2px] rounded-full`}
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
