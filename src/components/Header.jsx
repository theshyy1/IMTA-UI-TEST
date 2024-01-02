import React from "react";

const Header = () => {
  return (
    <div className="container flex justify-between items-center pt-7">
      <div className="">
        <img src="https://picsum.photos/80/72" alt="" />
      </div>
      <div className="flex border-[1px] border-neutral-500 rounded-lg px-2">
        <div className="flex items-center">
          <span className="mr-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="outline-none bg-transparent"
            placeholder="Want to learn speaking?"
          />
        </div>
        <div className="flex items-center bg-green-200 rounded-lg py-2 px-3">
          <button className="text-green-700">Explore</button>
          <span className="ml-2 text-xl">
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
      </div>
      <ul className="flex space-x-5 text-base text-black">
        <li>
          <a href="#" className="hover:underline">
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
        <button>Sign in</button>
        <button className="border-2 border-b-gray-500 bg-[#20B486] py-2 px-3 rounded-lg text-white ml-3 hover:bg-green-400">
          Create free account
        </button>
      </div>
    </div>
  );
};

export default Header;
