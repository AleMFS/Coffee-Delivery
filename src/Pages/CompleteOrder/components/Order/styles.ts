import styled from "styled-components";
import { BaseStylesContainer, ContainerStyle } from "../../styles";

export const OrderContainer = styled(ContainerStyle)` 

`


export const Adreess = styled(BaseStylesContainer)`
  
    
`
export const InputArea = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;
    margin-top: 2rem;

    .cep{
        grid-column: span 3;
        max-width: 12.5rem;
    }
    .street{
        grid-column: span 3;
    }
    .complement {
        grid-column: span 2;
    }
`

export const Payment = styled(BaseStylesContainer)`
    margin-top: 0.75rem;
`

export const OptionsPaymentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 0.75rem;
    margin-top: 2rem;
`