import { FunctionComponent, InputHTMLAttributes} from 'react'

// Styles
import { CustonInputContainer } from './custon-input.styled'

interface CustonInputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}

const CustomInput: FunctionComponent<CustonInputProps> = ({ hasError, ...rest }) => {
    return <CustonInputContainer hasError={hasError} {...rest}/>
}

export default CustomInput