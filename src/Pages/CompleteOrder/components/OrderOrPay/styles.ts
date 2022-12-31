import styled from "styled-components";


const CORES = {
    yellow: 'yellow-dark',
    purple: 'purple'
} as const

interface statusProps {
    statusColor: "yellow" | "purple"
}

export const Container = styled.div<statusProps>`
    display: flex;  
    gap: 0.5rem;
    
    
    svg{
        color: ${theme => theme.theme.colors[CORES[theme.statusColor]]}
    }

    > div {

    
    h1{
        font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};;
        color: ${({ theme }) => theme.colors["base-subtitle"]};
        font-weight: 400;
        margin-bottom: 0.125rem;
    }
    p{
        font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
        line-height: 1.3;
        color: ${({ theme }) => theme.colors["base-text"]};
    }
}
`