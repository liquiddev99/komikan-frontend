"use client";
import ChapterTable from "./ChapterTable";
import { useMangadexIds } from "@/app/hooks/mangadex";

interface IProps {
  malId: number | null | undefined;
}
export default async function ListChapters({ malId }: IProps) {
  const { mangadexIds, error } = useMangadexIds(malId);

  if (error) {
    return <div></div>;
  }

  return (
    <div>
      {mangadexIds && mangadexIds.length > 1 && (
        <h3 className="text-2xl font-bold mb-4 text-green-500">
          {mangadexIds.length} variants of manga found
        </h3>
      )}

      {mangadexIds &&
        mangadexIds.map((mangadexId, index) => (
          <ChapterTable mangadexId={mangadexId} key={index} />
        ))}
    </div>
  );
}
