import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Optional: listen for clicks on same-page links
    const handleClick = (e) => {
      const link = e.target.closest("a");
      if (link && link.getAttribute("href") === pathname) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
