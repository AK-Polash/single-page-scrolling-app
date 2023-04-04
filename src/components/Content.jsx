import React from "react";
import { Element } from "react-scroll";

const Content = () => {
  return (
    <>
      <Element name="home">
        <div className="flex h-screen items-center justify-center bg-[#6a89cc]">
          <h1>Home</h1>
        </div>
      </Element>

      <Element name="about">
        <div className="flex h-screen items-center justify-center bg-[#f8c291]">
          <h1>About</h1>
        </div>
      </Element>

      <Element name="contact">
        <div className="flex h-screen items-center justify-center bg-[#60a3bc]">
          <h1>Contact</h1>
        </div>
      </Element>
    </>
  );
};

export default Content;
