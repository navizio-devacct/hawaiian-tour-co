import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // or 'next/router' for Next.js

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
