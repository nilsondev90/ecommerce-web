import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

// Styles
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './herader.styles'

const Header = () => {

    const navegate = useNavigate()

    const handleLoginClick = () => {
        navegate('/login')
    }

    return (
        <HeaderContainer>
            <HeaderTitle>CLUB CLOTHING</HeaderTitle>

            <HeaderItems>
                <HeaderItem>Explorar</HeaderItem>
                <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                <HeaderItem>Criar Conta</HeaderItem>
                <HeaderItem>
                    <BsCart3 size={25} />
                    <p style={{ marginLeft: 5 }}>5</p>
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
}

export default Header