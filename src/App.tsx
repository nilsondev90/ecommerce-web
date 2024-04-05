import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Page
import HomePage from './pages/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sig-up/sign-up.page'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase.config'

const App: FunctionComponent = () => {

  // Monitorar se o usuário está logado ou não.
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App