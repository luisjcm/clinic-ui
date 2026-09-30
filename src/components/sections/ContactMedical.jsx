import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const contactIcons = {
  MapPin,
  Phone,
  Mail,
  Clock,
}

/**
 * Presenta los datos de contacto y el formulario de información de la clínica.
 * @param {{ content: { eyebrow: string, heading: string, description: string, details: Array<{ icon: string, title: string, value: string }>, form: { title: string, submitLabel: string } } | null }} props
 * @returns {JSX.Element | null}
 */
export default function ContactMedical({ content }) {
  if (!content) return null

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm font-bold text-teal-600 tracking-widest uppercase mb-3">
            {content.eyebrow}
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            {content.heading}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            {content.description}
          </p>

          <div className="space-y-8">
            {content.details.map((detail) => {
              const Icon = contactIcons[detail.icon] ?? MapPin

              return (
                <div className="flex items-start gap-4" key={detail.title}>
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center shrink-0 text-teal-600">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      {detail.title}
                    </h3>
                    <p className="text-slate-600">{detail.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            {content.form.title}
          </h3>
          <form onSubmit={(event) => event.preventDefault()}>
            <input
              aria-label="Nombre completo"
              autoComplete="name"
              className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all mb-5"
              name="name"
              placeholder="Nombre completo"
              required
              type="text"
            />
            <input
              aria-label="Teléfono"
              autoComplete="tel"
              className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all mb-5"
              name="phone"
              placeholder="Teléfono"
              type="tel"
            />
            <input
              aria-label="Correo"
              autoComplete="email"
              className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all mb-5"
              name="email"
              placeholder="Correo"
              required
              type="email"
            />
            <textarea
              aria-label="Mensaje"
              className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all mb-5"
              name="message"
              placeholder="Mensaje"
              required
              rows={4}
            />
            <button
              className="w-full bg-teal-600 text-white font-bold rounded-xl px-8 py-4 hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
              type="submit"
            >
              {content.form.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}