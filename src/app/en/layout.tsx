import "../globals.css";
import RootDocument from "@/src/components/layout/RootDocument";
import { siteMetadata, viewport } from "@/src/i18n/metadata";

export const metadata = siteMetadata("en");
export { viewport };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
