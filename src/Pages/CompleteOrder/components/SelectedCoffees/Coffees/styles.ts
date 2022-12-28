import styled from "styled-components";

export const CoffeesContainer = styled.div`
width: 100%;
display: flex;
padding-bottom: 2rem;
border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
margin-bottom: 1.5rem ;
padding-right: 1rem;

img {
    width: 64px;
}
h2{
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors["base-text"]};
}
.container{
    width: 100%;
    display: flex;
    
}
.primeiro{
    width: 100%;
    display:flex ;
    gap: 1.25rem;
}
.textos{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    p{
        line-height: 1.3;
        color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
}
.segundo {
    display: flex;
    gap: 0.5rem;
}
`

export const RemoveContainer = styled.button`
    display: flex;    
    align-items: center;
    gap: 0.25rem;
    padding: 0 0.5rem;

    background: ${({ theme }) => theme.colors["base-button"]};
    border-radius: 6px;
    border: none;
    font-size: ${({ theme }) => theme.textSizes["text-bold-s"]} ;
    color: ${({ theme }) => theme.colors["base-text"]};;

    svg{
        color: ${({ theme }) => theme.colors["purple"]};
    }

    &:hover{
        background: ${({ theme }) => theme.colors["base-hover"]};
    }
`
