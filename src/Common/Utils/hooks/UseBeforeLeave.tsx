import React, { useEffect } from "react";

const useLeave = (beforeLeave: () => void) => {
  const watchLeave = (event: any) => {
    const { clientY } = event;
    if (clientY <= 0) {
      beforeLeave();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", watchLeave);
    return () => document.removeEventListener("mouseleave", watchLeave);
  }, []);
};

const UseBeforeLeave = () => {
  useLeave(() => console.log("leaving"));
  return <h1>Hello there</h1>;
};

export default UseBeforeLeave;
