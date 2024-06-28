import React from "react";
import { LeftSide } from "./LeftSide";
import { Right } from "./Right";

export const Hero = () => {
  return (
    <div className="silver p-4">
      <div className="md:flex items-center justify-between md:space-x-8 max-w-7xl mx-auto">
        <LeftSide />
        <Right />
      </div>
    </div>
  );
};
