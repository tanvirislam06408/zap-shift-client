import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './router/routes.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './context/AuthContext/AuthProvider.jsx'
AOS.init({
  duration: 1500
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="font-urbanist">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>,
)
