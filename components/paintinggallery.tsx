"use client";

import { useState } from "react";
import PaintingCard from "@/components/paintingcard";
import PaintingLightbox from "@/components/zoompainting";

type Painting = {
  id: string;
  image: string;
  title: string;
  paintType: string;
  size: string;
};

type PaintingGalleryProps = {
  paintings: Painting[];
};

export default function PaintingGallery({
  paintings,
}: PaintingGalleryProps) {
  const [page, setPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const perPage = 21;
  const totalPages = Math.ceil(paintings.length / perPage);

  const shownPaintings = paintings.slice(
    (page - 1) * perPage,
    page * perPage
  );

  function changePage(newPage: number) {
    setPage(newPage);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {shownPaintings.map((painting, index) => {
          const actualIndex = (page - 1) * perPage + index;

          return (
            <PaintingCard
              key={painting.id}
              image={painting.image}
              title={painting.title}
              paintType={painting.paintType}
              size={painting.size}
              onClick={() => setSelectedIndex(actualIndex)}
            />
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="mt-15 flex justify-center gap-1">
          {page > 1 && (
            <button
              type="button"
              onClick={() => changePage(page - 1)}
              className="cursor-pointer px-5 py-4 text-[#2F2A26] transition-colors duration-300 hover:text-[#5f5555]"
              aria-label="Previous page"
            >
              ←
            </button>
          )}

          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;

            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => changePage(pageNumber)}
                className={
                  page === pageNumber
                    ? "cursor-pointer bg-[#2F2A26] px-5 py-4 text-white opacity-80"
                    : "cursor-pointer px-5 py-4 text-black transition-colors duration-300 hover:text-[#5f5555]"
                }
                aria-current={page === pageNumber ? "page" : undefined}
              >
                {pageNumber}
              </button>
            );
          })}

          {page < totalPages && (
            <button
              type="button"
              onClick={() => changePage(page + 1)}
              className="cursor-pointer px-5 py-4 text-[#2F2A26] transition-colors duration-300 hover:text-[#5f5555]"
              aria-label="Next page"
            >
              →
            </button>
          )}
        </div>
      )}

      <PaintingLightbox
        paintings={paintings}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </>
  );
}