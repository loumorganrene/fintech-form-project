import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ErrorPage from './pages/Error/index.tsx'
import './index.css'
import Form from './pages/Form/index.tsx'
import AuthLayout from './components/AuthLayout/index.tsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AuthLayout />}
          errorElement={<ErrorPage />}
        >
          <Route errorElement={<ErrorPage />}>
            <Route index element={<Form />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
