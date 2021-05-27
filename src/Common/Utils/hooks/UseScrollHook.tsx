import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const onScroll = () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return scroll;
};

const UseScrollHook = () => {
  const { y } = useScroll();

  return (
    <>
      <div style={{ height: "100vh" }}>
        <h1 style={{ color: y > 100 ? "red" : "blue", position: "fixed" }}>
          Scroll Effect
        </h1>
      </div>
    </>
  );
};

export default UseScrollHook;
