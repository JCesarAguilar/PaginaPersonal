import { ogImage, size, contentType, ogAlt } from "@/src/components/OgImage";

export { size, contentType };
export const alt = ogAlt("es");

export default function Image() {
  return ogImage("es");
}
