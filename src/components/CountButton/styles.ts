import styled from "styled-components";

export const CountContainer = styled.div`  
    width: 72px;
    height: 38px;
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: ${({ theme }) => theme.colors["base-button"]};
    gap: 0.25rem;
    
    

   input{
    max-width: 1.25rem;
    text-align: center;
    background: transparent;
    border: none;

    &::placeholder{
        color: ${({ theme }) => theme.colors["base-title"]};
    }
   }

    button{
        display: flex;
        color: ${({ theme }) => theme.colors["purple"]};
        border: none;
        background: transparent;     
        
        &:hover{
            color: ${({ theme }) => theme.colors["purple-dark"]};
        }
        
    }
`