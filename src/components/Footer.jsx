import Logo from "./ui/Logo";
import { NAV_LINKS } from "../config/site";
import { useLocale } from "../context/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="overflow-x-hidden border-t border-border bg-blue-black/60">
      <div className="section-container py-10 md:py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Logo className="h-8 w-auto" />
            <p className="max-w-xs text-center text-sm text-soft-white/50 md:text-start">
              {t.site.tagline} — {t.site.footerTagline}
            </p>
          </div>

          <nav aria-label={t.a11y.footerNav}>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-soft-white/60 transition-colors hover:text-cyan"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
