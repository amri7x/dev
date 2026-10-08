import { BrowserRouter, Routes, Route, Link } from "react-router"
import {About} from "./pages/About"
import {Home} from "./pages/Home"
import {Vans} from "./pages/Vans"
import { VanDetail } from "./pages/VanDetail"
import { Layout } from "./components/Layout"

import "./server"

export const App = () => {
  return(
  <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
)}