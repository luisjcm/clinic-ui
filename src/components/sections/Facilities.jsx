/**
 * Galería de las instalaciones de la clínica.
 * @param {{ content: { eyebrow: string, heading: string, description: string, images: Array<{ url: string, alt: string }> } | null }} props
 * @returns {JSX.Element | null}
 */
export default function Facilities({ content }) {
  if (!content) return null

  return (
    <section id="instalaciones" className="py-24 bg-slate-50">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-6">
        {content.images.map((image) => (
          <div
            className="group relative aspect-[4/3] md:aspect-video lg:aspect-[16/10] overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300"
            key={image.url}
          >
            <img
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              src={image.url}
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}