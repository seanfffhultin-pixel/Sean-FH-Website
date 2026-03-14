import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const prevPath = prevPathRef.current;
    const isReviewPage = (path) => path.startsWith("/review-pages/");

    if (prevPath !== pathname) {
      if (isReviewPage(prevPath) || isReviewPage(pathname)) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }

    prevPathRef.current = pathname;
  }, [pathname]);

  return null;
}
