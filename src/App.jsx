import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './pages/routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

    </>
  )

}

export default App
