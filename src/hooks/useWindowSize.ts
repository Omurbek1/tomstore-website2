"use client";

import { useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";

export default function useWindowSize() {
  const [width, setWidth] = useState(0);

  const windowListener = useMemo(() => debounce(() => setWidth(window.innerWidth), 250), []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setWidth(window.innerWidth);
    window.addEventListener("resize", windowListener);

    return () => {
      window.removeEventListener("resize", windowListener);
    };
  }, [windowListener]);

  return width;
}
