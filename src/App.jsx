import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Students from './pages/Students'
import Parents from './pages/Parents'
import Education from './pages/Education'
import Profiles from './pages/Profiles'
import VisitUs from './pages/VisitUs'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/groep-8" element={<Students />} />
      <Route path="/ouders" element={<Parents />} />
      <Route path="/onderwijs" element={<Education />} />
      <Route path="/profielen" element={<Profiles />} />
      <Route path="/bezoek-ons" element={<VisitUs />} />
      <Route path="/over-ons" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
