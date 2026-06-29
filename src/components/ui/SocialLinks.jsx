import { FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  website: FaGlobe,
};

export default function SocialLinks({ social = {}, className = "" }) {
  const entries = Object.entries(social).filter(([, url]) => url);

  if (!entries.length) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {entries.map(([platform, url]) => {
        const Icon = ICONS[platform];
        if (!Icon) return null;

        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={platform}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-blue-black/60 text-soft-white/70 transition-all duration-300 hover:border-cyan/50 hover:bg-electric/20 hover:text-cyan"
          >
            <Icon className="text-sm" />
          </a>
        );
      })}
    </div>
  );
}
