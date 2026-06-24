import logo from "../../assets/logo.png";
import { SITE } from "../../config/site";

export default function Logo({ variant = "full", className = "" }) {
  if (variant === "icon") {
    return (
      <img
        src={logo}
        alt={`${SITE.name} logo`}
        className={`object-contain ${className}`}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="h-full max-h-10 w-auto shrink-0 object-contain"
      />
      <span className="whitespace-nowrap text-lg font-bold tracking-tight gradient-text">
        {SITE.name}
      </span>
    </span>
  );
}
