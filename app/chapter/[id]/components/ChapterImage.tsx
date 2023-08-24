"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
  initPriority: boolean;
}

export default function ChapterImage({ src, alt, initPriority }: IProps) {
  const [hide, setHide] = useState(true);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(1300);
  const [retry, setRetry] = useState(0);
  const [priority, setPriority] = useState(initPriority);
  function handleError() {
    if (retry > 3) return;
    setRetry(retry + 1);
  }

  useEffect(() => {
    setTimeout(() => {
      if (!priority) setPriority(true);
    }, 7000);
  }, [priority]);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${hide ? "opacity-0" : ""}`}
      priority={priority}
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
        setHide(false);
      }}
      onError={handleError}
    />
  );
}
