import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { PokemonsProvider } from './contexts/PokemonsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokemonsProvider>
  </React.StrictMode>,
)
