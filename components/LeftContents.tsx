import React from "react";
import Countries from "./Countries";
import About from "./About";
import Featured from "./Featured";
import BlogList from "./BlogList";

type Props = {
  posts: Post[]
}

const LeftContents = ({posts}: Props) => {
  return (
    <div className="my-10">
      <Countries />
      <About />
      <Featured posts={posts} />
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
