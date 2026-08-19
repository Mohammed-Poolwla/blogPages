import { getWhatsAppHref, getWhatsAppNumber } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const number = getWhatsAppNumber();
  if (!number) return null;

  return (
    <a
      href={getWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with WEBSRC on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-[#04120a] shadow-2xl shadow-black/40 transition-transform hover:scale-[1.02] hover:bg-[#38df79] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M19.11 17.26c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.34-.8-.72-1.34-1.61-1.5-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.64 1.11 2.82.14.18 1.91 2.91 4.64 4.08.65.28 1.15.44 1.54.56.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.16.16-1.27-.07-.11-.25-.18-.52-.32Z" />
        <path d="M16.01 2.67c-7.35 0-13.33 5.96-13.33 13.29 0 2.35.62 4.65 1.8 6.66L2.5 29.33l6.88-1.8a13.37 13.37 0 0 0 6.63 1.7h.01c7.35 0 13.33-5.96 13.33-13.29 0-7.34-5.98-13.3-13.34-13.3Zm0 24.28h-.01a10.92 10.92 0 0 1-5.56-1.52l-.4-.24-4.08 1.07 1.09-3.98-.26-.41a10.98 10.98 0 0 1-1.68-5.84c0-6.06 4.95-10.99 11.03-10.99 6.08 0 11.03 4.93 11.03 10.99 0 6.06-4.95 10.92-11.16 10.92Z" />
      </svg>
      WhatsApp Us
    </a>
  );
}
