import { ogImage, size, contentType, ogAlt } from "@/src/components/OgImage";

export { size, contentType };
export const alt = ogAlt("en");

export default function Image() {
  return ogImage("en");
}
