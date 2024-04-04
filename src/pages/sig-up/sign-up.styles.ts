import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const SignUpContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 70px;
    padding-bottom: 70px;
    margin-top: 10px;
`

export const SignUpHeadLine = styled.p`
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: ${Colors.text.dark};
    padding-bottom: 10px;
    border-bottom: 1px solid ${Colors.input.placeholder};
    width: 100%;
    text-align: center;
`

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const SignUpInputContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;

    p:nth-child(1) {
        font-weight: 600;
        margin-bottom: 5px;
    }
`