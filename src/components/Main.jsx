import React from "react";
import logo1 from "../assets/Group 518.jpg";
import logo2 from "../assets/Briefcase.png";
import logo3 from "../assets/idea.png";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/circle.png";
import icon3 from "../assets/Board.png";

import dualingo from "../assets/dualingo.png";
import codedev from "../assets/codedev.png";
import testing from "../assets/testing.png";
import magicleap from "../assets/magic.png";

const Main = () => {
  return (
    <div className="container pt-[80px] pb-[120px]">
      <div className="flex justify-between">
        <div className="relative flex flex-col items-start space-y-8">
          <h1 className="text-[64px] font-bold">Text </h1>
          <p className="">Description..</p>
          <div className=" space-x-3">
            <button className="bg-[#20B486] text-[18px] border-2 border-[#F4EBFF]  text-white shadow-md rounded py-4 px-6 hover:bg-white hover:text-[#20B486]">
              Get started
            </button>
            <button className="bg-[#EAFFF9] text-[#3BC49A] text-[18px] rounded py-4 px-6 shadow-md hover:bg-[#20B486] hover:text-white">
              Get free trial
            </button>
          </div>
          <ul className="flex space-x-8">
            <li className="flex items-center space-x-2">
              <img src={logo1} alt="" />
              <span>Listenning</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src={logo2} alt="" />
              <span>Writiing</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src={logo3} alt="" />
              <span>Speaking</span>
            </li>
          </ul>
          <div className="absolute top-[-25px] left-[-125px] flex justify-center items-center -z-10">
            <span className="absolute top-10 left-[18%] w-2 h-2 bg-[#3BC49A] rounded-full"></span>
            <p className="w-[414px] h-[414px] border-[#C7ECE1] border-[1px] rounded-full flex justify-center items-center -z-10">
              <p className="w-[344px] h-[344px] border-[#C7ECE1] border-[1px] rounded-full flex justify-center items-center -z-10">
                <p className="w-[265px] h-[265px] border-[#C7ECE1] border-[1px] rounded-full flex justify-center items-center -z-10">
                  <p className="w-[157px] h-[157px] border-[#C7ECE1] border-[1px] rounded-full"></p>
                </p>
              </p>
            </p>
          </div>
        </div>
        <div className="mr-16">
          <div className="relative w-[495px] h-[495px] bg-[#20B486] rounded-full z-999">
            {/* Big dot */}
            <span className="w-11 h-11 bg-[#20B486] rounded-full absolute top-[84%] left-0"></span>
            <p className="w-[495px] h-[495px] border-[#20B486] border-[1px]  rounded-full absolute top-[-30px] left-[-30px]"></p>
            <div className="flex items-center space-x-3 border-[1px] bg-[#F5F5F4] border-[#20B486] py-2 px-3 w-[241px] rounded-3xl absolute top-[35%] left-[-20%]">
              <span className="flex items-center justify-center bg-[#20B486] w-[49px] h-[49px] rounded-xl m-2">
                <img src={icon1} className="w-9 h-9 object-cover" alt="" />
              </span>
              <div className="">
                <h3 className="text-[25px] font-bold">2K+</h3>
                <span className="text-[15px] font-extralight">
                  Video Courses
                </span>
              </div>
            </div>
            <div className="flex space-x-2 border-[1px] bg-[#F5F5F4] border-[#20B486] py-2 px-3 w-[164px] rounded-3xl absolute top-[78%] right-[-0%]">
              <span className="flex items-center justify-center bg-[#20B486] w-[49px] h-[49px] rounded-xl m-2">
                <img src={icon3} className="w-9 h-9 object-cover" alt="" />
              </span>
              <div className="">
                <span className="text-[15px] font-extralight">Tutors</span>
                <h3 className="text-[25px] font-bold">250+</h3>
              </div>
            </div>
            <div className="flex flex-col items-center border-[1px] text-center bg-[#F5F5F4] border-[#20B486] py-4 px-5 rounded-3xl absolute top-[0] right-[-0%]">
              <img
                src={icon2}
                className=" w-[80px] h-[80px] object-cover rounded m-2"
                alt=""
              />
              <div className="">
                <h3 className="text-[25px] font-bold">5K+</h3>
                <span className="text-[15px] font-extralight">
                  Online Courses
                </span>
              </div>
            </div>
            {/* Circle virtual */}
            <div className="absolute top-[66%] right-[-32%] flex justify-center items-center -z-10">
              {/* <span className="absolute top-[78%] left-[5%] w-2 h-2 bg-[#3BC49A] rounded-full"></span> */}
              <p className="w-[414px] h-[414px] border-[#C7ECE1] border-[1px] rounded-full flex justify-center items-center -z-10">
                <p className="w-[344px] h-[344px] border-[#C7ECE1] border-[1px] rounded-full flex justify-center items-center -z-10">
                  <p className="w-[265px] h-[265px] border-[#C7ECE1] border-[1px] rounded-full flex justify-center items-center -z-10">
                    <p className="w-[157px] h-[157px] border-[#C7ECE1] border-[1px] rounded-full"></p>
                  </p>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* List sponsor */}
      <div className="mt-[80px]">
        <ul className="flex pt-14 justify-around items-center ">
          <li>
            <div className="">
              <h3 className="text-[30px] font-bold text-[#20B486]">250+</h3>
              <p className="text-[25px] font-light">Collaboration</p>
            </div>
          </li>
          <li>
            <a href="">
              <img src={dualingo} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={codedev} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={testing} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={magicleap} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
