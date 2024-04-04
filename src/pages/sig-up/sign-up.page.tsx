// Icons
import { FiLogIn } from 'react-icons/fi'

// Hooks React
import { useForm } from 'react-hook-form'
import validator, { isEmail } from 'validator'

// Components
import CustomButton from "../../components/custon-button/custon-button.component"
import CustomInput from "../../components/custon-input/custon-intput.component"
import Header from "../../components/header/header.component"

// Styles
import { SignUpContainer, SignUpContent, SignUpHeadLine, SignUpInputContainer } from "./sign-up.styles"
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'

interface SignUpForm {
    name: string,
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
        handleSubmit
    } = useForm<SignUpForm>()

    const handleSubmitPress = (data: SignUpForm) => {
        console.log(data)
    }

    const watchPassowrd = watch('password')

    console.log({errors})

    return (
        <>
            <Header />

            <SignUpContainer>
                <SignUpContent>
                    <SignUpHeadLine>Crie sua conta</SignUpHeadLine>

                    <SignUpInputContainer>
                        <p>Nome</p>
                        <CustomInput
                            hasError={!!errors?.name}
                            {...register('name', {required: true})}
                            placeholder="Digite seu nome"
                        />
                        {errors?.name?.type === 'required' && (
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
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Senha</p>
                        <CustomInput
                            hasError={!!errors?.password}
                            {...register('password', {required: true})} 
                            placeholder="Digite sua senha" type='password'
                        />
                        {errors?.password?.type === 'required' && (
                            <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
                        )}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Confirmar Senha</p>
                        <CustomInput 
                            hasError={!!errors?.passwordConfirmation}
                            {...register('passwordConfirmation', {
                                required: true,
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