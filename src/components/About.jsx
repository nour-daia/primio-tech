import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import SectionTitle from "./ui/SectionTitle";
import { useLocale } from "../context/LocaleContext";

export default function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="section-glow relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle title={t.about.title} description={t.about.description} />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-electric/20 to-purple/20 blur-xl" />
            <img
              src={aboutImg}
              alt={t.about.imageAlt}
              className="relative rounded-2xl border border-border object-cover shadow-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-soft-white md:text-3xl">
              {t.about.heading}{" "}
              <span className="gradient-text">{t.about.headingHighlight}</span>
            </h3>
            <p className="mt-4 leading-relaxed text-soft-white/70">
              {t.about.body}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.about.highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-slate/40 px-4 py-3 text-sm text-soft-white/80"
                >
                  <span className="flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-electric to-cyan" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
