import { fetchImagesChapter } from "@/app/utils/manga";
import ChapterImage from "./ChapterImage";

interface Props {
  chapterId: string;
}
export default async function ChapterImages({ chapterId }: Props) {
  const images = await fetchImagesChapter(chapterId);

  return (
    <>
      {images &&
        images.chapter.dataSaver.map((image, index) => (
          <ChapterImage
            key={image}
            src={`https://uploads.mangadex.org/data-saver/${images.chapter.hash}/${image}`}
            alt="Image"
            initPriority={index === 0 ? true : false}
          />
        ))}
    </>
  );
}
