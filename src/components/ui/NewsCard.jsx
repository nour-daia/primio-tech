import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar, FiMapPin } from "react-icons/fi";
import Button from "./Button";
import { useLocale } from "../../context/LocaleContext";

export default function NewsCard({ item, content, index }) {
  const { t } = useLocale();
  const hasLink = Boolean(item.link);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-slate/60 to-navy/80 transition-all duration-300 hover:border-electric/40 hover:shadow-lg hover:shadow-electric/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={content.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-soft-white/55">
          <span className="inline-flex items-center gap-1.5">
            <FiCalendar className="text-cyan" />
            {content.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FiMapPin className="text-cyan" />
            {content.location}
          </span>
        </div>

        <h3 className="text-lg font-bold text-soft-white md:text-xl">{content.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-soft-white/65">
          {content.excerpt}
        </p>

        {hasLink && (
          <div className="mt-5">
            <Button
              href={item.link}
              variant="outline"
              className="w-full sm:w-auto"
              external={item.link.startsWith("http")}
            >
              {t.news.readMore}
              <FiArrowUpRight />
            </Button>
          </div>
        )}
      </div>
    </motion.article>
  );
}
