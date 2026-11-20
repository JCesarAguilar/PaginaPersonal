import { publicNavItems } from "@/src/helpers/publicNavItems";
import { UI } from "@/src/data/ui";

export default function NavItems() {
  return (
    <nav aria-label={UI.nav.desktopLabel} className="flex gap-7">
      {publicNavItems.map((item) => (
        <a key={item.route} href={item.route} className="nav-items">
          {item.name}
        </a>
      ))}
    </nav>
  );
}
