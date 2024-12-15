import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Header from './components/Header'
import Form from './components/Form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      <Form />
    </main>
  </StrictMode>,
)