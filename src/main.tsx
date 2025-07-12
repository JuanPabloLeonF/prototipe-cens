import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './ui/pages/Login/Login.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { storeGlobal } from './domain/statesGlobal/storeGlobal.ts'
import { Provider } from 'react-redux'
import { BASE_URL } from './domain/models/envirments.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={storeGlobal}>
      <BrowserRouter basename={BASE_URL}>
        <main className='main'>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)