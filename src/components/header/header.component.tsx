import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.contexts'

// Styles
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './herader.styles'

// Firebase
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'

const Header = () => {

    const navegate = useNavigate()

    // Verificar se o usuário está autenticado
    const { isAuthenticated } = useContext(UserContext)

    const handleLoginClick = () => {
        navegate('/login')
    }

    const handleSignUpClick = () => {
        navegate('/sign-up')
    }

    return (
        <HeaderContainer>
            <HeaderTitle>CLUB CLOTHING</HeaderTitle>

            <HeaderItems>
                <HeaderItem>Explorar</HeaderItem>
                {
                    !isAuthenticated && ( // Se o usuário estiver autenticado
                        <>
                            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                            <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
                        </>
                    )
                }
                {
                    isAuthenticated && ( // Se o usuário não estiver autenticado
                        <HeaderItem onClick={() => { signOut(auth) }}>sair</HeaderItem>
                    )
                }
                <HeaderItem>
                    <BsCart3 size={25} />
                    <p style={{ marginLeft: 5 }}>5</p>
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
}

export default Header