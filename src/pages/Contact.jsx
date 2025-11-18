import { useState } from 'react'
import Navbar from '../components/Navbar'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [contact, setContact] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [enrol, setEnrol] = useState({ parent_name: '', parent_email: '', student_name: '', current_group: '', notes: '' })
  const [status, setStatus] = useState(null)

  const submitContact = async (e) => {
    e.preventDefault()
    setStatus('Bericht versturen...')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(contact) })
      if (!res.ok) throw new Error('Fout bij versturen')
      setStatus('✅ Bericht ontvangen! We reageren zo snel mogelijk.')
      setContact({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (e) {
      setStatus('❌ Er ging iets mis. Probeer later opnieuw.')
    }
  }

  const submitEnrol = async (e) => {
    e.preventDefault()
    setStatus('Aanmelding starten...')
    try {
      const res = await fetch(`${BACKEND_URL}/api/enrol`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(enrol) })
      if (!res.ok) throw new Error('Fout bij aanmelden')
      setStatus('✅ Aanmelding gestart! We nemen contact met u op.')
      setEnrol({ parent_name: '', parent_email: '', student_name: '', current_group: '', notes: '' })
    } catch (e) {
      setStatus('❌ Er ging iets mis. Probeer later opnieuw.')
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Contact & Aanmelden</h1>
        <p className="text-slate-700 mb-6">Heeft u vragen of wilt u uw kind aanmelden? We helpen u graag verder.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={submitContact} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm grid gap-3">
            <h2 className="text-xl font-semibold text-slate-900">Contactformulier</h2>
            <input className="border border-slate-300 rounded-lg p-3" placeholder="Naam" value={contact.name} onChange={e=>setContact({ ...contact, name: e.target.value })} required />
            <input className="border border-slate-300 rounded-lg p-3" type="email" placeholder="E-mail" value={contact.email} onChange={e=>setContact({ ...contact, email: e.target.value })} required />
            <input className="border border-slate-300 rounded-lg p-3" placeholder="Telefoon" value={contact.phone} onChange={e=>setContact({ ...contact, phone: e.target.value })} />
            <input className="border border-slate-300 rounded-lg p-3" placeholder="Onderwerp" value={contact.subject} onChange={e=>setContact({ ...contact, subject: e.target.value })} required />
            <textarea className="border border-slate-300 rounded-lg p-3" rows="5" placeholder="Bericht" value={contact.message} onChange={e=>setContact({ ...contact, message: e.target.value })} required />
            <button className="px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">Versturen</button>
          </form>

          <form onSubmit={submitEnrol} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm grid gap-3">
            <h2 className="text-xl font-semibold text-slate-900">Aanmelden</h2>
            <input className="border border-slate-300 rounded-lg p-3" placeholder="Naam ouder/verzorger" value={enrol.parent_name} onChange={e=>setEnrol({ ...enrol, parent_name: e.target.value })} required />
            <input className="border border-slate-300 rounded-lg p-3" type="email" placeholder="E-mail ouder/verzorger" value={enrol.parent_email} onChange={e=>setEnrol({ ...enrol, parent_email: e.target.value })} required />
            <input className="border border-slate-300 rounded-lg p-3" placeholder="Naam leerling" value={enrol.student_name} onChange={e=>setEnrol({ ...enrol, student_name: e.target.value })} required />
            <input className="border border-slate-300 rounded-lg p-3" placeholder="Huidige groep (bijv. groep 8)" value={enrol.current_group} onChange={e=>setEnrol({ ...enrol, current_group: e.target.value })} />
            <textarea className="border border-slate-300 rounded-lg p-3" rows="4" placeholder="Opmerkingen (optioneel)" value={enrol.notes} onChange={e=>setEnrol({ ...enrol, notes: e.target.value })} />
            <button className="px-5 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700">Start Aanmelding</button>
          </form>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Adres & Contact</h2>
          <p className="text-slate-700">Voorbeeldstraat 1, 2628 Delft • delft@stanislas.nl • 015-0000000</p>
          <div className="mt-4 w-full h-64 bg-slate-100 rounded-lg grid place-items-center text-slate-500">Kaart</div>
        </section>
      </main>
    </div>
  )
}
