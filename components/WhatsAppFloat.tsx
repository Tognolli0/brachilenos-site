"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { createWhatsAppUrl } from "@/lib/conversion";

type WhatsAppFloatProps = {
  message: string;
  ariaLabel: string;
};

export function WhatsAppFloat({ message, ariaLabel }: WhatsAppFloatProps) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const targets = ["contato", "candidatura"]
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!targets.length || !("IntersectionObserver" in window)) {
      return;
    }

    const visibleTargets = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleTargets.add(entry.target);
          } else {
            visibleTargets.delete(entry.target);
          }
        });
        setIsHidden(visibleTargets.size > 0);
      },
      { rootMargin: "-18% 0px -25% 0px", threshold: 0.05 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`focus-ring fixed bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] right-3 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#19b45b] text-white shadow-[0_16px_34px_rgba(15,111,67,0.32)] transition hover:-translate-y-1 hover:bg-[#128c52] hover:shadow-[0_20px_42px_rgba(15,111,67,0.42)] sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 ${
        isHidden ? "pointer-events-none translate-y-3 opacity-0" : "opacity-100"
      }`}
    >
      <WhatsAppIcon className="h-5 w-5 sm:h-7 sm:w-7" aria-hidden />
    </a>
  );
}
