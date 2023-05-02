import { showStatus } from "@/utils/manga";

interface Props {
  status: string;
}

export default function Status({ status }: Props) {
  if (status === "RELEASING")
    return (
      <span className="px-4 py-1 bg-green-500 rounded-full text-sm text-white font-semibold">
        {showStatus(status)}
      </span>
    );
  if (status === "FINISHED")
    return (
      <span className="px-4 py-1 bg-rose-500 rounded-full text-sm text-white font-semibold">
        {showStatus(status)}
      </span>
    );
  if (status === "HIATUS")
    return (
      <span className="px-4 py-1 bg-gray-500 rounded-full text-sm text-white font-semibold">
        {showStatus(status)}
      </span>
    );

  if (status === "CANCELLED")
    return (
      <span className="px-4 py-1 bg-gray-500 rounded-full text-sm text-white font-semibold">
        {showStatus(status)}
      </span>
    );

  return (
    <span className="px-4 py-1 rounded-full text-sm text-white font-semibold">
      {showStatus(status)}
    </span>
  );
}
