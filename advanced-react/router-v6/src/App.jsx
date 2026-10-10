import { BrowserRouter, Routes, Route, Link } from "react-router"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Vans } from "./pages/Vans/Vans"
import { Dashboard } from "./pages/Host/Dashboard"
import { Income } from "./pages/Host/Income"
import { HostVans } from "./pages/Host/HostVans"
import { HostVanDetail } from "./pages/Host/HostVanDetail"
import { HostVanDescription } from "./pages/Host/HostVanDescription"
import { HostVanPhotos } from "./pages/Host/HostVanPhotos"
import { HostVanPricing } from "./pages/Host/HostVanPricing"
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
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanDescription />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos/>} />
            </Route>  
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
)}