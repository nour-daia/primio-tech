import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import heroBg from "../assets/hero.png";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import RotatingText from "./ui/RotatingText";
import { services } from "../data/services";
import { buildWhatsAppUrl } from "../config/site";
import { useLocale } from "../context/LocaleContext";

export default function Hero() {
  const { t, isRtl } = useLocale();
  const slideFrom = isRtl ? 40 : -40;

  const serviceTitles = services.map(
    (service) => t.services.items[service.id].title,
  );

  const stats = [
    { value: "150+", label: t.hero.stats.projects },
    { value: "1500+", label: t.hero.stats.customers },
    { value: "2700+", label: t.hero.stats.feedbacks },
  ];

  const whatsappUrl = buildWhatsAppUrl(t.site.whatsappMessage);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-x-hidden pt-20 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute -start-1/3 top-1/4 h-64 w-64 rounded-full bg-electric/15 blur-[100px] animate-pulse-glow sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
        <div className="absolute -end-1/3 bottom-1/4 h-56 w-56 rounded-full bg-purple/10 blur-[80px] animate-pulse-glow sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.06),transparent_50%)]" />
      </div>

      <div className="section-container relative grid min-w-0 max-w-full grid-cols-1 flex-1 items-center gap-10 overflow-hidden py-12 sm:gap-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: slideFrom }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-w-0 max-w-full overflow-hidden text-start"
        >
          <h1 className="mt-2 flex w-full min-w-0 max-w-full flex-col gap-2 text-2xl font-extrabold leading-[1.35] tracking-tight sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="gradient-text block max-w-full text-pretty break-words">
              {t.site.name}
            </span>
            <RotatingText
              items={serviceTitles}
              interval={2800}
              className="text-2xl font-extrabold leading-[1.35] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            />
          </h1>

          <p className="mt-5 max-w-full text-pretty text-start text-sm leading-relaxed text-soft-white/70 sm:mt-6 sm:max-w-lg sm:text-base md:text-lg">
            {t.site.description}
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button href={whatsappUrl} variant="whatsapp" external className="w-full sm:w-auto">
              <FaWhatsapp />
              {t.hero.contactUs}
            </Button>
            <Button href="#portfolio" variant="outline" className="w-full sm:w-auto">
              {t.hero.viewWork}
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:mt-10 sm:flex sm:flex-wrap sm:gap-8 sm:pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0 text-start">
                <p className="text-xl font-bold text-cyan sm:text-2xl">{stat.value}</p>
                <p className="text-xs text-soft-white/50 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full min-w-0 max-w-full overflow-hidden sm:max-w-md lg:max-w-lg lg:justify-self-end"
        >
          <div className="relative w-full overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-electric/30 via-purple/20 to-cyan/20 blur-2xl" />
            <motion.img
              src={heroBg}
              alt={t.hero.imageAlt}
              className="relative z-10 w-full max-w-full rounded-3xl border border-border object-cover shadow-2xl shadow-electric/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-3 start-3 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-electric/40 bg-navy p-2.5 shadow-xl shadow-electric/30 sm:-bottom-6 sm:-start-6 sm:h-20 sm:w-20 sm:p-3 md:h-24 md:w-24"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Logo variant="icon" className="h-full w-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
