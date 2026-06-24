import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiGlobe, FiMoon, FiSettings, FiSun } from "react-icons/fi";
import { useLocale } from "../../context/LocaleContext";
import { useTheme } from "../../context/ThemeContext";

export default function SettingsDropdown({ className = "" }) {
  const { locale, setLocale, t } = useLocale();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={open ? t.settings.closeMenu : t.settings.openMenu}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 text-lg text-soft-white transition-all duration-200 hover:border-electric/40 hover:bg-electric/10 hover:text-cyan"
      >
        <FiSettings className={open ? "animate-spin" : ""} style={{ animationDuration: "3s" }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute end-0 top-[calc(100%+0.5rem)] z-50 w-64 overflow-hidden rounded-2xl border border-border bg-surface/95 shadow-xl shadow-black/20 backdrop-blur-md"
          >
            <div className="border-b border-border px-4 py-3">
              <p className="text-sm font-semibold text-soft-white">{t.settings.title}</p>
            </div>

            <div className="space-y-4 p-4">
              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-soft-white/50">
                  <FiSun className="text-sm" />
                  {t.settings.theme}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                      theme === "light"
                        ? "border-electric/50 bg-electric/15 text-cyan"
                        : "border-border text-soft-white/75 hover:border-electric/30 hover:bg-electric/5"
                    }`}
                  >
                    <FiSun />
                    {t.settings.light}
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                      theme === "dark"
                        ? "border-electric/50 bg-electric/15 text-cyan"
                        : "border-border text-soft-white/75 hover:border-electric/30 hover:bg-electric/5"
                    }`}
                  >
                    <FiMoon />
                    {t.settings.dark}
                  </button>
                </div>
              </div>

              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-soft-white/50">
                  <FiGlobe className="text-sm" />
                  {t.settings.language}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLocale("en")}
                    className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                      locale === "en"
                        ? "border-electric/50 bg-electric/15 text-cyan"
                        : "border-border text-soft-white/75 hover:border-electric/30 hover:bg-electric/5"
                    }`}
                  >
                    {t.settings.english}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocale("ar")}
                    className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                      locale === "ar"
                        ? "border-electric/50 bg-electric/15 text-cyan"
                        : "border-border text-soft-white/75 hover:border-electric/30 hover:bg-electric/5"
                    }`}
                  >
                    {t.settings.arabic}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
