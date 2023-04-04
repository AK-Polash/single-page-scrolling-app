import React, { useState, useEffect } from "react";
import { Events, scrollSpy, animateScroll } from "react-scroll";
import Content from "./components/Content";
import Navigation from "./components/Navigation";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isScrolled = scrollTop >= 200;
      setHasScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("scroll", handleScroll);
    scrollSpy.update();
    animateScroll.scrollToTop();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navigation hasScrolled={hasScrolled} />
      <Content />
      <ScrollToTopButton hasScrolled={hasScrolled} />
    </>
  );
};

export default App;
