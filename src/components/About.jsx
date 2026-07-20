import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import aboutEn from "../assets/about-en.png";
import aboutAr from "../assets/about-ar.png";
import SectionTitle from "./ui/SectionTitle";
import { SITE } from "../config/site";
import { useLocale } from "../context/LocaleContext";

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
};

export default function About() {
  const { t, isRtl, locale } = useLocale();
  const slideFromImage = isRtl ? 32 : -32;
  const slideFromText = isRtl ? -32 : 32;
  const aboutImage = locale === "ar" ? aboutAr : aboutEn;

  return (
    <section id="about" className="section-glow relative overflow-x-hidden py-16 md:py-28">
      <div className="section-container">
        <SectionTitle title={t.about.title} description={t.about.description} />

        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: slideFromImage }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative min-w-0"
          >
            <div className="absolute -inset-2 rounded-3xl  blur-xl sm:-inset-3" />
            <AnimatePresence mode="wait">
              <motion.img
                key={locale}
                src={aboutImage}
                alt={t.about.imageAlt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative w-full max-w-full  object-cover "
                loading="lazy"
              />
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: slideFromText }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-w-0 text-start"
          >
            <h3 className="text-2xl font-bold text-soft-white md:text-3xl">
              {t.about.heading}{" "}
              <span className="gradient-text">{t.about.headingHighlight}</span>
            </h3>
            <p className="mt-4 leading-relaxed text-soft-white/70">{t.about.body}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.about.highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-slate/40 px-4 py-3 text-start text-sm text-soft-white/80"
                >
                  <span className="flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-electric to-cyan" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-soft-white/60">
                {t.about.followUs}
              </p>
              <div className="flex flex-wrap gap-3">
                {Object.entries(SITE.social).map(([platform, url]) => {
                  const Icon = SOCIAL_ICONS[platform];
                  if (!Icon) return null;

                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={platform}
                      whileHover={{ y: -3 }}
                      className="group flex items-center gap-2 rounded-full border border-border bg-gradient-to-b from-slate/60 to-navy/80 px-4 py-2 text-sm font-medium text-soft-white/70 transition-all duration-300 hover:border-electric/40 hover:text-cyan hover:shadow-md hover:shadow-electric/10"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-electric/20 to-purple/20 text-cyan transition-transform duration-300 group-hover:scale-110">
                        <Icon className="text-sm" />
                      </span>
                      <span className="capitalize">{platform}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}