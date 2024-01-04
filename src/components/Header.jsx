import React from "react";
import logo from "../assets/image 2.png";

const Header = () => {
  return (
    <div className="container flex justify-between items-center pt-7">
      <div className="">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex border-[1px] border-[#D0D5DD] rounded-lg">
        <div className="flex items-center">
          <span className="mr-2">
            <i className="fa-solid fa-magnifying-glass ml-[14px] text-xl"></i>
          </span>
          <input
            type="text"
            className="outline-none bg-transparent"
            placeholder="Want to learn speaking?"
          />
        </div>
        <div className="flex items-center bg-[#F2FFFB] rounded-lg py-1 px-4 my-1 mr-1 hover:opacity-60 ">
          <button className="text-[#20B486] text-sm font-semibold">
            Explore
          </button>
          <span className="ml-2 text-xl">
            <i className="fa-solid fa-angle-down text-[#20B486]"></i>
          </span>
        </div>
      </div>
      <ul className="flex space-x-5 text-base text-black">
        <li>
          <a href="#" className="hover:underline text-[#1A906B]">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            About us
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Courses
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact us
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            FAQ's
          </a>
        </li>
      </ul>
      <div className="">
        <button>
          <li className="list-none">
            <a href="#" className="mr-3 font-medium">Sign in</a>
          </li>
        </button>

        {/* <button className="bg-[#F4EBFF] py-1 pr-4 hover:opacity-60">
        </button> */}
        <button className="border-[4px] border-[#F4EBFF] bg-[#20B486] py-2 px-3 rounded-lg text-white hover:opacity-60">
          Create free account
        </button>
      </div>
    </div>
  );
};

export default Header;
