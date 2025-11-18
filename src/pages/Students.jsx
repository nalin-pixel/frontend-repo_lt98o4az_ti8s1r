import Navbar from '../components/Navbar'

export default function Students() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Voor groep 8</h1>
        <p className="text-slate-700 mb-6">Welkom! Bij ons leer je door te doen. Je krijgt duidelijke uitleg, kleine groepen en opdrachten die je helpen ontdekken wat je leuk vindt.</p>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Een dag op Stanislas</h2>
            <div className="aspect-video w-full bg-slate-100 rounded-lg grid place-items-center text-slate-500">Video komt hier</div>
            <ul className="mt-4 text-slate-700 list-disc pl-5 space-y-1">
              <li>Vriendelijke start met je mentor</li>
              <li>Praktijkvakken zoals BWI, Zorg & Welzijn en E&O</li>
              <li>Rustige sfeer en duidelijke afspraken</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Waarom bij ons?</h2>
            <ul className="text-slate-700 list-disc pl-5 space-y-1">
              <li>Kleine klassen en hulp wanneer je het nodig hebt</li>
              <li>Veel doen, maken en proberen</li>
              <li>Goede overstap naar het mbo</li>
            </ul>
            <a href="/bezoek-ons" className="mt-4 inline-block px-5 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700">Meld je aan voor de Lesjesavond</a>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Veelgestelde vragen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {q:'Hoe groot zijn de klassen?', a:'Onze klassen zijn klein en overzichtelijk. Zo krijg je veel persoonlijke aandacht.'},
              {q:'Krijg ik praktijkvakken?', a:'Ja! Je gaat veel doen en ontdekken in onze werkplaatsen en lokalen.'},
              {q:'Is er begeleiding?', a:'Zeker. Je mentor en docenten helpen je stap voor stap.'},
              {q:'Kan ik vrienden meenemen naar open dagen?', a:'Ja, dat mag! Iedereen is welkom om te komen kijken.'},
            ].map((f,i)=> (
              <div key={i} className="p-4 border border-slate-200 rounded-lg">
                <p className="font-medium text-slate-900">{f.q}</p>
                <p className="text-slate-700 text-sm mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
