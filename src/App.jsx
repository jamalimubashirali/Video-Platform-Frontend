import React from "react";
import Button from "./components/utils/Button";
import DropdownMenu from "./components/utils/DropdownMenu";
import MainHeading from "./components/utils/MainHeading";
import LineNavigationBar from "./components/utils/LineNavigationBar";

function App() {

  return (
    <>
      <Button text={"Hello"} color={"Black"} icon={"This is Icon"}/>
      <DropdownMenu name={"test drop down"} options={["1" , "2" , "3"]}/>
      <MainHeading text={"Main Heading"}/>
      <LineNavigationBar />
    </>
  )
}

export default App;
