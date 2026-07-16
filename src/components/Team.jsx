import { team } from "../data/team";
import SectionTitle from "./ui/SectionTitle";
import TeamCard from "./ui/TeamCard";
import { useLocale } from "../context/LocaleContext";

export default function Team() {
  const { t } = useLocale();

  return (
    <section id="team" className="relative overflow-x-hidden bg-blue-black/40 py-16 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple/40 to-transparent" />

      <div className="section-container">
        <SectionTitle title={t.team.title} description={t.team.description} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => {
            const content = t.team.members[member.id];
            if (!content) return null;

            return (
              <TeamCard
                image={member.image}
                key={member.id}
                member={member}
                index={index}
                name={content.name}
                role={content.role}
                bio={content.bio}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
