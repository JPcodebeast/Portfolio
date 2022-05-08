import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/main';
import './index.css'

const rootElement = document.getElementById('root')!
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)

