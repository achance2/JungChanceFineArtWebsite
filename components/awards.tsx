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
        <article className = "flex flex-wrap justify-center gap-x-2 gap-y-1 text-s text-[#5f5555] md:flex-nowrap md:justify-start md:text-left md:text-lg">
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
                <span className="italic font-semibold">
                    {paintings.join(", ")}</span>
                </>
            )}
            </article>
    );
}