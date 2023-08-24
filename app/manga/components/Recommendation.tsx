"use client";
import useEmblaCarousel from "embla-carousel-react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";

import { IDetailManga } from "@/app/types/manga";
import Status from "@/app/components/Status";

interface Props {
  manga: IDetailManga;
}

export default function Recommendation({ manga }: Props) {
  const [emblaRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div>
      {manga.recommendations.edges.length ? (
        <div className="mt-8">
          <div className="mb-3 text-2xl font-semibold text-teal-500">
            Recommendations
          </div>
          <div className="embla mt-3 relative" ref={emblaRef}>
            <div className="embla__container cursor-move">
              {manga.recommendations.edges.map((recommendation) => (
                <div
                  className="grow-0 shrink-0 basis-1/3 xs:basis-1/4 sm:basis-1/5 md:basis-1/5 lg:basis-1/6 xl:basis-[14%] mx-3 first:ml-0"
                  key={v4()}
                >
                  {recommendation.node.mediaRecommendation && (
                    <Link
                      href={`/manga/${recommendation.node.mediaRecommendation.id}`}
                      key={v4()}
                    >
                      <div className="rounded-md flex flex-col h-full overflow-hidden">
                        <div className="flex w-full pb-[140%] relative">
                          <Image
                            src={
                              recommendation.node.mediaRecommendation.coverImage
                                .large
                            }
                            alt="Cover"
                            fill
                            sizes="20vw"
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex flex-col flex-grow justify-between py-2">
                          <span className="font-semibold line-clamp-2">
                            {recommendation.node.mediaRecommendation.title
                              .userPreferred ||
                              recommendation.node.mediaRecommendation.title
                                .english}
                          </span>

                          <div className="mt-2">
                            <Status
                              status={
                                recommendation.node.mediaRecommendation.status
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <AiOutlineArrowRight
              onClick={() => {
                embla?.scrollTo(embla.selectedScrollSnap() + 5);
              }}
              className="w-11 h-11 absolute top-1/3 right-1 z-10 rounded-full bg-black/70 p-2.5 cursor-pointer hover:bg-black/90"
            />
            <AiOutlineArrowLeft
              onClick={() => {
                embla?.scrollTo(embla.selectedScrollSnap() - 5);
              }}
              className="w-11 h-11 absolute top-1/3 left-1 z-10 rounded-full bg-black/70 p-2.5 cursor-pointer hover:bg-black/90"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
