import { useState } from "react";
import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
}

export default function ChapterImage({ src, alt }: IProps) {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(1300);
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoadingComplete={(img) => {
        setWidth(
          img.naturalWidth >= 500 && img.naturalWidth < img.naturalHeight
            ? img.naturalWidth * 1.5
            : img.naturalWidth * 2
        );
        setHeight(
          img.naturalWidth >= 500 && img.naturalWidth < img.naturalHeight
            ? img.naturalHeight * 1.5
            : img.naturalHeight * 2
        );
      }}
    />
  );
}
