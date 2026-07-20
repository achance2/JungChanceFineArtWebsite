type AwardProps = {
    award: string | null;
    event: string;
    location: string;
    paintings: string[];
}
export default function AwardCard({
  award,
  event,
  location,
  paintings,
}: AwardProps) {
    return(
        <article className = "border border-[#d8d0c8] bg-white p-6">
            {award && (
                <p className="mt-lg text-lg font-medium text-[#5f5555]">
                {award}
                </p>
            )}

            <p className="mt-2 text-lg text-[#5f5555]">
                {event} · {location}
            </p>

            <p className="mt-2 text-lg italic text-[#5f5555]">
                {paintings.join(", ")}
            </p>
        </article>
    );
}