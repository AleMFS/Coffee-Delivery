import styled from "styled-components";
import background from '../../assets/Background.svg'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const IntroContainer = styled.div`
    width: 100%;    
    background-image: url( ${background});    
    //background: green;
`

export const IntroContent = styled.div`
    width: 100%;    
    height: 34rem;
    max-width: 70rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

   
`
export const IntroDetails = styled.div`
   
   display: flex;
   flex-direction: column;
   gap: 4.125rem;
    
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
    font-size: ${({ theme }) => theme.textSizes["title-title-xl"]};
    line-height: 1.3;

    color: ${({ theme }) => theme.colors["base-title"]};
`
export const IntroSubTitle = styled.p`
    font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
    line-height: 1.3;
`

export const Benefits = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem 2.5rem;
  

`

