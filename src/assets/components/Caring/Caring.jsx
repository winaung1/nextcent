import React from "react";
import { Card } from "./Card";
import img4 from "../../../assets/caring/image 18.png";
import img5 from "../../../assets/caring/image 19.png";
import img6 from "../../../assets/caring/image 20.png";
export const Caring = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-semibold">Caring is the new marketing</h1>
      <p className="py-2  text-sm opacity-60 w-3/4 lg:w-1/2 mx-auto">
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are inscreasing their membership income and lot's
        more.
      </p>
      <div className="flex flex-col gap-4 md:flex-row items-center justify-center md:space-x-4 max-w-7xl mx-auto p-4">
        <Card
          img={img4}
          description={
            "Creating Streamlined Safeguarding Processes with OneRen"
          }
        />
        <Card
          img={img5}
          description={
            "What are your safeguarding responsibilities and how can you manage them?"
          }
        />
        <Card
          img={img6}
          description={
            "Revamping the Membership Model with Triathlon Australia"
          }
        />
      </div>
    </div>
  );
};
