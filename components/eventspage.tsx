"use client";

import { useState } from "react";
import EventCard from "@/components/eventcard";
import GalleryCard from "@/components/gallerycard";

type Event = {
  id: string;
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  phone: string;
  website: string;
  past: boolean;
};

type Gallery = {
  id: string;
  image: string;
  name: string;
  address: string;
  location: string;
  phone: string;
  website: string;
};

type EventsPageContentProps = {
  events: Event[];
  galleries: Gallery[];
};

export default function EventsPageContent({
  events,
  galleries,
}: EventsPageContentProps) {
  const [showPastEvents, setShowPastEvents] = useState(false);

  const upcomingEvents = events.filter((event) => !event.past);
  const pastEvents = events.filter((event) => event.past);

  return (
    <div className="mx-auto max-w-[1350px] px-6">
      <section>
        <h2 className="text-center md:text-left mb-8 mt-10 text-3xl font-semibold text-[#5B5149]">
          UPCOMING EVENTS
        </h2>

        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                address={event.address}
                phone={event.phone}
                website={event.website}
              />
            ))}
          </div>
        ) : (
          <p className="text-center md:text-left text-lg text-[#9c8f8f] font-semibold">
            No upcoming events at this time.
          </p>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-center md:text-left text-3xl font-semibold text-[#5B5149]">
          PAST EVENTS
        </h2>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowPastEvents((current) => !current)}
            aria-expanded={showPastEvents}
            className="cursor-pointer border border-[#5f5555] px-6 py-3 text-sm uppercase tracking-[0.16em] text-[#5f5555] font-semibold transition-colors duration-300 hover:bg-[#5f5555] hover:text-white"
          >
            {showPastEvents ? "Hide Archive" : "View Archive"}
          </button>
        </div>
        
        <div
          className={`overflow-hidden transition-all duration-750 ease-in-out ${
            showPastEvents
              ? "max-h-[4000px] translate-y-0 opacity-100"
              : "max-h-0 -translate-y-3 opacity-0"
          }`}
        >
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {pastEvents.map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                address={event.address}
                phone={event.phone}
                website={event.website}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mb-40 mt-15">
        <h2 className="text-center md:text-left mb-8 text-3xl font-semibold text-[#5B5149]">
          GALLERIES
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {galleries.map((gallery) => (
            <GalleryCard
              key={gallery.id}
              image={gallery.image}
              name={gallery.name}
              address={gallery.address}
              location={gallery.location}
              phone={gallery.phone}
              website={gallery.website}
            />
          ))}
        </div>
      </section>
    </div>
  );
}