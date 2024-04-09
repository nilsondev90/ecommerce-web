import { FunctionComponent, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Page
import HomePage from './pages/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sig-up/sign-up.page'

// Firebase
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.contexts'
import { collection, getDocs, query, where } from 'firebase/firestore'

const App: FunctionComponent = () => {

  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  // Monitorar se o usuário está logado ou não.
  onAuthStateChanged(auth, async (user) => {
    //console.log(user)

    // Se o usuário estiver autenticado e não houver usuário
    const isSigningOut = isAuthenticated && !user
    if (isSigningOut) {
      return logoutUser()
    }

    // Se o usuário for nulo no context e não nulo no firebase
    // Fazer Login
    const isSigningIn = !isAuthenticated && user
    if (isSigningIn) {
      // Pegar dados do Firebase
      const querySnapshort = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )

      const userFromFirestore = querySnapshort.docs[0]?.data()

      return loginUser(userFromFirestore as any)
    }
  })

  console.log(isAuthenticated)

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