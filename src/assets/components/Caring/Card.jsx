import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Card = ({ img, description }) => {
  return (
    <div className="relative ">
      <img className="w-[500px] object-cover" src={img} alt="" />
      <div className="silver h-32 lg:h-40 text-center rounded-lg absolute bottom-10 md:-bottom-10 w-[90%] left-3 lg:left-5 p-4">
        <p className="text-sm lg:text-lg">{description}</p>
        <div className="green justify-center py-4 flex items-center space-x-2">
          <p>Readmore</p>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};
