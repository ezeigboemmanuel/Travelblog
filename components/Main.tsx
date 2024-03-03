import React from "react";
import Countries from "./Countries";
import RightContents from "./RightContents";
import LeftContents from "./LeftContents";

const Main = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-row w-[90vw]">
      <div className="basis-[60%]">
        <LeftContents />
      </div>
      <div className="basis-[40%]">
        <RightContents />
      </div>
      </div>

    </div>
  );
};

export default Main;
