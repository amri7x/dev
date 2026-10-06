import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { BrowserRouter, Routes } from "react-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes> {/* example: website.com/home => routes/home, that means routes = website.com */}
        <App />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
