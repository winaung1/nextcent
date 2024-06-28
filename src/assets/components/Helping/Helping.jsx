import React from "react";
import { LeftSide } from "./LeftSide";
import { Card } from "./Card";
import icon1 from '../../../assets/helping/Icon (3).png'
import icon2 from '../../../assets/helping/Icon (4).png'
import icon3 from '../../../assets/helping/Icon (5).png'
import icon4 from '../../../assets/helping/Icon (6).png'
export const Helping = () => {
  return (
    <div className="silver py-4 text-center md:text-left">

    <div className="md:flex justify-between md:space-x-6 p-4 max-w-6xl mx-auto">
      <LeftSide />
      <div className="grid grid-cols-2 gap-8 py-4">
        <Card icon={icon1} title={'2,22,343'} description={'Members'}/>
        <Card icon={icon2} title={'823,234'} description={'Events Bookings'}/>
        <Card icon={icon3} title={'43,343'} description={'Clubs'}/>
        <Card icon={icon4} title={'1,123,2331'} description={'Payouts'}/>
      </div>
    </div>
    </div>
  );
};
