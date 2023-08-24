"use client";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useRouter } from "next/navigation";
import { IoLibraryOutline } from "react-icons/io5";

interface Props {
  accessToken: RequestCookie | undefined;
}

export default function FollowBtn({ accessToken }: Props) {
  const router = useRouter();
  function followManga() {
    if (!accessToken) {
      router.push("/login");
      return;
    }
  }
  return (
    <button
      onClick={followManga}
      className="mt-5 mb-4 bg-teal-500 rounded-lg px-6 py-1 flex items-center font-semibold text-slate-100"
    >
      Follow
      <IoLibraryOutline className="h-6 w-6 ml-2" />
    </button>
  );
}
