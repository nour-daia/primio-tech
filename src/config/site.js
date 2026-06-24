export function buildWhatsAppUrl(message) {
  const { number } = SITE.whatsapp;
  const text = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${text}`;
}

export const SITE = {
  name: "Primio Tech",
  email: "nour@gmail.com",
  whatsapp: {
    number: "900000000000000000",
  },
};

export const NAV_LINKS = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "portfolio", href: "#portfolio" },
  { key: "team", href: "#team" },
  { key: "contact", href: "#contact" },
];
