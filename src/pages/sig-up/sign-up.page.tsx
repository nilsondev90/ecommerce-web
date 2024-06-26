// Firebase
import { addDoc, collection } from 'firebase/firestore'
import { AuthError, AuthErrorCodes, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../config/firebase.config'

// Icons
import { FiLogIn } from 'react-icons/fi'

// Hooks React
import { useForm } from 'react-hook-form'
import validator, { isEmail } from 'validator'

// React
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import CustomButton from "../../components/custon-button/custon-button.component"
import CustomInput from "../../components/custon-input/custon-intput.component"
import Header from "../../components/header/header.component"
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'

// Styles
import { SignUpContainer, SignUpContent, SignUpHeadLine, SignUpInputContainer } from "./sign-up.styles"
import { UserContext } from '../../contexts/user.contexts'

interface SignUpForm {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirmation: string
}

const SignUpPage = () => {

    const {
        register,
        formState: {errors},
        watch,
        setError,
        handleSubmit
    } = useForm<SignUpForm>()

    // Se o usuário está autenticado ou não
    const { isAuthenticated } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/') // Redirecionar para Home
        }
    }, [isAuthenticated])

    const handleSubmitPress = async (data: SignUpForm) => {

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password)

            await addDoc(collection(db, 'users'), {
                id: userCredentials.user.uid,
                firstName: data.firstName,
                lastName: data.lastName,
                email: userCredentials.user.email,
                provider: 'firebase'
            })
        } catch (error) {
            //console.log(error)
            const _error = error as AuthError

            if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
                return setError('email', {type: 'alreadyInUse'})
            }
        }

        //console.log(data)
    }

    const watchPassowrd = watch('password')

    //console.log({errors})

    return (
        <>
            <Header />

            <SignUpContainer>
                <SignUpContent>
                    <SignUpHeadLine>Crie sua conta grátis</SignUpHeadLine>

                    <SignUpInputContainer>
                        <p>Nome</p>
                        <CustomInput
                            hasError={!!errors?.firstName}
                            {...register('firstName', {required: true})}
                            placeholder="Digite seu nome"
                        />
                        {errors?.firstName?.type === 'required' && (
                            <InputErrorMessage>Insira seu nome</InputErrorMessage>
                        )}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Sobrenome</p>
                        <CustomInput
                            hasError={!!errors?.lastName}
                            {...register('lastName', {required: true})}
                            placeholder="Digite seu sobrenome"
                        />
                        {errors?.lastName?.type === 'required' && (
                            <InputErrorMessage>Insira seu sobrenome</InputErrorMessage>
                        )}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Email</p>
                        <CustomInput
                            hasError={!!errors?.email}
                            {...register('email', {required: true,
                                validate: (value) => {
                                    return validator.isEmail(value)
                                }
                            })}
                            placeholder="Digite seu email"
                        />
                        {errors?.email?.type === 'required' && (
                            <InputErrorMessage>O email é obrigatorio</InputErrorMessage>
                        )}
                        {errors?.email?.type === 'validate' && (
                            <InputErrorMessage>Insira um email válido</InputErrorMessage>
                        )}
                        {errors?.email?.type === 'alreadyInUse' && (
                            <InputErrorMessage>Este email já existe</InputErrorMessage>
                        )}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Senha</p>
                        <CustomInput
                            hasError={!!errors?.password}
                            {...register('password', {required: true, minLength: 6})} 
                            placeholder="Digite sua senha" type='password'
                        />
                        {errors?.password?.type === 'required' && (
                            <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
                        )}
                        {errors?.password?.type === 'minLength' && (
                            <InputErrorMessage>A deve conter 6 ou mais caracteres</InputErrorMessage>
                        )}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Confirmar Senha</p>
                        <CustomInput 
                            hasError={!!errors?.passwordConfirmation}
                            {...register('passwordConfirmation', {
                                required: true,
                                minLength: 6,
                                validate: (value) => {
                                    return value === watchPassowrd
                                }
                            })}
                            placeholder="Digite novamente sua senha" type='password'
                        />
                        {errors?.passwordConfirmation?.type === 'required' && (
                            <InputErrorMessage>A confirmação de senha é obrigatória</InputErrorMessage>
                        )}
                        {errors?.passwordConfirmation?.type === 'validate' && (
                            <InputErrorMessage>A confirmação de senha precisa ser igual a senha</InputErrorMessage>
                        )}
                        {errors?.passwordConfirmation?.type === 'minLength' && (
                            <InputErrorMessage>A deve conter 6 ou mais caracteres</InputErrorMessage>
                        )}
                    </SignUpInputContainer>

                    <CustomButton 
                        startIcon={<FiLogIn />}
                        onClick={() => handleSubmit(handleSubmitPress)()}>
                        Criar Conta
                    </CustomButton>
                </SignUpContent>
            </SignUpContainer>
        </>
    )
}

export default SignUpPage