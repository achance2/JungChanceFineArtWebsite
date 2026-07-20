import Image from "next/image";
import Link from "next/link";

type GalleryCardProps = {
  image: string;
  name: string;
  address: string;
  location: string;
  phone: string;
  website: string;
};

export default function GalleryCard({
  image,
  name,
  address,
  location,
  phone,
  website,
}: GalleryCardProps) {
  return (
    <Link
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name}`}
      className="grid overflow-hidden border border-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#d8d0c8] hover:shadow-md md:grid-cols-2"
    >
      <div className="relative min-h-[260px] overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-8 py-10 text-center md:text-left tracking-[0.16em]">
        <h3 className="text-lg font-bold uppercase text-[#5f5555]">
          {name}
        </h3>

        <div className="mt-5 space-y-1 text-base font-semibold text-[#5B5149]">
          <p>{address}</p>
          <p>{location}</p>

          {phone && <p className="pt-3">{phone}</p>}
        </div>
      </div>
    </Link>
  );
}