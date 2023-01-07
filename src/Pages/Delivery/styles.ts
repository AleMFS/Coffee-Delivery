import styled from "styled-components";

export const DeliveryContainer = styled.section`
    width: 100%;
    max-width: 70rem;
    margin: 5rem auto 0;     

    display: flex;
    flex-direction: column;

    >h3{
        font-family: 'Baloo 2';
        font-size: 2rem;
        line-height: 1.3;
        font-weight: 800;
        color: ${({ theme }) => theme.colors["yellow-dark"]};
    }

    >p{
        font-size:${({ theme }) => theme.textSizes["text-regular-l"]}; 
        color: ${({ theme }) => theme.colors["base-subtitle"]};;
        margin-bottom: 2.5rem;
    }

    >div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
export const DataContent = styled.div`
    width: 100%;
    max-width: 32.875rem;
    display: flex;
    flex-direction: column;
    //border: 1px solid;    
    //border-radius: 6px 36px 6px 36px;   
    
    background: linear-gradient(#fff, #fff) padding-box,linear-gradient(45deg, #DBAC2C, #8047F8) border-box;
    border: 1px solid transparent;
    border-radius: 6px 36px 6px 36px;
    padding: 2.5rem;
    gap: 2rem;
    
`

export const DeliveryData = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 24.125rem;
    gap: 0.75rem;

   
    
`