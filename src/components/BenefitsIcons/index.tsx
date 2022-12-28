import { BenefitsContainer } from "./styles";
import { ReactNode } from "react";



interface IconsProps {
    icon: ReactNode
    text: any
    statusColor: "yellowDark" | "yellow" | "black" | "purple"
}

export function BenefitsIcons({ icon, text, statusColor }: IconsProps) {
    return (
        <BenefitsContainer statusColor={`${statusColor}`}>
            <div>
                {icon}
            </div>
            <p>{text}</p>
        </BenefitsContainer>
    )
}