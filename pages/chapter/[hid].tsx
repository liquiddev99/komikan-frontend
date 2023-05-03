import { useComickPages } from "@/hooks/manga";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Chapter() {
  const router = useRouter();
  const hid = router.query.hid as string;

  const { chapter } = useComickPages(hid);

  console.log(chapter);

  return (
    <div className="layout">
      <div className="flex flex-col justify-center items-center min-h-[60rem]">
        {chapter &&
          chapter.chapter.md_images.map((page, index) => (
            <Image
              src={`https://meo.comick.pictures/${page.b2key}`}
              alt="Page"
              key={index}
              width={page.w > 1000 ? page.w * 0.8 : page.w}
              height={page.w > 1000 ? page.h * 0.8 : page.h}
              unoptimized
            />
          ))}
      </div>
    </div>
  );
}
