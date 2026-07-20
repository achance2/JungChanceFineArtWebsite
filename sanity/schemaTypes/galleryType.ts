import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Galleries",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Gallery Name",
      type: "string",
      description: "Example: PALACE ARTS CENTER",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "image",
      title: "Gallery Image",
      type: "image",
      description: "Upload an image of the gallery or exhibition space.",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "string",
      description: "Example: 6100 Long Prairie Rd,",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Example: Flower Mound, TX 75028",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "Example: 817-410-3541",
    }),

    defineField({
      name: "website",
      title: "Gallery Website",
      type: "url",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "location",
      media: "image",
    },
  },
});