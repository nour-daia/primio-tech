import { team } from "../data/team";
import SectionTitle from "./ui/SectionTitle";
import TeamCard from "./ui/TeamCard";
import { useLocale } from "../context/LocaleContext";

export default function Team() {
  const { t } = useLocale();

  return (
    <section id="team" className="relative bg-blue-black/40 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle title={t.team.title} description={t.team.description} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
              name={t.team.members[member.id].name}
              role={t.team.members[member.id].role}
              bio={t.team.members[member.id].bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
