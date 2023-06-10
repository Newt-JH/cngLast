import React from "react";
import useScrollPosition from "../hooks/useScrollPosition";

export default function TopButton() {
  const [scrollPosition] = useScrollPosition();

  const handleButtonClick = () => {
    console.log("called");
    window.scrollTo(0, 0);
  };
  return (
    <button
      className="top_btn animate-bounce"
      style={{
        display: scrollPosition > 80 ? "inline-block" : "none",
        cursor: "pointer",
        zIndex: 1000,
      }}
      onClick={handleButtonClick}
    >
      <i className="material-icons-round sm:text-3xl">arrow_upward</i>
    </button>
  );
}
