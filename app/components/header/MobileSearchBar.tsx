"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  closeMenu: Function;
}

export default function MobileSearchBar({ closeMenu }: Props) {
  const router = useRouter();
  const [textSearch, setTextSearch] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextSearch(e.target.value);
  }
  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!textSearch) return;
    closeMenu();
    router.push(`/search?q=${textSearch}`);
  }

  return (
    <form
      onSubmit={onSearch}
      className="bg-slate-800 flex items-center rounded-md"
    >
      <input
        type="text"
        placeholder="Search Manga"
        className="bg-slate-800 px-4 py-1 pr-0 rounded-md outline-none w-full"
        value={textSearch}
        onChange={handleChange}
      />
      <button type="submit" className="px-2.5">
        <AiOutlineSearch className="h-6 w-6 text-slate-400" />
      </button>
    </form>
  );
}
