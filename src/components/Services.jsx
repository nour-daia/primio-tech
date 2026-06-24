import { motion } from "framer-motion";
import { services } from "../data/services";
import SectionTitle from "./ui/SectionTitle";
import { useLocale } from "../context/LocaleContext";

export default function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="relative bg-blue-black/40 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle
          title={t.services.title}
          description={t.services.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const content = t.services.items[service.id];

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-gradient-to-b from-slate/60 to-navy/80 p-6 transition-all duration-300 hover:border-electric/40 hover:shadow-lg hover:shadow-electric/10"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-electric/20 to-purple/20 p-3 text-cyan transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-soft-white">
                  {content.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soft-white/65">
                  {content.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
