import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import { App } from '@/app/routes/app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
