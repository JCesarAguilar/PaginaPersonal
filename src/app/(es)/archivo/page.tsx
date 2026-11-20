import ArchivePage from "@/src/components/archive/ArchivePage";
import { archiveMetadata } from "@/src/i18n/metadata";

export const metadata = archiveMetadata("es");

export default function Page() {
  return <ArchivePage locale="es" />;
}
