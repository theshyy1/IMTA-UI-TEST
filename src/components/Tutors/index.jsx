import React from "react";
import TutorItem from "./TutorItem";

const Tutors = () => {
  return (
    <div className="my-[60px]">
      <div className="flex justify-start flex-col items-center">
        <p className="text-[#20B486]">Tutors</p>
        <h4 className="text-4xl text-black my-3">Team member</h4>
        <p className="text-[20px]">
          On Weekend UX, instructors from all over the world instruct millions
          of students. We offer the knowledge and abilities.
        </p>
      </div>
      <div className="flex justify-between items-center my-[30px]">
        <TutorItem />
        <TutorItem />
        <TutorItem />
        <TutorItem />
      </div>
    </div>
  );
};

export default Tutors;
