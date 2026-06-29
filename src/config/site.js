export function buildWhatsAppUrl(message) {
  const { number } = SITE.whatsapp;
  const text = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${text}`;
}

export const SITE = {
  name: "Primio Tech",
  email: "primio@outlook.sa",
  whatsapp: {
    number: "972592018231",
  },
  social: {
    instagram: "https://instagram.com/primio.tech",
    linkedin: "https://linkedin.com/company/primio-tech",
  },
};

export const NAV_LINKS = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "portfolio", href: "#portfolio" },
  { key: "news", href: "#news" },
  { key: "team", href: "#team" },
  { key: "contact", href: "#contact" },
];
