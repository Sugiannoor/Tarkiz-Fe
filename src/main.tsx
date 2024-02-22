import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

import { ThemeProvider } from "@material-tailwind/react";
import { AppRoutes } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider >
    <AppRoutes/>
    </ThemeProvider>
  </React.StrictMode>,
)
