import Image from "next/image";

type PaintingCardProps = {
  image: string;
  title: string;
  paintType: string;
  size: string;
  onClick: () => void;
};

export default function PaintingCard({
  image,
  title,
  paintType,
  size,
  onClick,
}: PaintingCardProps) {
  return (
    <div className="text-center">
      <button
        type="button"
        onClick={onClick}
        aria-label={`View ${title}`}
        className="group block w-full cursor-pointer"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-75"
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          </div>
        </div>
      </button>

      <div className="mt-4 space-y-1 text-[#5f5555] tracking-[0.16em] uppercase">
        <h3 className="text-lg font-bold">
          {title}
        </h3>

        <p className="text-base font-semibold text-[#9c8f8f]">
          {paintType}
        </p>

        <p className="text-base font-semibold text-[#9c8f8f]">
          {size}
        </p>
      </div>
    </div>
  );
}