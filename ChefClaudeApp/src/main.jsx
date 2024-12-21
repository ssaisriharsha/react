import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Header from './components/Header'
import Form from './components/Form'
// console.log(process.env.REACT_APP_GEMINI_API_KEY);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      <Form />
    </main>
  </StrictMode>,
)