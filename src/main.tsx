import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
        clientId="16a7172736004e65988d9ebd3813dc6f"
        domain="https://lokkidev.kinde.com"
        redirectUri="http://localhost:5173"
        logoutUri="http://localhost:5173"
    >

    <TodosContextProvider >
      <App />
    </TodosContextProvider>
    </KindeProvider>
  </StrictMode>,
)
