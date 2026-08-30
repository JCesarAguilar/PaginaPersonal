import { publicNavItems } from "@/src/helpers/publicNavItems";

export default function NavItems() {
  return (
    <nav className="flex gap-7">
      {publicNavItems.map((item) => (
        <a key={item.route} href={item.route} className="nav-items">
          {item.name}
        </a>
      ))}
    </nav>
  );
}
