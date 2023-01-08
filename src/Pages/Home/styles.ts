import styled from "styled-components";
import background from '../../assets/Background.svg'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    


    @media (max-width: 1000px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
`
export const IntroContainer = styled.div`
    width: 100%;    
    background-image: url( ${background}); 
   
       
`

export const IntroContent = styled.div`
    width: 100%;    
    height: 34rem;
    max-width: 70rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        max-width: 29.75rem;       
    }


    @media (max-width: 746px) {
        img{
            display: none;
        }

    }



    
   
   
`
export const IntroDetails = styled.section`
   
   display: flex;
   flex-direction: column;
   gap: 4.125rem;
    
   @media (max-width: 660px){
    padding: 1rem;
   } 
   
`

export const IntroInfo = styled.section`
    max-width: 36.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    

   

    
`
export const IntroTitle = styled.h1`
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors["base-title"]};

    
   
`
export const IntroSubTitle = styled.p`
    font-size: 1.25rem;
    line-height: 1.3;

    
`

export const Benefits = styled.section`
    display: flex;  
    justify-content :flex-start ;
   
    flex-wrap: wrap;
    gap: 1.25rem 2.5rem;
    
    .icons1, .icons2{
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

  
`

