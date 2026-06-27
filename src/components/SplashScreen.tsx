"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="animate-pulse">
        <Image
          src="/adorned-logo.jpg"
          alt="Adorned by Thabi"
          width={280}
          height={280}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}