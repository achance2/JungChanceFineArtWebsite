"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Painting = {
  image: string;
  title: string;
  paintType: string;
  size: string;
};

type PaintingLightboxProps = {
  paintings: readonly Painting[];
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function PaintingLightbox({
  paintings,
  selectedIndex,
  setSelectedIndex,
}: PaintingLightboxProps) {
  const [direction, setDirection] = useState(1);

  const selectedPainting =
    selectedIndex !== null ? paintings[selectedIndex] : null;

  function showPrevious() {
    if (selectedIndex === null) return;

    setDirection(-1);

    setSelectedIndex(
      selectedIndex === 0 ? paintings.length - 1 : selectedIndex - 1
    );
  }

  function showNext() {
    if (selectedIndex === null) return;

    setDirection(1);

    setSelectedIndex(
      selectedIndex === paintings.length - 1 ? 0 : selectedIndex + 1
    );
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setDirection(-1);

        setSelectedIndex(
          selectedIndex === 0 ? paintings.length - 1 : selectedIndex - 1
        );
      }

      if (event.key === "ArrowRight") {
        setDirection(1);

        setSelectedIndex(
          selectedIndex === paintings.length - 1 ? 0 : selectedIndex + 1
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, paintings.length, setSelectedIndex]);

  if (!selectedPainting || selectedIndex === null) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-14 py-8"
      onClick={() => setSelectedIndex(null)}
    >
      <button
        type="button"
        onClick={() => setSelectedIndex(null)}
        className="absolute right-6 top-5 z-20 cursor-pointer text-4xl font-light text-white transition-colors duration-300 hover:text-[#d8d0c8]"
        aria-label="Close painting"
      >
        ×
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          showPrevious();
        }}
        className="absolute left-3 z-20 cursor-pointer px-4 py-8 text-5xl font-light text-white transition-colors duration-300 hover:text-[#d8d0c8] md:left-8"
        aria-label="Previous painting"
      >
        ‹
      </button>

      <div
        className="relative h-[calc(80vh+3rem)] w-full max-w-6xl overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={selectedIndex}
            custom={direction}
            initial={{
              x: direction > 0 ? "100%" : "-100%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: direction > 0 ? "-100%" : "100%",
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <div className="relative h-[80vh] w-full">
              <Image
                src={selectedPainting.image}
                alt={selectedPainting.title}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-3 text-center text-white">
              <p className="text-sm uppercase tracking-[0.18em]">
                {selectedPainting.title}
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">
                {selectedPainting.paintType} · {selectedPainting.size}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          showNext();
        }}
        className="absolute right-3 z-20 cursor-pointer px-4 py-8 text-5xl font-light text-white transition-colors duration-300 hover:text-[#d8d0c8] md:right-8"
        aria-label="Next painting"
      >
        ›
      </button>
    </div>
  );
}