import { publicNavItems } from "@/src/helpers/publicNavItems";

export default function NavItems() {
  return (
    <nav aria-label="Principal" className="gap-7 hidden md:flex">
      {publicNavItems.map((item) => (
        <a key={item.route} href={item.route} className="nav-items">
          {item.name}
        </a>
      ))}
    </nav>
  );
}
