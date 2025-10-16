import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import FoodContextProvider from './FoodContext/FoodContext.jsx'
createRoot(document.getElementById('root')).render(
  <FoodContextProvider>
    <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>,
  </BrowserRouter>
  </FoodContextProvider>
  
  
)
