import React from "react";
import Header from "./components/Header";
import Services from "./components/Service";
import Courses from "./components/Course";
import Tutors from "./components/Tutors";
import Blogs from "./components/Blog/Blogs";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Advertisement from "./components/Advertisement";

const App = () => {
  return (
    <div className="">
      <div className="container">
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div className="container">
        <Services />
        <Courses />
        <Tutors />
      </div>
      <div className="bg-[#F0FAF7]">
        <Advertisement />
      </div>
      <div className="container">
        <Blogs />
      </div>
      <div className="bg-[#101828] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default App;
