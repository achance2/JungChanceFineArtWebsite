import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PaintingGallery from "@/components/paintinggallery";
import { client } from "@/sanity/lib/client";
import { PAINTINGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type SanityPainting = {
  _id: string;
  title?: string;
  image?: unknown;
  paintType?: string;
  size?: string;
};

export default async function Home() {
  const sanityPaintings: SanityPainting[] =
    await client.fetch(PAINTINGS_QUERY);

  const paintings = sanityPaintings.map((painting) => ({
    id: painting._id,
    image: painting.image
      ? urlFor(painting.image).width(1800).quality(90).url()
      : "/paintings/placeholder.jpg",
    title: painting.title ?? "Untitled",
    paintType: painting.paintType ?? "",
    size: painting.size ?? "",
  }));

  return (
    <main>
      <Navbar />

      <section>
        <div className="mx-auto max-w-[1350px] px-6 pb-40 pt-60">
          <PaintingGallery paintings={paintings} />
        </div>
      </section>

      <Footer />
    </main>
  );
}