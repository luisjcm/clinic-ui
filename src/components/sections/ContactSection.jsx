import { siteConfig } from '../../data/config'

export default function ContactSection() {
  const { copy, info } = siteConfig.contact

  return (
    <section id="contacto" className="bg-white py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-6">
        <div>
          <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-3">
            {copy.eyebrow}
          </p>
          <h2 className="font-serif text-4xl text-slate-900 mb-6">
            {copy.heading}
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            {copy.description}
          </p>

          <div className="border-l-2 border-slate-200 pl-4 mb-6">
            <p className="text-sm text-slate-500 mb-1">Dirección</p>
            <p className="text-slate-900 font-medium">{info.address}</p>
          </div>
          <div className="border-l-2 border-slate-200 pl-4 mb-6">
            <p className="text-sm text-slate-500 mb-1">Teléfono</p>
            <a className="text-slate-900 font-medium" href={`tel:${info.phone}`}>
              {info.phone}
            </a>
          </div>
          <div className="border-l-2 border-slate-200 pl-4 mb-6">
            <p className="text-sm text-slate-500 mb-1">Correo electrónico</p>
            <a className="text-slate-900 font-medium" href={`mailto:${info.email}`}>
              {info.email}
            </a>
          </div>
        </div>

        <form
          className="bg-slate-50 p-8 md:p-12 border border-slate-200"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="sr-only" htmlFor="contact-name">
            Nombre
          </label>
          <input
            className="border-b border-slate-300 bg-transparent focus:border-slate-900 outline-none w-full py-3 mb-6 transition-colors"
            id="contact-name"
            name="name"
            placeholder="Nombre"
            type="text"
          />

          <label className="sr-only" htmlFor="contact-company">
            Empresa
          </label>
          <input
            className="border-b border-slate-300 bg-transparent focus:border-slate-900 outline-none w-full py-3 mb-6 transition-colors"
            id="contact-company"
            name="company"
            placeholder="Empresa"
            type="text"
          />

          <label className="sr-only" htmlFor="contact-email">
            Correo electrónico
          </label>
          <input
            className="border-b border-slate-300 bg-transparent focus:border-slate-900 outline-none w-full py-3 mb-6 transition-colors"
            id="contact-email"
            name="email"
            placeholder="Correo electrónico"
            type="email"
          />

          <label className="sr-only" htmlFor="contact-message">
            Mensaje
          </label>
          <textarea
            className="border-b border-slate-300 bg-transparent focus:border-slate-900 outline-none w-full py-3 mb-6 transition-colors"
            id="contact-message"
            name="message"
            placeholder="Mensaje"
            rows="4"
          />

          <button
            className="bg-slate-900 text-white w-full py-4 text-sm font-semibold tracking-wide hover:bg-slate-800 transition-colors"
            type="submit"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  )
}