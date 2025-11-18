import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[520px] w-full">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-10">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-slate-200 p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Kleinschalig, persoonlijk en toekomstgericht VMBO in Delft.
          </h1>
          <p className="text-slate-700 mb-6 max-w-3xl">
            Een veilige, overzichtelijke school waar jij wordt gezien. Met veel praktijk, warme begeleiding en duidelijke routes naar een mooie toekomst in het mbo.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/groep-8" className="px-5 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors">
              Ik zit in groep 8
            </Link>
            <Link to="/ouders" className="px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors">
              Informatie voor ouders
            </Link>
            <Link to="/bezoek-ons" className="px-5 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition-colors">
              Bezoek onze school
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
