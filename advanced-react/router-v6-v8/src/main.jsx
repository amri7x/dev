import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './hooks/ThemeContext.jsx'
import './index.css'
import {AppV8} from './AppV8.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <StrictMode>
      <AppV8 />
    </StrictMode>
  </ThemeProvider>
)
