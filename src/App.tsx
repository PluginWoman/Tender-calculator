import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import PromoPage from './pages/PromoPage'
import CalculatorPage from './pages/CalculatorPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<PromoPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Route>
    </Routes>
  )
}
