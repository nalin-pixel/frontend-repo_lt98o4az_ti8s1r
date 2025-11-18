import Navbar from '../components/Navbar'

export default function Profiles() {
  const profiles = [
    { key: 'bwi', title: 'BWI (Bouwen, Wonen & Interieur)', student: 'Hou je van maken, ontwerpen en timmeren? Bij BWI werk je met hout, 3D en techniek.', parent: 'Leerlingen ontwikkelen praktische en technische vaardigheden en werken aan echte producten.' },
    { key: 'zorg', title: 'Zorg & Welzijn', student: 'Werk je graag met mensen? Je leert over gezondheid, zorg en welzijn.', parent: 'Aandacht voor sociale vaardigheden, hygiëne en samenwerken in de zorg.' },
    { key: 'eoe', title: 'Economie & Ondernemen', student: 'Ben je een regelaar of ondernemer? Je leert over handel, marketing en administratie.', parent: 'Praktisch en ondernemend onderwijs met oog voor moderne vaardigheden.' },
  ]
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Praktijkvakken & Profielen</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <div key={p.key} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">{p.title}</h2>
              <p className="text-slate-700 text-sm mb-2"><span className="font-medium">Voor leerlingen:</span> {p.student}</p>
              <p className="text-slate-700 text-sm"><span className="font-medium">Voor ouders:</span> {p.parent}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
