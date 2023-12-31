import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// behind the scene createRoot creates DOM like structure
// now compare this dom with the original dom
// and update only those which gets updated in UI
// but what browser do is remove whole dom and re-paint whole dom again
// this is called page reload
// web structure dubara se tyar ho raha hai
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
