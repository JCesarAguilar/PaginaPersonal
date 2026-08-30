"use client";

import DownloadCVButton from "./DownloadCVButton";
import NavItems from "./NavItems";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex gap-7 justify-center items-center p-6 bg-black-background">
      <NavItems />
      <DownloadCVButton label="Descargar CV" href="/CV_Julio_Aguilar.pdf" />
    </nav>
  );
}
