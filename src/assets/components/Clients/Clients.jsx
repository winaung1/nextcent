import React from "react";
import client1 from "../../../assets/clients/Logo (2).png";
import client2 from "../../../assets/clients/Logo (3).png";
import client3 from "../../../assets/clients/Logo (4).png";
import client4 from "../../../assets/clients/Logo (5).png";
import client5 from "../../../assets/clients/Logo (6).png";
import client6 from "../../../assets/clients/Logo (7).png";
import img1 from "../../Frame 35.png";
import { Suitable } from "./Suitable/Suitable";
export const Clients = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-semibold">Our Clients</h1>
      <p className="text-center text-sm opacity-60 py-2">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex justify-between max-w-7xl py-4 mx-auto">
        <img src={client1} alt="" />
        <img src={client2} alt="" />
        <img src={client3} alt="" />
        <img src={client4} alt="" />
        <img src={client5} alt="" />
        <img src={client6} alt="" />
      </div>
      <Suitable />

      <div className="md:flex items-center space-x-6 max-w-7xl mx-auto">
        <img className="w-fit mx-auto md:w-[500px]" src={img1} alt="" />
        <div className="md:w-1/2">
          <h1 className="font-semibold text-2xl">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="py-4 text-sm opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sequi
            neque iusto molestiae? Natus tempore deleniti maxime quisquam
            similique modi adipisci nobis quaerat dolores totam consequuntur,
            explicabo iusto. Aspernatur pariatur ratione similique!
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};
