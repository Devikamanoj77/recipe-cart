import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import cartStore from './redux/cartStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={cartStore}>
      <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
