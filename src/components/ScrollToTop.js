import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const isReviewPage = (path) => path.startsWith("/review-pages/");

    const prevPath = prevPathRef.current;

    if (prevPath !== pathname) {
      if (isReviewPage(prevPath) || isReviewPage(pathname)) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }

    prevPathRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    const isReviewPage = (path) => path.startsWith("/review-pages/");

    if (isReviewPage(pathname)) {
      return;
    }

    const handleClick = (e) => {
      const link = e.target.closest("a");
      if (link && link.getAttribute("href") === pathname) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
