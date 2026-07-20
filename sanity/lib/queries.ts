import { defineQuery } from "next-sanity";

export const PAINTINGS_QUERY = defineQuery(`
  *[_type == "painting"] | order(_createdAt desc) {
    _id,
    title,
    image,
    paintType,
    size
  }
`);

export const EVENTS_QUERY = defineQuery(`
  *[_type == "event"] | order(date asc) {
    _id,
    title,
    image,
    date,
    time,
    location,
    address,
    phone,
    website,
    past
  }
`);

export const GALLERIES_QUERY = defineQuery(`
  *[_type == "gallery"] | order(_createdAt desc) {
    _id,
    name,
    image,
    address,
    location,
    phone,
    website
  }
`);