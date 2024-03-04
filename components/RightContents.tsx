import React from "react";
import InstaCard from "./InstaCard";
import Recommended from "./Recommended";

type Props = {
  posts: Post[]
}

const RightContents = ({posts}: Props) => {
  return (
    <div className="mx-10 bg-black h-28 -mt-12 z-10">
      {/* Brief Description */}
      <div className="bg-white p-3">
        <div className="flex justify-center items-center bg-gradient-to-b from-gray-500 to-gray-50 h-[26rem] w-96">
          <div className="h-[99%] w-[99%] bg-white p-8">
            <p className="text-baseColor text-center pb-5 font-semibold">
              Enchanting Maldives: <br /> Paradise Found
            </p>
            <p>In the heart of the Indian Ocean lies a paradise beyond compare – the Maldives. Picture-perfect atolls adorned with powdery white sand beaches and crystal-clear turquoise waters beckon travelers to indulge in the ultimate tropical escape. Each luxurious overwater villa or beachfront bungalow offers a sanctuary of serenity, where the gentle lull of the waves lulls guests into a state of blissful relaxation.</p>
          </div>
        </div>
      </div>

      {/* Instagram card */}
      <InstaCard />

      <Recommended posts={posts} />
    </div>
  );
};

export default RightContents;
