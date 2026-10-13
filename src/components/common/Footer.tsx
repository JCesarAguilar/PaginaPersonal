import Link from "next/link";
import { publicNavItems } from "@/src/helpers/publicNavItems";

const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://linkedin.com/in/tu-usuario" },
  { name: "GitHub", url: "https://github.com/tu-usuario" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black-background border-t border-white/[0.06] px-6 md:px-20 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-sans font-bold text-lg text-white-smoke">
            Julio César Aguilar
          </p>
          <p className="font-mono text-xs text-gray-strong mt-1">
            AI Engineer · Full Stack Developer
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 justify-center">
          {publicNavItems.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className="font-mono text-xs text-gray-strong hover:text-green-main transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-strong hover:text-green-main transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <p className="text-center font-mono text-[11px] text-gray-strong/60 mt-10">
        © {new Date().getFullYear()} Julio César Aguilar. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
