import React from "react";
import { SuitableCard } from "./SuitableCard";
import icon1 from "../../../../assets/suitable/Icon.png";
import icon2 from "../../../../assets/suitable/Icon (1).png";
import icon3 from "../../../../assets/suitable/Icon (2).png";
export const Suitable = () => {
  return (
    <div className="text-center py-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold w-3/4 mx-auto md:w-full">Manage your entire community in a single system</h1>
        <p className="text-sm opacity-60 py-2">Who is Nextcent suitable for?</p>
      <div className="flex flex-col gap-4 md:flex-row md:space-x-4 items-center">
        <SuitableCard
          icon={icon1}
          title={"Membership Organizations"}
          description={
            "Our memebership management software provides full automation of membership renewals and payments"
          }
        />
        <SuitableCard
          icon={icon2}
          title={"National Associations"}
          description={
            "Our memebership management software provides full automation of membership renewals and payments"
          }
        />
        <SuitableCard
          icon={icon3}
          title={"Clubs and Groups"}
          description={
            "Our memebership management software provides full automation of membership renewals and payments"
          }
        />
      </div>
    </div>
  );
};
