import AnimatedCounter from '../ui/AnimatedCounter'

/**
 * Hero principal de la clínica con acciones, métricas e imagen destacada.
 * @param {{ content: { heading: string, description: string, actions: Array<{ label: string, primary: boolean, href: string }>, metrics: Array<{ value: string, label: string }>, image: { url: string, alt: string, caption: string } } }} props
 * @returns {JSX.Element}
 */
export default function HeroMedical({ content }) {
  return (
    <section className="min-h-[85vh] w-full flex items-center bg-gradient-to-br from-teal-50/50 to-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-20">
        <div>
          <h1 className="text-5xl lg:text-6xl font-sans font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
            {content.heading}
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            {content.description}
          </p>

          <div className="flex gap-4">
            {content.actions.map((action) => (
              <a
                className={
                  action.primary
                    ? 'bg-teal-600 text-white px-8 py-3.5 rounded-full hover:bg-teal-700 transition-shadow shadow-md hover:shadow-lg font-semibold'
                    : 'bg-white text-teal-700 px-8 py-3.5 rounded-full hover:bg-teal-50 transition-colors border border-teal-200 font-semibold'
                }
                href={action.href}
                key={action.href}
              >
                {action.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-10 mt-12 pt-8 border-t border-teal-100">
            {content.metrics.map((metric) => (
              <div key={metric.label}>
                <AnimatedCounter
                  className="text-3xl font-extrabold text-teal-600"
                  value={metric.value}
                />
                <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wide">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
          <img
            alt={content.image.alt}
            className="w-full h-full object-cover"
            src={content.image.url}
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center justify-between text-sm font-bold text-teal-900">
            {content.image.caption}
          </div>
        </div>
      </div>
    </section>
  )
}