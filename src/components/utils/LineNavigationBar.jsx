import React from "react";
import LineNavigationBarLinks from "./LineNavigationBarLinks";

const LineNavigationBar = () => {
  return (
    <div>
      <div className="flex flex-row gap-3.5">
        <LineNavigationBarLinks text={"All"} isActive={true}/>
        <LineNavigationBarLinks text={"Music"} />
        <LineNavigationBarLinks text={"Entertainment"} />
        <LineNavigationBarLinks text={"Videos"} />
      </div>
      <div className="h-px bg-gray-300" /> 
    </div>
  );
};

export default LineNavigationBar;