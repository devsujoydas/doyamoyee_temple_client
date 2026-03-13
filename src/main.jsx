import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/router';
import { HelmetProvider } from 'react-helmet-async';
import "./i18n";
import Lenis from 'lenis';
  
 
const lenis = new Lenis();
 
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
