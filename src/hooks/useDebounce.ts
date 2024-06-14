import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number = 500) => {
  const [debounceValue, setDebounseValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounseValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
