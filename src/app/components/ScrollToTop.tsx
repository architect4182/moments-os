import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window (for pages like Landing where the body scrolls)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Scroll main content area (for dashboard layout where <main> scrolls)
    const mainContent = document.querySelector("main");
    if (mainContent) {
      mainContent.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname]);

  return null;
}
