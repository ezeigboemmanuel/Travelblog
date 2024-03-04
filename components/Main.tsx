import React from "react";
import Countries from "./Countries";
import RightContents from "./RightContents";
import LeftContents from "./LeftContents";

type Props = {
  posts: Post[]
}
const Main = ({posts}: Props) => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-row w-[90vw]">
      <div className="basis-[60%]">
        <LeftContents posts={posts} />
      </div>
      <div className="basis-[40%]">
        <RightContents posts={posts} />
      </div>
      </div>

    </div>
  );
};

export default Main;
