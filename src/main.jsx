import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ImagesContextProvider } from './context/ImagesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImagesContextProvider>
      <App />
    </ImagesContextProvider>
  </React.StrictMode>
)
