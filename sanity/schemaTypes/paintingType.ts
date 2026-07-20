import { defineField, defineType } from "sanity";

export const paintingType = defineType({
  name: "painting",
  title: "Paintings",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Example: FISHING VILLAGE",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "paintType",
      title: "Paint Type",
      description: "Example: Oil",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "size",
      title: "Size",
      type: "string",
      description: "Example: 24 × 36 in",
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "paintType",
      media: "image",
    },
  },
});