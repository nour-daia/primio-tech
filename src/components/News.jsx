import { newsItems } from "../data/news";
import SectionTitle from "./ui/SectionTitle";
import NewsCard from "./ui/NewsCard";
import { useLocale } from "../context/LocaleContext";

export default function News() {
  const { t } = useLocale();

  return (
    <section id="news" className="relative overflow-x-hidden bg-blue-black/40 py-16 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="section-container">
        <SectionTitle title={t.news.title} description={t.news.description} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <NewsCard
              key={item.id}
              item={item}
              content={t.news.items[item.id]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
