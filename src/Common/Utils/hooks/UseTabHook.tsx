import React, { useState } from "react";

const content = [
  { tab: "section 1", section: "This is the section 1" },
  { tab: "section 2", section: "This is the section 2" },
  { tab: "section 3", section: "This is the section 3" },
];

const useTab = (
  intialTab: number,
  allTabs: { tab: string; section: string }[]
) => {
  const [currentIndex, setCurrentIndex] = useState(intialTab);

  // if (!allTabs || !Array.isArray(allTabs)) {
  //   return; //checking if the content is in array or not
  // }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const UseTabHook = () => {
  const { currentItem, changeItem } = useTab(0, content);

  return (
    <div>
      {content.map((elem, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {elem.tab}
        </button>
      ))}
      <div>{currentItem.section}</div>
    </div>
  );
};

export default UseTabHook;
