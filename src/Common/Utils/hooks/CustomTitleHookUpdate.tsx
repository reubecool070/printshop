import React, { useEffect, useState } from "react";

const useTitle = (initialValue: string) => {
  const [title, setTitle] = useState(initialValue);

  const handleTitle = () => {
    const titleSelect = document.querySelector("title");
    if (titleSelect) {
      titleSelect.innerText = title;
    }
  };

  useEffect(handleTitle, [title]);

  return setTitle;
};

const CustomTitleHookUpdate = () => {
  const titleUpdater = useTitle("Loading...");

  setTimeout(() => titleUpdater("PrintShop Nepal"), 2000);

  return (
    <>
      <h1>look how tilte changes</h1>
    </>
  );
};

export default CustomTitleHookUpdate;
