import React from "react";
import TutorItem from "./TutorItem";

const Tutors = () => {
  const tutors = [
    {
      name: "Theresa Webb",
      role: "Application Support Analyst Lead",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      name: "Courtney Henry",
      role: "Director, Undergraduate Analytics and Planning",
      description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      name: "Albert Flores",
      role: "Career Educator",
      description: "Former PM for Linear, Lambda School, and On Deck.",
    },
    {
      name: "Marvin McKinney",
      role: "Co-op & Internships Program & Operations Manager",
      description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    },
  ];
  return (
    <div className="mb-[100px]">
      <div className="flex justify-start flex-col items-center mb-10">
        <p className="text-[#22B286] text-base font-semibold">Tutors</p>
        <h4 className="text-4xl font-semibold text-black mt-3 mb-5">
          Team member
        </h4>
        <p className="text-xl text-[#667085] w-[750px] text-center">
          On Weekend UX, instructors from all over the world instruct millions
          of students. We offer the knowledge and abilities.
        </p>
      </div>
      <div className="flex justify-between items-center my-[30px]">
        {tutors.map((tutor) => {
          return <TutorItem tutor={tutor} />;
        })}
      </div>
    </div>
  );
};

export default Tutors;
