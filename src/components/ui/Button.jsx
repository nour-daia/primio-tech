import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-electric to-purple text-white shadow-lg shadow-electric/25 hover:shadow-electric/40 hover:shadow-cyan/20",
  outline:
    "border border-electric/50 bg-transparent text-soft-white hover:border-cyan hover:bg-electric/10",
  whatsapp:
    "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  external = false,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
