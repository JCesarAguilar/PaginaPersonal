import ArchivePage from "@/src/components/archive/ArchivePage";
import { archiveMetadata } from "@/src/i18n/metadata";

export const metadata = archiveMetadata("en");

export default function Page() {
  return <ArchivePage locale="en" />;
}
