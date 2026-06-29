import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RotatingText({
  items,
  interval = 2800,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return undefined;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <span
      className="relative block min-h-[3.2em] w-full max-w-full overflow-hidden sm:min-h-[2.6em]"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`absolute inset-x-0 top-0 block w-full max-w-full text-pretty break-words gradient-text ${className}`}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
