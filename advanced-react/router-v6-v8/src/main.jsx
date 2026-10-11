import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {AppV8} from './AppV8.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppV8 />
  </StrictMode>,
)
