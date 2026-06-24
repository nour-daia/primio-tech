import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import Button from "./ui/Button";
import SectionTitle from "./ui/SectionTitle";
import { useLocale } from "../context/LocaleContext";

export default function Contact() {
  const { t } = useLocale();

  return (
    <section id="contact" className="section-glow relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="mx-auto w-full max-w-xl md:max-w-2xl">
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-gradient-to-br from-slate/40 to-navy/60 p-6 md:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-soft-white/80"
                >
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  className="w-full rounded-xl border border-border bg-blue-black/60 px-4 py-3 text-sm text-soft-white placeholder:text-soft-white/30 transition-colors focus:border-electric focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-soft-white/80"
                >
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full rounded-xl border border-border bg-blue-black/60 px-4 py-3 text-sm text-soft-white placeholder:text-soft-white/30 transition-colors focus:border-electric focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-soft-white/80"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full resize-none rounded-xl border border-border bg-blue-black/60 px-4 py-3 text-sm text-soft-white placeholder:text-soft-white/30 transition-colors focus:border-electric focus:outline-none"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                <FiSend />
                {t.contact.send}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
