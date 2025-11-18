import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Over ons</h1>
        <p className="text-slate-700 mb-6">Bij Stanislas VMBO Mavo Delft staat elk kind centraal. We zijn kleinschalig, persoonlijk en toekomstgericht. Leerlingen krijgen de ruimte om talenten te ontdekken en te groeien.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Missie & Visie</h2>
            <p className="text-slate-700 text-sm">Een veilige school waar iedereen telt. Met persoonlijke begeleiding en duidelijk onderwijs werken we aan een krachtige basis richting de toekomst.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Directie</h2>
            <p className="text-slate-700 text-sm">Directeur: Raudy Lagrau</p>
          </div>
        </div>
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Samenwerking</h2>
          <p className="text-slate-700">We werken samen met mbo-instellingen en bedrijven in de regio, zodat leerlingen aansluiten bij de praktijk en toekomst van de arbeidsmarkt.</p>
        </section>
      </main>
    </div>
  )
}
