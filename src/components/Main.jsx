import React from "react";

const Main = () => {
  return (
    <div className="container flex justify-between my-[60px] pb-[120px]">
      <div className="relative flex flex-col items-start space-y-8">
        <h1 className="text-[64px]">Text </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          provident
        </p>
        <div className=" space-x-3 z-10">
          <button className="bg-[#20B486] text-white rounded py-4 px-6">
            Get started
          </button>
          <button className="bg-[#EAFFF9] text-[#3BC49A] rounded py-4 px-6">
            Get free trial
          </button>
        </div>
        <ul className="flex space-x-8 z-10">
          <li className="flex items-center space-x-2">
            <span className="inline-block w-8 h-8 bg-red-600 rounded"></span>
            <span>Listenning</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="inline-block w-8 h-8 bg-red-600 rounded"></span>
            <span>Writiing</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="inline-block w-8 h-8 bg-red-600 rounded"></span>
            <span>Speaking</span>
          </li>
        </ul>
        <div className="absolute top-[-40px] left-[-80px] flex justify-center items-center">
          <p className="w-[414px] h-[414px] border-[#20B486] border-[1px] rounded-full flex justify-center items-center">
            <p className="w-[344px] h-[344px] border-[#20B486] border-[1px] rounded-full flex justify-center items-center">
              <p className="w-[265px] h-[265px] border-[#20B486] border-[1px] rounded-full flex justify-center items-center">
                <p className="w-[157px] h-[157px] border-[#20B486] border-[1px] rounded-full"></p>
              </p>
            </p>
          </p>
        </div>
      </div>
      <div className="">
        <div className="w-[495px] h-[495px] bg-[#20B486] relative rounded-full">
          <p className="w-[495px] h-[495px] border-[#20B486] border-[1px]  rounded-full absolute top-[-30px] left-[-30px]"></p>
          <div className="flex space-x-2 border-[1px] bg-[#F5F5F4] border-[#20B486] py-2 px-3 w-[241px] rounded-lg absolute top-[35%] left-[-20%]">
            <img
              src="https://picsum.photos/49/49"
              className="object-cover rounded"
              alt=""
            />
            <div className="">
              <h3 className="text-[25px] font-bold">2K+</h3>
              <span className="text-[15px]">Video Courses</span>
            </div>
          </div>
          <div className="flex space-x-2 border-[1px] bg-[#F5F5F4] border-[#20B486] py-2 px-3 w-[164px] rounded-lg absolute top-[75%] right-[-0%]">
            <img
              src="https://picsum.photos/49/49"
              className="object-cover rounded"
              alt=""
            />
            <div className="">
              <span className="text-[15px]">Tutors</span>
              <h3 className="text-[25px] font-bold">250+</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
