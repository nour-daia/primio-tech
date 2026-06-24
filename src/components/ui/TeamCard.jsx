import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

function Avatar({ name, image }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-electric to-purple text-2xl font-bold text-white">
      {initials}
    </div>
  );
}

export default function TeamCard({ member, index, name, role, bio }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-slate/80 to-blue-black/80 p-6 backdrop-blur-sm transition-shadow duration-300 hover:border-electric/40 hover:shadow-xl hover:shadow-electric/10"
    >
      <div className="pointer-events-none absolute -end-8 -top-8 h-32 w-32 rounded-full bg-purple/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-2xl border-2 border-electric/30 shadow-lg shadow-electric/20 ring-2 ring-purple/20 transition-all duration-300 group-hover:border-cyan/50 group-hover:shadow-cyan/20">
        <Avatar name={name} image={member.image} />
      </div>

      <div className="relative text-center">
        <h3 className="text-xl font-bold text-soft-white">{name}</h3>
        <p className="mt-1 text-sm font-medium text-cyan">{role}</p>
        <p className="mt-3 text-sm leading-relaxed text-soft-white/65">{bio}</p>
        <SocialLinks social={member.social} className="mt-5 justify-center" />
      </div>
    </motion.article>
  );
}
