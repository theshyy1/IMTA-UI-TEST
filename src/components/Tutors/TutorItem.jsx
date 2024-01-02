import React from "react";

const TutorItem = () => {
  return (
    <div className="w-[276px] h-[340px] bg-[#F9FAFB] text-black p-6 ">
      <div className="text-center flex flex-col items-center justify-center space-y-3 rounded">
        <img
          src="https://picsum.photos/80/80"
          className="text-center object-cover rounded-full"
          alt=""
        />
        <div className="">
          <h3 className="text-[18px]">Theresa Webb</h3>
          <p className="text-[#22B286]">Application Support Analyst Lead</p>
        </div>
        <p>
          Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
        </p>
        <ul className="text-xl space-x-2">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </ul>
      </div>
    </div>
  );
};

export default TutorItem;
