import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {LanguageController} from "./contexts/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageController>
      <App />
    </LanguageController>
  </React.StrictMode>
)
