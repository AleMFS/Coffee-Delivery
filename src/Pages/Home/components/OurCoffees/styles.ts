import styled from "styled-components";


export const CoffeeContainer = styled.main`
display: flex;
width: 100%;
max-width: 70rem;
margin: 0 auto;


.title{
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        gap: 0.5rem;

        label{
            background: ${props => props.theme.colors.purple};
            color: ${props => props.theme.colors["base-white"]};
            font-weight: bold;
            border-radius: 6px;
            padding: 0.75rem;

            input[type="radio"] {
            display: none;
            }

            :hover{
                background: ${props => props.theme.colors["purple-dark"]};
                
            }
            
        }
    }

    .active{
                background: ${props => props.theme.colors["purple-dark"]};
            }
}
`

export const CoffeeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;

    h2{
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
        line-height: 1.3;
        color:${({ theme }) => theme.colors["base-title"]}; 
    }
   
`

export const CoffeeInfo = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;  

    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 3.375rem;
    gap: 2.5rem 2rem;

    @media (max-width: 630px){
        justify-content: center;
    }
`