import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const PaymentMethod = styled(RadioGroup.Item)`

    width: 100%;
    padding: 1rem;
    
    display: flex;
    border: none;
    border-radius: 6px;
    
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

    &[data-state='checked']{
        border: 1px solid ${({theme}) => theme.colors.purple};
        background: ${({theme}) => theme.colors["purple-light"]};
;
    }
`