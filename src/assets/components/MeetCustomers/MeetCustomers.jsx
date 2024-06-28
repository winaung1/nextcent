import React from "react";
import img3 from "../../image 9.png";
import client1 from "../../../assets/clients/Logo (2).png";
import client2 from "../../../assets/clients/Logo (3).png";
import client3 from "../../../assets/clients/Logo (4).png";
import client4 from "../../../assets/clients/Logo (5).png";
import client5 from "../../../assets/clients/Logo (6).png";
import client6 from "../../../assets/clients/Logo (7).png";
import { FaArrowRight } from "react-icons/fa";
export const MeetCustomers = () => {
  return (
    <div className="silver">

    <div className="md:flex justify-between items-center p-4 md:space-x-6 max-w-7xl mx-auto">
      <div className="md:w-1/2">
        <p className="opacity-60 text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          praesentium sint repellat beatae consequatur accusantium expedita
          debitis amet qui, reiciendis nulla aut magni harum velit aliquid
          nostrum nesciunt assumenda vitae! Non obcaecati architecto ipsa velit
          repudiandae quaerat sunt, sequi error optio a corrupti iusto
          aspernatur quisquam illum at ab atque suscipit ea. In molestias
          excepturi expedita animi consectetur error. Eaque!
        </p>
        <h1 className="green font-semibold py-2">Tim Smith</h1>
        <p className="opacity-60">British Dragon Boat Racing Association</p>
        <div className="flex  items-center space-x-2 md:space-x-4">
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
          <img src={client5} alt="" />
          <img src={client6} alt="" />
          <h3 className="green">Meet all customers</h3>
          <FaArrowRight className="green"/>
        </div>
      </div>
      <img className="w-fit mx-auto md:w-[400px] lg:w-[500px]" src={img3} alt="" />
    </div>
    </div>
  );
};
