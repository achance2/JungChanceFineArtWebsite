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
        <article className = "flex gap-x-2 text-lg text-[#5f5555]">
            {award && (
                <>
                <span>{award}</span>
                <span>·</span>
                </>
            )}

            <span>{event}</span>
            <span>·</span>
            <span>{location}</span>

            {paintings.length > 0 && (
                <>
                <span>·</span>
                <span className="italic font-semibold">{paintings.join(", ")}</span>
                </>
            )}
            </article>
    );
}