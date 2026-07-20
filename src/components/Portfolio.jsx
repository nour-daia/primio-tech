import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../data/projects";
import SectionTitle from "./ui/SectionTitle";
import { useLocale } from "../context/LocaleContext";

export default function Portfolio() {
  const { t } = useLocale();

  return (
    <section id="portfolio" className="section-glow relative overflow-x-hidden py-16 md:py-28">
      <div className="section-container">
        <SectionTitle
          title={t.portfolio.title}
          description={t.portfolio.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const content = t.portfolio.items[project.id];

            return (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-slate/30 transition-colors duration-300 hover:border-electric/30"
              >
                {/* الصورة - بدون أي كتابة فوقها */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={content.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* أوفرلاي خفيف بس للهوفر، من غير نص */}
                  <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/10" />
                </div>

                {/* المحتوى النصي تحت الصورة */}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="inline-block w-fit rounded-full bg-electric/20 px-3 py-0.5 text-xs font-medium text-cyan">
                    {content.category}
                  </span>

                  <h3 className="flex items-center gap-2 text-lg font-bold text-soft-white">
                    {content.title}
                    <FiExternalLink className="text-sm opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>

                  {content.description && (
                    <p className="text-sm leading-relaxed text-soft-white/60 line-clamp-2">
                      {content.description}
                    </p>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}