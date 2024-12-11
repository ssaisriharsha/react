import { createRoot } from 'react-dom/client'
import "./index.css"
import Header from "./header"
import MainContent from './mainContent'

createRoot(document.getElementById('root')).render(
  <div className="container">
    <Header />
    <MainContent />
  </div>
)
