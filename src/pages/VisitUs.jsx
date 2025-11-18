import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function VisitUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', event_type: 'lesjesavond', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Versturen...')
    try {
      const res = await fetch(`${BACKEND_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Fout bij versturen')
      setStatus('✅ Inschrijving ontvangen! Je krijgt per e-mail een bevestiging.')
      setForm({ name: '', email: '', phone: '', event_type: 'lesjesavond', message: '' })
    } catch (e) {
      setStatus('❌ Er ging iets mis. Probeer het later opnieuw.')
    }
  }

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Bezoek ons</h1>
        <p className="text-slate-700 mb-6">Meld je aan voor de Lesjesavond, een Open dag of vraag een rondleiding aan.</p>
        <form onSubmit={submit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full border border-slate-300 rounded-lg p-3" placeholder="Naam" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} required />
            <input className="w-full border border-slate-300 rounded-lg p-3" placeholder="E-mail" type="email" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full border border-slate-300 rounded-lg p-3" placeholder="Telefoon" value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })} />
            <select className="w-full border border-slate-300 rounded-lg p-3" value={form.event_type} onChange={e=>setForm({ ...form, event_type: e.target.value })}>
              <option value="lesjesavond">Lesjesavond</option>
              <option value="open_dag">Open dag</option>
              <option value="rondleiding">Rondleiding</option>
            </select>
          </div>
          <textarea className="w-full border border-slate-300 rounded-lg p-3" rows="4" placeholder="Bericht (optioneel)" value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} />
          <button className="px-5 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 w-full sm:w-auto">Versturen</button>
          {status && <p className="text-sm text-slate-700">{status}</p>}
        </form>
      </div>
    </div>
  )
}
