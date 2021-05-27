import React, { useRef } from "react";

interface Document {
  //  exitFullscreen: () => void;
  //  mozCancelFullScreen: () => void;
  //  webkitExitFullscreen: () => void;
  // msExitFullscreen: () => void;
  // mozFullScreenElement: () => void;
  // webkitFullscreenElement: () => void;
  mozCancelFullScreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
  webkitExitFullscreen?: () => Promise<void>;
  exitFullscreen?: () => Promise<void>;
}

const useFullScreen = (callback: (value: boolean) => void) => {
  const element = useRef<any>();

  const onFull = (event: any) => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullsreen) {
        element.current.msRequestFullsreen();
      }

      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };

  const onExit = () => {
    const doc: Document = window.document;
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    }
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };

  return { element, onFull, onExit };
};

const UseFullScreenHook = () => {
  const onCallback = (value: boolean) => {
    if (value) {
      console.log("fullscreen");
    } else {
      console.log("exit");
    }
  };

  const { element, onFull, onExit } = useFullScreen(onCallback);

  return (
    <div>
      <div ref={element}>
        <img src="https://source.unsplash.com/random/1200x400" alt="" />
        <button onClick={onExit}>exit</button>
      </div>
      <button onClick={onFull}>fullscrenn</button>
    </div>
  );
};

export default UseFullScreenHook;
