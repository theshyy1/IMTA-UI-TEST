import React from "react";
import Header from "./components/Header";
import Advertisement from "./components/advertisement";
import Services from "./components/Service";
import Courses from "./components/Course";
import Tutors from "./components/Tutors";
import Blogs from "./components/Blog/Blogs";
import Main from "./components/Main";
const App = () => {
  return (
    <div className="bg-neutral-200">
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
    </div>
  );
};

export default App;
