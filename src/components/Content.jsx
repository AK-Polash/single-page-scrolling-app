import React from "react";
import { Element } from "react-scroll";

const Content = () => {
  return (
    <>
      <Element name="home">
        <div className="h-screen bg-[#f8c291]">
          <h1>Section 1</h1>
          <p>This is the content for section 1.</p>
        </div>
      </Element>

      <Element name="about">
        <div className="h-screen bg-[#6a89cc]">
          <h1>Section 2</h1>
          <p>This is the content for section 2.</p>
        </div>
      </Element>

      <Element name="contact">
        <div className="h-screen bg-[#60a3bc]">
          <h1>Section 3</h1>
          <p>This is the content for section 3.</p>
        </div>
      </Element>
    </>
  );
};

export default Content;
