import { useEffect, useRef } from "react";

const ScrollBar = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScrollBar = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.clientHeight;

      const scrollValue =
        bodyHeight > windowHeight ? scrollTop / (bodyHeight - windowHeight) : 0;

      const scrollRoundedPercent = Math.floor(scrollValue * 100);

      if (scrollRef.current) {
        scrollRef.current.style.width = `${scrollRoundedPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScrollBar);

    return () => {
      window.removeEventListener("scroll", handleScrollBar);
    };
  }, []);

  return <div ref={scrollRef} className="scrolled" />;
};

export default ScrollBar;
