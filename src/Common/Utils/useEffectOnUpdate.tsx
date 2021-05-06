import { useEffect, useRef } from "react";

export const useEffectOnUpdate = (
  effect: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effect();
    }
  });
};
