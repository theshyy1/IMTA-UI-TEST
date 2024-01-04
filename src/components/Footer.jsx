import React from "react";
import logo from "../assets/Image 2.png";

const Footer = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-6 gap-4 py-[64px]">
        <div className="col-span-2">
          <img src={logo} className="object-cover mb-8" alt="" />
          <p className="mr-10 text-base">
            Top learning experiences that create more talent in the world.
          </p>
        </div>
        <ul className="col-span-1 space-y-3">
          <h3 className="mb-4 text-[#98A2B3] text-sm">Product</h3>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Overview
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Solutions
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Tutorials
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Pricing
            </a>
          </li>
        </ul>
        <ul className="col-span-1 space-y-3">
          <h3 className="mb-4 text-[#98A2B3] text-sm">Company</h3>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              About us
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Careers
            </a>
          </li>
          <li className="relative">
            <a className="hover:underline hover:text-red-600" href="#">
              Press
            </a>
            <span className="absolute top-0 left-[50px] block w-[42px] text-center leading-[22px] h-[22px] rounded-full bg-white text-black text-[12px] font-medium">
              New
            </span>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              News
            </a>
          </li>
        </ul>
        <ul className="col-span-1 space-y-3">
          <h3 className="mb-4 text-[#98A2B3] text-sm">Social</h3>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Twitter
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              GitHub
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Dribbble
            </a>
          </li>
        </ul>
        <ul className="col-span-1 space-y-3">
          <h3 className="mb-4 text-[#98A2B3] text-sm">Legal</h3>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Terms
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Privacy
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Cookies
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-red-600" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#98A2B3]">© 2022 Ed-Circle. All rights reserved.</p>
        <ul className="flex space-x-4 text-2xl pb-5">
          <li>
            <a href="#" className="hover:opacity-60">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-60">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-60">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-60">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-60">
              <i className="fa-solid fa-basketball"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
