import styled from "styled-components";


export const CoffeeContainer = styled.main`
display: flex;
width: 100%;
max-width: 70rem;
margin: 0 auto;
`

export const CoffeeContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    h1{
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
        line-height: 1.3;
        color:${({ theme }) => theme.colors["base-title"]}; 
    }
`

export const CoffeeInfo = styled.div`
    width: 100%;
    display: flex;    
    //justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 3.375rem;
    gap: 2.5rem 2rem;

`