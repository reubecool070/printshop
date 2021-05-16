import React, { useState } from "react";

const useInput = (initialValue: any, validator: (value: string) => boolean) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof validator == "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const CustomHooks = () => {
  // const name = useInput("Mr.", (value) => value.length <= 10);
  const name = useInput(
    "Mr.",
    (value) => !value.includes("@") && !value.includes("a")
  );
  return (
    <>
      <h1>testing input hooks</h1>
      <input spellCheck={false} placeholder="name" {...name} />
    </>
  );
};

export default CustomHooks;
