import { siteConfig } from '../../data/config'

export default function TeamSection() {
  const { copy, members } = siteConfig.team

  return (
    <section id="equipo" className="bg-white py-24">
      <header className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-3">
          {copy.eyebrow}
        </p>
        <h2 className="font-serif text-4xl text-slate-900 mb-6">
          {copy.heading}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {copy.description}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-7xl mx-auto px-6">
        {members.map((member) => (
          <article className="group" key={member.id}>
            <img
              className="aspect-square object-cover w-full mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
              src={member.image}
              alt={member.name}
            />
            <h3 className="text-2xl font-serif text-slate-900 mb-1">
              {member.name}
            </h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              {member.role}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
              {member.bio}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}