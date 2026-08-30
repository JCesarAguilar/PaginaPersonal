import { Download } from "lucide-react";

interface DownloadCVButtonProps {
  href?: string;
  label?: string;
}

export default function DownloadCVButton({
  href,
  label,
}: DownloadCVButtonProps) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#3DFFB0] text-[#3DFFB0] font-mono text-sm font-medium hover:bg-[#3DFFB0] hover:text-[#0A0E0F] transition-colors duration-300"
    >
      <Download className="w-4 h-4" />
      {label}
    </a>
  );
}
