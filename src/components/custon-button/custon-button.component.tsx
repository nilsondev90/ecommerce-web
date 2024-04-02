import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'
import { CustomButtonContainer, IconContainer } from "./custon-button.styles"

/*
ButtonHTMLAttributes<HTMLButtonElement>
Herdar todos os elementos do button do HTML */
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?: React.ReactNode, /* Para suportar ICONES */
    children: string
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({ children, startIcon, ...rest }) => {
    return (
        <CustomButtonContainer {...rest}>
            {startIcon && <IconContainer>{startIcon}</IconContainer>} {/* Se existir icone */}
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton