import styled from "styled-components";
import { BaseStylesContainer, ContainerStyle } from "../../styles";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const OrderContainer = styled(ContainerStyle)` 

`


export const Adreess = styled(BaseStylesContainer)`
  
    
`

export const InputArea = styled.form`
    

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

export const OptionsPaymentContainer = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 0.75rem;
    margin-top: 2rem;
`

export const InputBase = styled.input`
    height: 2.625rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    background: ${({ theme }) => theme.colors["base-input"]} ;
    transition: 0.4s;

    &:focus {
        border: ${({ theme }) => theme.colors["yellow-dark"]};

    }
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;

    &::placeholder {
        color: ${({ theme }) => theme.colors["base-label"]};
    }
`

export const InputCEPForm = styled(InputBase)`

`
export const InputStreetForm = styled(InputBase)`
    
`

export const InputNumberForm = styled(InputBase)``

export const InputComplementForm = styled(InputBase)``

export const InputCityForm = styled(InputBase)``

export const InputDistrictForm = styled(InputBase)``

export const InputUFForm = styled(InputBase)`
    text-transform: uppercase;
`
