import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./ui/Logo";
import SettingsDropdown from "./ui/SettingsDropdown";
import { NAV_LINKS, buildWhatsAppUrl } from "../config/site";
import { useLocale } from "../context/LocaleContext";

export default function Navbar() {
  const { t, isRtl } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(t.site.whatsappMessage);
  const menuSlide = isRtl ? 12 : -12;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-navy/90 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-5 sm:py-4 md:px-8">
        <a
          href="#home"
          aria-label={t.a11y.home}
          className="shrink-0 transition-opacity hover:opacity-90"
        >
          <Logo variant="icon" className="h-8 w-8 sm:hidden" />
          <Logo className="hidden h-9 w-auto sm:inline-flex md:h-10" />
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-soft-white/75 transition-colors duration-200 hover:text-cyan"
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <SettingsDropdown className="hidden md:block" />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-purple px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-electric/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-electric/40 md:inline-flex lg:px-5"
          >
            <FaWhatsapp className="text-base" />
            {t.nav.getInTouch}
          </a>

          <SettingsDropdown className="md:hidden" />

          <button
            type="button"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-xl text-soft-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-navy/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4 sm:px-5">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: menuSlide }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block rounded-lg px-3 py-3 text-start text-base font-medium text-soft-white/85 transition-colors hover:bg-electric/10 hover:text-cyan"
                  >
                    {t.nav[link.key]}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-purple px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  <FaWhatsapp />
                  {t.nav.getInTouch}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
