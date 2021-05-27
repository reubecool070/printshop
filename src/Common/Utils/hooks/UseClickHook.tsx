import React, { useEffect, useRef } from "react";

const useClick = (onClick: () => void) => {
  const element = useRef<any>();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const UseClickHook = () => {
  const sayHello = () => {
    alert("Hello");
  };

  const title = useClick(sayHello);

  return (
    <>
      <h1 ref={title}>Hello there</h1>
    </>
  );
};

export default UseClickHook;
