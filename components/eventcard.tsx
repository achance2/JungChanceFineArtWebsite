import Link from "next/link";
import Image from "next/image";

type EventCardProps = {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  phone: string;
  website: string;
};

export default function EventCard({
  image,
  title,
  date,
  time,
  location,
  address,
  phone,
  website,
}: EventCardProps) {
  return (
    <article className="grid overflow-hidden border border-black/10">
      <div className="relative min-h-[500] bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-8 py-10 text-center">
        <div className="space-y-3 font-semibold text-[#5B5149] tracking-[0.16em] uppercase">
          <h3 className="text-lg font-bold">
            {title}
          </h3>

          <p className="text-base">
            {date}
          </p>

          {time && (
            <p className="text-base">
              {time}
            </p>
          )}

          <div className="pt-4">
            <p className="text-base font-bold">
              {location}
            </p>

            <p className="mt-2 text-base leading-relaxed normal-case">
              {address}
            </p>
          </div>

          {phone && (
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="block pt-2 text-base"
            >
              {phone}
            </a>
          )}

          {website && (
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border-b border-[#5f5555] pb-1"
            >
              View Website
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}