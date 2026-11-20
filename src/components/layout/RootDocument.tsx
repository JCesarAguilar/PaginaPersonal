import { inter, jetBrainsMono, spaceGrotesk } from "@/src/app/fonts";
import type { Locale } from "@/src/i18n/config";

// <html> y <body> compartidos por los dos idiomas; solo cambia "lang".
export default function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`h-full antialiased font-sans ${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body className="min-h-full flex flex-col bg-black-background">
        {children}
      </body>
    </html>
  );
}
