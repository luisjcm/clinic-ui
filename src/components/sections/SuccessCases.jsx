import { siteConfig } from '../../data/config'

export default function SuccessCases() {
  const { copy, cases } = siteConfig.successCases

  return (
    <section id="casos" className="bg-slate-900 text-white py-24">
      <header className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-3">
          {copy.eyebrow}
        </p>
        <h2 className="font-serif text-4xl text-white mb-6">
          {copy.heading}
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          {copy.description}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto px-6">
        {cases.map((successCase) => (
          <article
            className="bg-slate-800 border border-slate-700 p-8 hover:bg-slate-800/80 transition-colors"
            key={successCase.id}
          >
            <span className="text-4xl font-serif text-white mb-4 block">
              {successCase.metric}
            </span>
            <h3 className="text-xl font-medium text-slate-100 mb-2">
              {successCase.title}
            </h3>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 block">
              {successCase.sector}
            </span>
            <p className="text-sm text-slate-300 leading-relaxed border-t border-slate-700 pt-4 mt-2">
              {successCase.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}