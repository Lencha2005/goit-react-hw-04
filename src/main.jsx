import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModalContextProvider } from './context/ModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalContextProvider>
    <App />
    </ModalContextProvider>
  </StrictMode>,
)
