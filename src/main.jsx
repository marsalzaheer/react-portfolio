import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import App from './App.jsx'
import './style.css' // Ensure your main CSS is imported

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
