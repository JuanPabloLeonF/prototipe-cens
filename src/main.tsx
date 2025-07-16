import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './ui/pages/Login/Login.tsx'
import { History } from './ui/pages/History/History.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { storeGlobal } from './domain/statesGlobal/storeGlobal.ts'
import { Provider } from 'react-redux'
import { HeaderSecondary } from './ui/layouts/HeaderSecondary/HeaderSecondary.tsx'
import { HeaderMain } from './ui/layouts/HeaderMain/HeaderMain.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={storeGlobal}>
      <HashRouter>
        <main className='main'>
          <Routes>
            <Route path="/" element={
              <>
                <HeaderMain />
                <Login />
              </>
            } />
            <Route path="history" element={
              <>
                <HeaderSecondary />
                <History />
              </>
            } />
          </Routes>
        </main>
      </HashRouter>
    </Provider>
  </StrictMode>,
)