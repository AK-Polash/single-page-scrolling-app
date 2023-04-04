import React from "react";
import { animateScroll } from "react-scroll";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";

const ScrollToTopButton = ({ hasScrolled }) => {
  return (
    <button
      className={
        hasScrolled
          ? "opacity-1 fixed bottom-7 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-red-400 text-2xl text-white transition-all duration-200 ease-linear"
          : "fixed bottom-16 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-red-400 text-2xl text-white opacity-0 transition-all duration-200 ease-linear"
      }
      onClick={() => animateScroll.scrollToTop()}
      title="scroll up"
    >
      <HiOutlineArrowSmallUp />
    </button>
  );
};

export default ScrollToTopButton;
