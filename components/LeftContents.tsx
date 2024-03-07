import React from "react";
import Countries from "./Countries";
import About from "./About";
import Featured from "./Featured";
import BlogList from "./BlogList";
import Recommended from "./Recommended";

type Props = {
  posts: Post[]
}

const LeftContents = ({posts}: Props) => {
  return (
    <div className="my-10">
      <Countries />
      <div className="md:hidden bg-white p-3">
        <div className="flex justify-center mx-auto items-center bg-gradient-to-b from-gray-500 to-gray-50 h-full max-w-md">
          <div className="h-[99%] w-[99%] bg-white m-[2px] p-8">
            <p className="text-baseColor text-center pb-5 font-semibold">
              Enchanting Maldives: <br /> Paradise Found
            </p>
            <p>In the heart of the Indian Ocean lies a paradise beyond compare – the Maldives. Picture-perfect atolls adorned with powdery white sand beaches and crystal-clear turquoise waters beckon travelers to indulge in the ultimate tropical escape. Each luxurious overwater villa or beachfront bungalow offers a sanctuary of serenity, where the gentle lull of the waves lulls guests into a state of blissful relaxation.</p>
          </div>
        </div>
      </div>
      <About />
      <Featured posts={posts} />

      <div className="md:hidden">
      <Recommended posts={posts} />
      </div>
      <div className="text-center">
        <p className="bg-[url('../public/assets/textimg2.png')] bg-clip-text text-transparent font-extrabold font-sans text-5xl text-center">
          FOLLOW YOUR DREAMS
        </p>
      </div>
      <BlogList posts={posts} />
    </div>
  );
};

export default LeftContents;
