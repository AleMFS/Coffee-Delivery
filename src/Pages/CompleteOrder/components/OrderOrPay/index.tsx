import { Container } from "./styles";
import { ReactNode } from "react";

interface OrderProps {
    icon: ReactNode;    
    title: string;
    subtitle: string
    statusColor: 'yellow' | 'purple'
}

export function OrderOrPay({ icon, statusColor, title, subtitle }: OrderProps) {
    return (
        <Container statusColor={`${statusColor}`}>
            {icon}
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </Container>
    )
}