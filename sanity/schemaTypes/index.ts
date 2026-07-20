import { type SchemaTypeDefinition } from "sanity";
import { paintingType } from "./paintingType";
import { eventType } from "./eventType";
import { galleryType } from "./galleryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    paintingType,
    eventType,
    galleryType,
  ],
};