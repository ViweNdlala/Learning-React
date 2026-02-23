import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Packing from './Packing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Packing />
  </StrictMode>,
)
