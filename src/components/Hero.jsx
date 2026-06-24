import { motion } from "framer-motion";
import heroBg from "../assets/hero.png";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import RotatingText from "./ui/RotatingText";
import { services } from "../data/services";
import { useLocale } from "../context/LocaleContext";

export default function Hero() {
  const { t } = useLocale();

  const serviceTitles = services.map(
    (service) => t.services.items[service.id].title,
  );

  const stats = [
    { value: "150+", label: t.hero.stats.projects },
    { value: "1500+", label: t.hero.stats.customers },
    { value: "2700+", label: t.hero.stats.feedbacks },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute -start-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-electric/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute -end-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.06),transparent_50%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl flex-1 items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="mt-4 flex flex-col gap-2 text-4xl font-extrabold leading-[1.35] tracking-tight md:text-5xl lg:text-6xl">
            <span className="gradient-text block">{t.site.name}</span>
            <RotatingText
              items={serviceTitles}
              interval={2800}
              className="text-4xl font-extrabold leading-[1.35] tracking-tight md:text-5xl lg:text-6xl"
            />
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-soft-white/70 md:text-lg">
            {t.site.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#contact">{t.hero.contactUs}</Button>
            <Button href="#portfolio" variant="outline">
              {t.hero.viewWork}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-cyan">{stat.value}</p>
                <p className="text-sm text-soft-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-electric/30 via-purple/20 to-cyan/20 blur-2xl" />
            <motion.img
              src={heroBg}
              alt={t.hero.imageAlt}
              className="relative z-10 w-full max-w-md rounded-3xl border border-border object-cover shadow-2xl shadow-electric/20 lg:max-w-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-6 -start-6 z-20 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-electric/40 bg-navy p-3 shadow-xl shadow-electric/30 md:h-24 md:w-24"
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
