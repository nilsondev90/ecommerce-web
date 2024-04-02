import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Page
import HomePage from './pages/home.page'

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App