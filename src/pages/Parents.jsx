import Navbar from '../components/Navbar'

export default function Parents() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Voor ouders</h1>
        <p className="text-slate-700 mb-6">We bieden een veilige, kleinschalige omgeving met duidelijke structuur, warme mentoring en persoonlijke aandacht. We werken op drie niveaus (Basis, Kader, TL/Mavo) en begeleiden uw kind naar een passende mbo-opleiding.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Begeleiding & ondersteuning</h2>
            <ul className="text-slate-700 list-disc pl-5 space-y-1">
              <li>Mentor en zorgteam, met korte lijnen naar thuis</li>
              <li>Duidelijke regels en overzichtelijke dagstructuur</li>
              <li>Extra ondersteuning waar nodig</li>
            </ul>
            <a href="/schoolgids.pdf" className="mt-4 inline-block px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">Download schoolgids (PDF)</a>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Praktische informatie</h2>
            <ul className="text-slate-700 list-disc pl-5 space-y-1">
              <li>Schooltijden: ma-vr 08:30 – 15:15</li>
              <li>Contact: delft@stanislas.nl | 015-0000000</li>
              <li>Adres: Voorbeeldstraat 1, 2628 Delft</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
