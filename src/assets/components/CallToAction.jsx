import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const CallToAction = () => {
  return (
    <div className="p-4 silver py-10 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-4xl lg:text-6xl text-center">
          Only one way to find out. Nextcent is life changer.
        </h1>
        <button className="flex items-center space-x-2 w-fit mx-auto my-4">Get a Demo <FaArrowRight className="pl-2 text-xl"/></button>
      </div>
    </div>
  );
};
