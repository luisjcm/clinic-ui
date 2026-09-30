/**
 * Presenta el equipo médico de la clínica.
 * @param {{ content: { eyebrow: string, heading: string, description: string, members: Array<{ name: string, role: string, image: string }> } | null }} props
 * @returns {JSX.Element | null}
 */
export default function TeamMedical({ content }) {
  if (!content) return null

  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto text-center px-6 mb-16">
        <p className="text-sm font-bold text-teal-600 tracking-widest uppercase mb-3">
          {content.eyebrow}
        </p>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
          {content.heading}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          {content.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {content.members.map((member) => (
          <article
            className="group relative overflow-hidden rounded-[2rem] bg-slate-50 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            key={member.name}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={member.image}
              />
            </div>
            <div className="p-6 text-center bg-white border-t border-slate-100 relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
                {member.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}