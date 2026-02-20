import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Apply theme synchronously before React mounts to avoid flash of light
try {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    // default to dark
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
} catch (e) {
  // If access to localStorage is restricted, ensure dark class is present
  try { document.documentElement.classList.add('dark'); } catch {}
}

// Set CSS variable for safe viewport height to avoid 100vh issues on mobile browsers
try {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  setVh();
  window.addEventListener('resize', setVh);
} catch (e) {
  // ignore
}

function Root() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(<Root />);