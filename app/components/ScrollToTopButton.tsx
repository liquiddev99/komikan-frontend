"use client";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function ScrollToTopButton() {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      className="fixed bottom-8 right-8 bg-black/30 rounded-full p-2"
      onClick={handleClick}
    >
      <AiOutlineArrowUp className="h-6 w-6" />
    </button>
  );
}
