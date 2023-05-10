import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routers/Router.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>
)
