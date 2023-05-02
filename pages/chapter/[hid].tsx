import { useComickPages } from "@/hooks/manga";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Chapter() {
  const router = useRouter();
  const hid = router.query.hid as string;

  const { pages } = useComickPages(hid);

  console.log("pages", pages);

  return (
    <div className="layout">
      <div className="flex flex-col justify-center items-center">
        {pages &&
          pages.map((page, index) => (
            <Image
              src={`https://meo.comick.pictures/${page.b2key}`}
              alt="Page"
              key={index}
              width={page.w * 0.8}
              height={page.h * 0.8}
              unoptimized
            />
          ))}
      </div>
    </div>
  );
}
