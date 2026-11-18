"use client";

import { useState } from "react";
import Image from "next/image";

interface TechBadgeProps {
  name: string;
  iconSrc?: string; // ruta local en /public; sin ícono se muestran las iniciales
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
  const s = SIZES[size];
  const showIcon = iconSrc && !broken;

  return (
    <div className={`flex flex-col items-center gap-2 ${s.wrap}`}>
      <div
        className={`${s.box} rounded-xl bg-white-smoke border border-black-medium/10 flex items-center justify-center`}
      >
        {showIcon ? (
          <Image
            src={iconSrc}
            alt=""
            width={s.icon}
            height={s.icon}
            unoptimized
            onError={() => setBroken(true)}
          />
        ) : (
          <span
            aria-hidden="true"
            className="font-mono font-bold text-black-medium"
          >
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span
        className={`${s.text} font-mono text-gray-strong text-center leading-tight`}
      >
        {name}
      </span>
    </div>
  );
}
