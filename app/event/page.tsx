import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import EventsPageContent from "@/components/eventspage";
import { client } from "@/sanity/lib/client";
import {
  EVENTS_QUERY,
  GALLERIES_QUERY,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

type SanityEvent = {
  _id: string;
  title?: string;
  image?: unknown;
  date?: string;
  time?: string;
  location?: string;
  address?: string;
  phone?: string;
  website?: string;
  past?: boolean;
};

type SanityGallery = {
  _id: string;
  name?: string;
  image?: unknown;
  address?: string;
  location?: string;
  phone?: string;
  website?: string;
};

export default async function EventsPage() {
  const [sanityEvents, sanityGalleries]: [
    SanityEvent[],
    SanityGallery[],
  ] = await Promise.all([
    client.fetch(EVENTS_QUERY),
    client.fetch(GALLERIES_QUERY),
  ]);

  const events = sanityEvents.map((event) => ({
    id: event._id,
    title: event.title ?? "Untitled Event",
    image: event.image
      ? urlFor(event.image).width(1600).quality(90).url()
      : "",
    date: event.date ?? "",
    time: event.time ?? "",
    location: event.location ?? "",
    address: event.address ?? "",
    phone: event.phone ?? "",
    website: event.website ?? "",
    past: event.past ?? false,
  }));

  const galleries = sanityGalleries.map((gallery) => ({
    id: gallery._id,
    name: gallery.name ?? "Untitled Gallery",
    image: gallery.image
      ? urlFor(gallery.image).width(1800).quality(90).url()
      : "",
    address: gallery.address ?? "",
    location: gallery.location ?? "",
    phone: gallery.phone ?? "",
    website: gallery.website ?? "",
  }));

  return (
    <main className="pt-40">
      <Navbar />

      <EventsPageContent
        events={events}
        galleries={galleries}
      />

      <Footer />
    </main>
  );
}