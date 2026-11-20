import Link from "next/link";
import {
  LOCALES,
  LOCALE_NAMES,
  getContent,
  localePath,
  type Locale,
} from "@/src/i18n/config";

// Selector "ES / EN": lleva a la misma página en el otro idioma.
export default function LangSwitch({
  locale,
  path,
  className = "",
}: {
  locale: Locale;
  path: string;
  className?: string;
}) {
  const { UI } = getContent(locale);
  return (
    <nav
      aria-label={UI.language}
      className={`flex items-center gap-2 font-mono text-sm ${className}`}
    >
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden="true" className="text-fog-dim">
              /
            </span>
          )}
          {l === locale ? (
            <span aria-current="true" className="text-green-main">
              {l.toUpperCase()}
            </span>
          ) : (
            <Link
              href={localePath(l, path)}
              hrefLang={l}
              lang={l}
              title={LOCALE_NAMES[l]}
              className="text-fog-dim transition-colors hover:text-white-smoke"
            >
              {l.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
