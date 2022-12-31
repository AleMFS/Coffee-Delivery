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
    
    

  
   button{
       
        
    }
`
export const BaseButtonQuantity = styled.button`
    display: flex;
    color: ${({ theme }) => theme.colors["purple"]};
    border: none;
    background: transparent;     
        
    &:hover{
    color: ${({ theme }) => theme.colors["purple-dark"]};
    }
`
export const MoreQuantitySelect = styled(BaseButtonQuantity)`

`
export const LessQuantitySelect = styled(BaseButtonQuantity)`

`