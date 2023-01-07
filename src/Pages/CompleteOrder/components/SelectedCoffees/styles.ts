import styled from "styled-components";
import { BaseStylesContainer, ContainerStyle } from "../../styles";

export const SelectedCoffeesContainer = styled(ContainerStyle)`    
    width: 100%;
    max-width: 28rem;
    
    
`
export const CheckOut = styled(BaseStylesContainer)`
    border-radius: 6px 44px 6px 44px;
    
`
export const CheckOutContainer = styled.div`
    margin-right: -1rem;
    padding-right: 1rem;
    max-height: 15.5rem;
    overflow: auto;
    
   `


export const TotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem ;
`

export const BaseTotal = styled.div`
    display: flex;
    justify-content: space-between;
`
export const TotalItens = styled(BaseTotal)`
    h3{
        font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
        line-height: 1.3;
        color: ${({ theme }) => theme.colors["base-text"]};
    }
    
`

export const Shipping = styled(BaseTotal)`
    h3{
        font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
        line-height: 1.3;
        color: ${({ theme }) => theme.colors["base-text"]};
    }
`

export const Total = styled(BaseTotal)`
    
        font-size: ${({ theme }) => theme.textSizes["title-title-s"]};
        font-weight: bold;
        line-height: 1.3;
        color: ${({ theme }) => theme.colors["base-subtitle"]};
        
    
`

export const ConfirmButton = styled.button`
    width: 100%;
    height: 2.875rem;
    margin-top: 1.5rem;
    border-radius: 6px;
    border: none;
    background: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors["base-white"]};
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.6;
    
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background: ${({ theme }) => theme.colors["yellow-dark"]};
    }
`

export const CartEmpty = styled.p`
  color: ${(props) => props.theme.colors.purple};
  font-size: 0.875rem;
  font-family: "Baloo 2";
`;