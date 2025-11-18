import Navbar from '../components/Navbar'

export default function Education() {
  const levels = [
    { key: 'basis', title: 'Basisberoepsgerichte Leerweg (BB)', fits: 'Voor doeners die houden van praktisch leren in kleine stappen.', approach: 'Veel praktijk, duidelijke uitleg en stap-voor-stap opdrachten.', next: 'Doorstroom naar mbo niveau 2.' },
    { key: 'kader', title: 'Kaderberoepsgerichte Leerweg (KB)', fits: 'Voor praktische leerlingen met een goede werkhouding.', approach: 'Afwisselend theorie en praktijk met uitdaging.', next: 'Doorstroom naar mbo niveau 3 of 4.' },
    { key: 'tl', title: 'Theoretische Leerweg / Mavo (TL)', fits: 'Voor leerlingen die later breed willen kunnen kiezen.', approach: 'Stevige basis met theorie en keuzevakken, goede voorbereiding op mbo 4.', next: 'Doorstroom naar mbo niveau 4.' },
  ]

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Onderwijsniveaus</h1>
        <p className="text-slate-700 mb-8">We bieden Basis, Kader en TL/Mavo. Zo is er altijd een leerweg die past. Met LOB (loopbaanoriëntatie) begeleiden we leerlingen bij het kiezen van profiel en vervolgopleiding.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((l) => (
            <div key={l.key} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">{l.title}</h2>
              <p className="text-slate-700 text-sm mb-2"><span className="font-medium">Voor wie:</span> {l.fits}</p>
              <p className="text-slate-700 text-sm mb-2"><span className="font-medium">Aanpak:</span> {l.approach}</p>
              <p className="text-slate-700 text-sm"><span className="font-medium">Vervolg:</span> {l.next}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
