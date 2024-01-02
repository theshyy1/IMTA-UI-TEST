import React from "react";

const Blogs = () => {
  const options = [
    { name: "Research", color: "#C11574", bg: "#FDF2FA" },
    { name: "UI UX", color: "#026AA2", bg: "#F0F9FF" },
    { name: "Programming", color: "#FF9B26", bg: "#FFF9F3" },
    { name: "UI Design", color: "#3538CD", bg: "#EEF4FF" },
  ];
  return (
    <div className="py-[30px]">
      <h2 className="text-2xl font-semibold my-6">Our recent blogs</h2>
      <div className="grid grid-cols-2 gap-4 py-1">
        {/* Left */}
        <div className="flex flex-col justify-between">
          <article className="flex items-center gap-5">
            <div className="">
              <img src="https://picsum.photos/320/200" alt="" />
            </div>
            <div className="">
              <span className="text-sm text-[#20B486]">November 16, 2014</span>
              <h3 className="text-[18px] mt-4 mb-2">
                Three Pillars of User Delight
              </h3>
              <p className="text-base text-[#667085] w-[300px]">
                Delight can be experienced viscerally, behaviourally, and
                reflectively. A great design is ...
              </p>
              <ul className="flex text-sm space-x-2 rounded-md mt-4">
                <li className="bg-[#FDF2FA] text-[#C11574] px-2 rounded-lg">
                  Research
                </li>
                <li className="bg-[#F0F9FF] text-[#026AA2] px-2 rounded-lg">
                  UI UX
                </li>
              </ul>
            </div>
          </article>
          <article className="flex items-center gap-5">
            <div className="">
              <img src="https://picsum.photos/320/200" alt="" />
            </div>
            <div className="">
              <span className="text-sm text-[#20B486]">November 16, 2014</span>
              <h3 className="text-[18px] mt-4 mb-2">
                Three Pillars of User Delight
              </h3>
              <p className="text-base text-[#667085] w-[300px]">
                Delight can be experienced viscerally, behaviourally, and
                reflectively. A great design is ...
              </p>
              <ul className="flex text-sm space-x-2 rounded-md mt-4">
                <li className="bg-[#FDF2FA] text-[#C11574] px-2 rounded-lg">
                  Research
                </li>
                <li className="bg-[#F0F9FF] text-[#026AA2] px-2 rounded-lg">
                  UI UX
                </li>
              </ul>
            </div>
          </article>
        </div>

        {/* Right */}
        <article>
          <div className="">
            <img src="https://picsum.photos/592/240" alt="" />
          </div>
          <div className="mt-7">
            <span className="text-sm text-[#20B486]">March 13, 2014</span>
            <h3 className="text-[18px] mt-4 mb-2">
              Agile Development Projects and Usability
            </h3>
            <p className="text-base text-[#667085]">
              Agile methods aim to overcome usability barriers in traditional
              development, but post new threats to user experience quality.
            </p>
            <ul className="flex text-sm space-x-2 rounded-md mt-4">
              <li className="bg-[#FDF2FA] text-[#C11574] px-2 rounded-lg">
                Research
              </li>
              <li className="bg-[#F0F9FF] text-[#026AA2] px-2 rounded-lg">
                UI UX
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
