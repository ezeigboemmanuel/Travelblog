import React from "react";
import Countries from "./Countries";
import RightContents from "./RightContents";
import LeftContents from "./LeftContents";

type Props = {
  posts: Post[];
};
const Main = ({ posts }: Props) => {
  return (
    <div className="flex justify-center w-[90vw] mx-auto">
      <div className="md:flex md:flex-row">
        <div className="md:basis-[60%]">
          <LeftContents posts={posts} />
        </div>
        <div className="md:basis-[40%]">
          <RightContents posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Main;
