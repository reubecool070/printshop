import React from "react";

const usePreventLeave = () => {
  const listener = (event: any) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const useConfirmation = (
  message: string,
  callback: () => void,
  rejection: () => void
) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      return callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

const UseConfirm = () => {
  const deleteMsg = () => console.log("Deleted");
  const aborted = () => console.log("aborted");
  const handleDelete = useConfirmation("Are you sure", deleteMsg, aborted);

  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <>
      <button onClick={handleDelete}>Delete it</button>
      <button onClick={enablePrevent}>Prevent it</button>
      <button onClick={disablePrevent}>Disable it</button>
    </>
  );
};

export default UseConfirm;
