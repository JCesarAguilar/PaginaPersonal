"use client";

import DownloadCVButton from "./DownloadCVButton";
import NavItems from "./NavItems";
import HamburguerMenu from "./HamburguerMenu";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-6 bg-black-background">
      {/* Nav de escritorio: centrado en el espacio disponible */}
      <div className="hidden md:flex gap-7 items-center mx-auto">
        <NavItems />
        <DownloadCVButton label="Descargar CV" href="/CV_Julio_Aguilar.pdf" />
      </div>

      {/* Hamburger: solo en mobile, pegado a la derecha */}
      <div className="md:hidden ml-auto">
        <HamburguerMenu />
      </div>
    </nav>
  );
}
