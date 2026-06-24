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

  const longestLabel = items.reduce(
    (longest, item) => (item.length > longest.length ? item : longest),
    "",
  );

  return (
    <span
      className="relative inline-grid overflow-hidden align-bottom pb-2 pt-1 leading-[1.35]"
      aria-live="polite"
      aria-atomic="true"
    >
      <span
        className={`invisible col-start-1 row-start-1 whitespace-nowrap ${className}`}
      >
        {longestLabel}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ y: "75%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-75%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className={`col-start-1 row-start-1 block whitespace-nowrap gradient-text ${className}`}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
