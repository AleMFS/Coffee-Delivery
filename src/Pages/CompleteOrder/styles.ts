import styled from "styled-components";

export const CompleteOrderContainer = styled.section`
    width: 100%;
    max-width: 70rem;
    margin: 2.5rem auto;
    gap: 2rem;   

    display: flex;
    
    @media (max-width:820px) {
        display: flex;
        flex-direction: column;
    }

`
export const ContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    h1{
        font-family: 'Baloo 2';
        font-weight: bold;
        font-size: ${({ theme }) => theme.textSizes["title-title-xs"]};
        color: ${({ theme }) => theme.colors["base-subtitle"]};
        margin-bottom: 1rem;
    }
`

export const BaseStylesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    //margin-top: 1rem;
`