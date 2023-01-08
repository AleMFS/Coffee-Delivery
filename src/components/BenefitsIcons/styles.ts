import styled from "styled-components";


const STATUS_COLORS = {
    yellow: 'yellow',
    yellowDark: 'yellow-dark',
    black: 'base-text',
    purple: 'purple'   
} as const

interface statusProps{
    statusColor:  "yellowDark" | "yellow" | "black" | "purple"
}

export const BenefitsContainer = styled.div<statusProps>`
    display: flex;
    
    align-items: center;
    gap: 0.75rem;    

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        background: ${theme => theme.theme.colors[STATUS_COLORS[theme.statusColor]]};
        border-radius: 999px;

        svg{
            color: ${({ theme }) => theme.colors["base-white"]};   
        }
       
    }

    p{
        line-height: 1.3;
        color: ${({ theme }) => theme.colors["base-text"]};
    }
`