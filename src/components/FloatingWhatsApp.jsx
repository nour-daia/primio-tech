import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { buildWhatsAppUrl } from "../config/site";
import { useLocale } from "../context/LocaleContext";

export default function FloatingWhatsApp() {
  const { t } = useLocale();

  return (
    <motion.a
      href={buildWhatsAppUrl(t.site.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.a11y.whatsapp}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg shadow-[#25D366]/40 transition-shadow hover:shadow-[#25D366]/60 md:bottom-8 md:end-8 md:h-16 md:w-16"
    >
      <FaWhatsapp />
    </motion.a>
  );
}
