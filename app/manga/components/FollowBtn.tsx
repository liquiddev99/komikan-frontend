"use client";
import { IoLibraryOutline } from "react-icons/io5";

export default function FollowBtn() {
  return (
    <button
      onClick={() => {}}
      className="mt-5 mb-4 bg-teal-500 rounded-lg px-6 py-1 flex items-center font-semibold text-slate-100"
    >
      Follow
      <IoLibraryOutline className="h-6 w-6 ml-2" />
    </button>
  );
}
