"use client";

import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH = 767;

function getIsMobile() {
  return window.innerWidth <= MOBILE_MAX_WIDTH;
}

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return getIsMobile();
  });

  useEffect(() => {
    function handleResize() {
      setIsMobile(getIsMobile());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
