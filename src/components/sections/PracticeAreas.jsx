import { siteConfig } from '../../data/config'

export default function PracticeAreas() {
  const { copy, properties } = siteConfig.properties

  return (
    <section id="servicios" className="py-24 bg-slate-100">
      <header className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">
          {copy.eyebrow}
        </p>
        <h2 className="text-4xl font-serif text-slate-900 mb-6">
          {copy.heading}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {copy.description}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto px-6">
        {properties.map((practice) => (
          <article
            className="bg-white border border-slate-200 overflow-hidden group"
            key={practice.id}
          >
            <img
              className="h-64 w-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              src={practice.image}
              alt={practice.title}
            />
            <div className="p-8">
              <h3 className="text-xl font-serif text-slate-900 mb-2">
                {practice.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6 font-medium uppercase tracking-wide">
                {practice.location}
              </p>
              <ul>
                {practice.features.map((feature) => (
                  <li
                    className="border-l-2 border-slate-900 pl-3 text-sm text-slate-700 mb-3"
                    key={feature}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}