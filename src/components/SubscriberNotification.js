import { useEffect, useState } from "react";

export default function SubscriberNotification() {
  const [isClosed, setIsClosed] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) {
      setIsNavbarHidden(true);
      return undefined;
    }

    const updatePosition = () => {
      setIsNavbarHidden(navbar.classList.contains("nav-hidden"));
    };

    updatePosition();
    const observer = new MutationObserver(updatePosition);
    observer.observe(navbar, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  if (isClosed) return null;

  return (
    <aside
      className={`subscriber-notification ${isNavbarHidden ? "navbar-is-hidden" : ""}`}
      aria-label="Subscriber milestone"
    >
      <button
        className="close-btn"
        onClick={() => setIsClosed(true)}
        aria-label="Close subscriber thank-you"
      ></button>

      <span className="subscriber-notification-kicker">A little celebration</span>
      <strong>1,000 subscribers!</strong>
        <p>Thank you so much for all your support! I appreciate every single one of you.</p>
    </aside>
  );
}