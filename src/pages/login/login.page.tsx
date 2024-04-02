// Icones
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

// Components
import Header from "../../components/header/header.component"
import CustomButton from '../../components/custon-button/custon-button.component'

// Styles
import { LoginContainer, LoginContent, LoginHeadLine, LoginInputContainer, LoginSubtitle } from "./login.styles"
import CustomInput from '../../components/custon-input/custon-intput.component'

const LoginPage = () => {
    return (
        <>
            <Header />

            <LoginContainer>
                <LoginContent>
                    <LoginHeadLine>Entre com sua conta</LoginHeadLine>

                    <CustomButton startIcon={<BsGoogle size={18}/>}>Entrar com o Google</CustomButton>

                    <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        <p>E-mail</p>
                        <CustomInput placeholder='Digite seu Email'/>
                    </LoginInputContainer>
                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput placeholder='Digite sua Senha'/>
                    </LoginInputContainer>

                    <CustomButton startIcon={<FiLogIn size={18}/>}>Entrar</CustomButton>
                </LoginContent>
            </LoginContainer>
        </>
    )
}

export default LoginPage