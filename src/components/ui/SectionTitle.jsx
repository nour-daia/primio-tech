import { motion } from "framer-motion";

export default function SectionTitle({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-10 max-w-2xl px-1 text-center md:mb-16"
    >
      {label && (
        <span className="mb-3 inline-block rounded-full border border-electric/30 bg-electric/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan">
          {label}
        </span>
      )}
      <h2 className="text-balance text-2xl font-bold tracking-tight text-soft-white sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-sm leading-relaxed text-soft-white/70 sm:text-base md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
