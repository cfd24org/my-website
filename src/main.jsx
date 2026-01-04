// src/main.jsx
// Application bootstrap — mounts the React app into the DOM.
// Purpose: minimal entrypoint used by Vite. Keep this file small and free of
// business logic; move larger page-level code into `src/App.jsx` or `src/components`.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
