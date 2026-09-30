import * as LucideIcons from 'lucide-react'

/**
 * Sección de especialidades médicas con iconos seleccionados por nombre.
 * @param {{ content: { eyebrow: string, heading: string, description: string, items: Array<{ title: string, description: string, icon: string }> } }} props
 * @returns {JSX.Element}
 */
export default function Specialties({ content }) {

    if (!content) return <div className="p-10 text-center text-red-500 font-bold">Falta la data de especialidades en config.js</div>;
  return (
    <section id="especialidades" className="py-24 bg-slate-50">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
        {content.items.map((specialty) => {
          const Icon = LucideIcons[specialty.icon] ?? LucideIcons.Activity

          return (
            <article
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              key={specialty.title}
            >
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                <Icon
                  aria-hidden="true"
                  className="text-teal-600 group-hover:text-white"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {specialty.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {specialty.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}