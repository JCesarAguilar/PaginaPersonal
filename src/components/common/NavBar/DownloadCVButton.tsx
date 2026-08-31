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
      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-green-main text-green-main font-mono text-sm font-medium hover:bg-green-main hover:text-black-medium transition-colors duration-300"
    >
      <Download className="w-4 h-4" />
      {label}
    </a>
  );
}
