import Header from "./components/Header/Header.jsx"
import RoutesIndex from '@/routes/RoutesIndex'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
