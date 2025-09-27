import React from "react";
import { Header } from "../Other/Header";
import { TasklistNumber } from "../Other/TasklistNumber";
import { Tasklist } from "../Tasklist/Tasklist";

export const Empoly = () => {
  return (
    <>
    <div className=" p-10 bg-[#1c1c1c] h-screen">

      <Header/>
      <TasklistNumber />
      <Tasklist />
    </div>
     
    </>
  );
};
