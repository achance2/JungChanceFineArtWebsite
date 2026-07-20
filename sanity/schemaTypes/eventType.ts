import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Events",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
    description: "Example: 2026 ARTS FESTIVAL",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "image",
      title: "Event Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
        name: "date",
        title: "Date",
        type: "string",
        description: "Example: 05/09/2026 - 05/12/2026",
        validation: (rule) => rule.required(),
    }),

    defineField({
      name: "time",
      title: "Time",
      type: "string",
      description: "Example: 6:00 PM – 9:00 PM",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Example: HERITAGE PARK",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "address",
      title: "Address",
      description: "Example: 600 Spinks Rd, Flower Mound, TX 75022, United States",
      type: "string",
    }),

    defineField({
      name: "phone",
      title: "Phone Number",
      description: "Example: 817-410-3541",
      type: "string",
    }),

    defineField({
      name: "website",
      title: "Event Website",
      type: "url",
    }),

    defineField({
      name: "past",
      title: "Past Event",
      type: "boolean",
      description: "Turn this on when the event should move into the archive.",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image",
    },
  },
});