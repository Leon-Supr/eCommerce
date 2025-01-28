import Header from "./components/Header/Header.jsx"
import RoutesIndex from '@/routes/RoutesIndex'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from "@/contexts/AuthContext.jsx"

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
