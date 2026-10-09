import { BrowserRouter, Routes, Route, Link } from "react-router"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Vans } from "./pages/Vans/Vans"
import { Dashboard } from "./pages/Host/Dashboard"
import { Income } from "./pages/Host/Income"
import { Reviews } from "./pages/Host/Reviews"
import { VanDetail } from "./pages/Vans/VanDetail"
import { Layout } from "./components/Layout"
import { HostLayout } from "./components/HostLayout"

import "./server"

export const App = () => {
  return(
  <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
)}