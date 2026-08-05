"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "573239290712";

  const message = encodeURIComponent(
    "Hola, me gustaría recibir información sobre los servicios de CONREV."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-green-400/40
      "
    >
      <MessageCircle size={32} />
    </a>
  );
}