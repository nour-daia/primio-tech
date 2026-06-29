import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMail, FiSend } from "react-icons/fi";
import Button from "./ui/Button";
import SectionTitle from "./ui/SectionTitle";
import { SITE, buildWhatsAppUrl } from "../config/site";
import { useLocale } from "../context/LocaleContext";

export default function Contact() {
  const { t } = useLocale();
  const whatsappUrl = buildWhatsAppUrl(t.site.whatsappMessage);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-glow relative overflow-x-hidden py-16 md:py-28">
      <div className="section-container">
        <SectionTitle
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="mx-auto grid w-full max-w-4xl gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            <a
              href={`mailto:${SITE.email}`}
              className="flex min-w-0 items-start gap-4 rounded-2xl border border-border bg-gradient-to-br from-slate/40 to-navy/60 p-5 text-start transition-colors hover:border-electric/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric/15 text-cyan">
                <FiMail />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-soft-white/55">{t.contact.emailLabel}</span>
                <span className="mt-1 block break-all text-sm font-semibold text-soft-white sm:text-base">
                  {SITE.email}
                </span>
              </span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-start gap-4 rounded-2xl border border-border bg-gradient-to-br from-slate/40 to-navy/60 p-5 text-start transition-colors hover:border-[#25D366]/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                <FaWhatsapp />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-soft-white/55">{t.contact.whatsappLabel}</span>
                <span className="mt-1 block text-sm font-semibold text-soft-white sm:text-base">
                  +972 59 201 8231
                </span>
              </span>
            </a>

            <Button
              href={whatsappUrl}
              variant="whatsapp"
              external
              className="w-full sm:col-span-2 lg:col-span-1"
            >
              <FaWhatsapp />
              {t.contact.whatsappCta}
            </Button>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="min-w-0 rounded-2xl border border-border bg-gradient-to-br from-slate/40 to-navy/60 p-5 md:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-start text-sm font-medium text-soft-white/80"
                >
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="w-full min-w-0 rounded-xl border border-border bg-blue-black/60 px-4 py-3 text-sm text-soft-white placeholder:text-soft-white/30 transition-colors focus:border-electric focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-start text-sm font-medium text-soft-white/80"
                >
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full min-w-0 rounded-xl border border-border bg-blue-black/60 px-4 py-3 text-sm text-soft-white placeholder:text-soft-white/30 transition-colors focus:border-electric focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-start text-sm font-medium text-soft-white/80"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full min-w-0 resize-none rounded-xl border border-border bg-blue-black/60 px-4 py-3 text-sm text-soft-white placeholder:text-soft-white/30 transition-colors focus:border-electric focus:outline-none"
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
