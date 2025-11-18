import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import { USPSection, SplitSection, ProfilesPreview, Testimonial } from '../components/Sections'

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <USPSection />
      <SplitSection />
      <ProfilesPreview />
      <Testimonial />
      <footer className="py-8 text-center text-slate-500">© Stanislas VMBO Mavo Delft</footer>
    </div>
  )
}
