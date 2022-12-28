import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;    
   
    padding: 2rem 0;
    background: ${({ theme }) => theme.colors["base-background"]};

    display: flex;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;

    

`
export const HeaderContent = styled.div`
        width: 100%;
        max-width: 70rem;
        margin: 0 auto;
        display: flex;
        
        justify-content: space-between;
        
    
`
export const CartArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`

export const Locale = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    background: ${({ theme }) => theme.colors["purple-light"]};
    color: ${({ theme }) => theme.colors["purple-dark"]};
   
    line-height: 1.3;
    border-radius: 6px;
    padding: 0.5rem;
    
`
export const Cart = styled.div`
    background: ${({ theme }) => theme.colors["yellow-light"]};
    border-radius: 6px;
    padding: 0.5rem;
    position: relative;
    
    


    svg{
        color:${({ theme }) => theme.colors["yellow-dark"]};
        border: none;
    }

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;;
        border-radius: 999px;
        
        background: ${({theme}) => theme.colors["yellow-dark"]};
        color: ${({theme}) => theme.colors["base-white"]};
        width: 1.25rem;
        height: 1.25rem;
        font-size: 12px;
    }
`
