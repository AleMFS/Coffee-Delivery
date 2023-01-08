import styled from "styled-components";


export const CoffeeListContainer = styled.div`
    width: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 6px 36px 6px 36px;

    background: ${({ theme }) => theme.colors["base-card"]};

    img{
        margin-top: -1.25rem;
    }    

    h3{
        font-family: 'Baloo 2' ;
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 1.3;
        margin-top: 1rem;
    }
    p{      
        
        font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
        line-height: 1.3;
        color: ${({ theme }) => theme.colors["base-label"]};
        text-align: center;
        padding: 0 1.25rem;
        margin-top: 0.5rem;
    }
`
export const Tags = styled.div`
    display: flex;
    gap: 0.25rem;

    span {
        padding: 0.25rem 0.5rem;
        background: ${({ theme }) => theme.colors["yellow-light"]};
        color: ${({ theme }) => theme.colors["yellow-dark"]};
        margin-top: 0.75rem;
        border-radius: 100px;

        font-weight: bold;
        font-size: ${({ theme }) => theme.textSizes["components-tag"]};
        line-height: 1.3;
        
    }
`

export const Buy = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25rem 1.5rem;
    margin-top: 2rem;

`
export const Price = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.25rem;
    font-family: 'Baloo 2';
    font-size: ${({theme}) => theme.textSizes["title-title-m"]};
    font-weight: 800;
    line-height: 1.3;
    

    span{
        font-family: 'Roboto';
        font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
        font-weight: 400;
        line-height: 1.8;
        
    }
`
export const CartBuy = styled.form`
    display: flex;
    gap: 0.5rem;
    
    
`
export const CountArea = styled.div`    
    width: 100%;
    background: ${({theme}) => theme.colors["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;
`

export const ButtonCartBuy = styled.button`
    
    display: flex;
    max-width: 7.375rem;
    padding: 0.5rem;
    background: ${({theme}) => theme.colors["purple-dark"]};
    border-radius: 6px;
    border: none;

    svg{
        color: ${({theme}) => theme.colors["base-white"]};
        font-size: 1.375rem;
    }

    &:hover{
        background: ${({theme}) => theme.colors["purple"]};
    }
    
`