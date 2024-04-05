// Icones
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator, { isEmail } from 'validator'

// Components
import Header from "../../components/header/header.component"
import CustomButton from '../../components/custon-button/custon-button.component'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'

// Styles
import { LoginContainer, LoginContent, LoginHeadLine, LoginInputContainer, LoginSubtitle } from "./login.styles"
import CustomInput from '../../components/custon-input/custon-intput.component'
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase.config'

interface LoginForm {
    email: string
    password: string
}

const LoginPage = () => {

    const {
        register,
        formState: { errors },
        setError,
        handleSubmit
    } = useForm<LoginForm>()

    const handleSubmitPress = async (data: LoginForm) => {
        //console.log(data)
        try {
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            console.log(userCredentials)
        } catch (error) {

            const _error = error as AuthError

            if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
                return setError('password', { type: 'mismatch' }) // mismatch - senha não corresponde
            }

            if (_error.code === AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER) {
                return setError('password', { type: 'blocktempaccount' }) // mismatch - senha não corresponde
            }

            if (_error.code === AuthErrorCodes.USER_DELETED) {
                return setError('email', { type: 'notFound' })
            }

            console.log(error)
        }
    }

    //console.log(errors)

    return (
        <>
            <Header />

            <LoginContainer>
                <LoginContent>
                    <LoginHeadLine>Entre com sua conta</LoginHeadLine>

                    <CustomButton startIcon={<BsGoogle size={18} />}>Entrar com o Google</CustomButton>

                    <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        <p>E-mail</p>
                        <CustomInput
                            hasError={!!errors?.email}
                            placeholder='Digite seu Email'
                            {...register('email', {
                                required: true,
                                validate: (value) => {
                                    return validator.isEmail(value)
                                }
                            })}
                        />
                        {errors?.email?.type === 'required' && (
                            <InputErrorMessage>O Email é obrigatório!</InputErrorMessage>
                        )}
                        {errors?.email?.type === 'validate' && (
                            <InputErrorMessage>Insira um email válido</InputErrorMessage>
                        )}
                        {errors?.email?.type === 'notFound' && (
                            <InputErrorMessage>O email não foi encontrado</InputErrorMessage>
                        )}
                    </LoginInputContainer>
                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput
                            type='password'
                            hasError={!!errors?.password}
                            placeholder='Digite sua Senha'
                            {...register('password', { required: true })}
                        />
                        {errors?.password?.type === 'required' && (
                            <InputErrorMessage>A senha é obrigatória!</InputErrorMessage>
                        )}
                    </LoginInputContainer>

                    <CustomButton
                        startIcon={<FiLogIn size={18} />}
                        onClick={() => handleSubmit(handleSubmitPress)()}>
                        Entrar
                    </CustomButton>
                    {errors?.password?.type === 'mismatch' && (
                        <InputErrorMessage>Senha incorreta ou email não existe</InputErrorMessage>
                    )}
                    {errors?.password?.type === 'blocktempaccount' && (
                        <InputErrorMessage>Conta Suspensa por múltiplas tentativas de login.</InputErrorMessage>
                    )}
                </LoginContent>
            </LoginContainer>
        </>
    )
}

export default LoginPage