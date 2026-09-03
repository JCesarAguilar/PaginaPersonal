"use client";

import { useState } from "react";
import Image from "next/image";

interface TechBadgeProps {
  name: string;
  iconSrc?: string; // ruta local opcional (ej: "/logos/langchain.svg")
  size?: "sm" | "lg";
}

const SIZES = {
  sm: { box: "w-9 h-9", icon: 20, wrap: "w-16", text: "text-[10px]" },
  lg: { box: "w-16 h-16", icon: 34, wrap: "w-24", text: "text-xs" },
};

export default function TechBadge({
  name,
  iconSrc,
  size = "sm",
}: TechBadgeProps) {
  const [broken, setBroken] = useState(false);
  const src = iconSrc ?? `https://cdn.simpleicons.org/${name}/${name}`;
  const s = SIZES[size];

  return (
    <div className={`flex flex-col items-center gap-2 ${s.wrap}`}>
      {broken ? (
        <div
          className={`${s.box} rounded-xl bg-white-smoke border border-black-medium/10 flex items-center justify-center font-mono font-bold text-green-main`}
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
      ) : (
        <div
          className={`${s.box} rounded-xl bg-white-smoke border border-black-medium/10 flex items-center justify-center`}
        >
          <Image
            src={src}
            alt={name}
            width={s.icon}
            height={s.icon}
            unoptimized
            onError={() => setBroken(true)}
          />
        </div>
      )}
      <span
        className={`${s.text} font-mono text-gray-strong text-center leading-tight`}
      >
        {name}
      </span>
    </div>
  );
}
