import styled from "styled-components";

export const PaymentMethod = styled.button`

    width: 100%;
    padding: 1rem;
    
    display: flex;
    border: none;
    
    align-items: center;
    gap:0.75rem ;
    background: ${({theme}) => theme.colors["base-button"]};

    svg{
        color:${({theme}) => theme.colors["purple"]}; ;
    }
    p{
        font-size: ${({theme}) => theme.textSizes["text-bold-s"]};
        line-height: 1.6;
        color: ${({theme}) => theme.colors["base-text"]};;
    }
`