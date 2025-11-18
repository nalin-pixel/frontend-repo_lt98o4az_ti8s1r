import { Link } from 'react-router-dom'

export function USPSection() {
  const items = [
    {
      title: 'Persoonlijke begeleiding',
      text: 'Mentor die je kent, kleine klassen en aandacht voor jouw talent.',
    },
    {
      title: 'Veilig & kleinschalig',
      text: 'Rustige sfeer, heldere regels en korte lijnen met thuis.',
    },
    {
      title: 'Leren door te doen',
      text: 'Veel praktijkvakken en keuzevakken. Je ontdekt wat bij je past.',
    },
    {
      title: 'Sterke mbo-aansluiting',
      text: 'Goede doorstroom en samenwerking met mbo en bedrijven in de regio.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">{it.title}</h3>
              <p className="text-slate-600 text-sm">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SplitSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Voor leerlingen</h2>
          <p className="text-slate-700 mb-4">Op Stanislas is het overzichtelijk en gezellig. Je werkt met praktijkvakken, projecten en keuzevakken. Zo ontdek jij wat je leuk vindt en waar je goed in bent.</p>
          <Link to="/groep-8" className="inline-block px-5 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700">Meer voor groep 8</Link>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Voor ouders</h2>
          <p className="text-slate-700 mb-4">We bieden structuur, persoonlijke aandacht en een veilige omgeving. Met duidelijke routes naar het mbo en goede begeleiding bij keuzes.</p>
          <Link to="/ouders" className="inline-block px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">Naar ouderinformatie</Link>
        </div>
      </div>
    </section>
  )
}

export function ProfilesPreview() {
  const profiles = [
    { key: 'bwi', title: 'BWI (Bouwen, Wonen & Interieur)', text: 'Maken, timmeren, ontwerpen en 3D. Voor doeners die iets willen creëren.' },
    { key: 'zorg', title: 'Zorg & Welzijn', text: 'Praktisch en zorgzaam. Werken met mensen, gezondheid en welzijn.' },
    { key: 'eoe', title: 'Economie & Ondernemen', text: 'Handel, marketing, kantoor en ondernemen. Voor slimme regelaars.' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Praktijkvakken & Profielen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <div key={p.key} className="p-6 rounded-xl border border-slate-200 shadow-sm bg-white">
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{p.text}</p>
              <Link to="/profielen" className="text-orange-600 font-semibold">Lees meer →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonial() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="text-xl text-slate-800 leading-relaxed">
          “Onze dochter voelt zich hier gezien en gehoord. De begeleiding is warm en duidelijk, en ze gaat met plezier naar school.”
        </blockquote>
        <p className="mt-4 text-slate-600">– Ouder van brugklasleerling</p>
      </div>
    </section>
  )
}
