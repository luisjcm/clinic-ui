import { siteConfig } from '../../data/config'
import AnimatedCounter from '../ui/AnimatedCounter'

export default function HeroSection({ content = siteConfig.hero }) {
  return (
    <section className="min-h-[85vh] w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-slate-50 flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-24">
        <h1 className="text-5xl lg:text-6xl font-serif text-slate-900 leading-tight mb-6">
          {content.heading}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
          {content.description}
        </p>

        <div className="flex flex-wrap gap-4">
          {content.actions.map((action) => (
            <a
              className={
                action.primary
                  ? 'inline-flex items-center bg-slate-900 text-white px-8 py-3 hover:bg-slate-800 transition-colors'
                  : 'inline-flex items-center border border-slate-300 text-slate-700 px-8 py-3 hover:bg-slate-100 transition-colors'
              }
              href={action.href}
              key={action.href}
            >
              {action.label}
            </a>
          ))}
        </div>

                {/* Contenedor de métricas existente */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-3 gap-6">
          {content.metrics.map((metric, index) => (
            <div key={index}>
              {/* Nuevo contador animado */}
              <AnimatedCounter 
                value={metric.value} 
                className="text-4xl font-serif text-slate-900" 
              />
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-2">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <figure className="relative h-96 lg:h-full w-full hidden lg:block">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={content.image.url}
          alt={content.image.alt}
        />
        <figcaption className="absolute bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur text-slate-100 p-5 text-sm font-medium tracking-wide flex justify-between items-center">
          <span>{content.image.caption}</span>
          {content.image.badge && <span>{content.image.badge}</span>}
        </figcaption>
      </figure>
    </section>
  )
}