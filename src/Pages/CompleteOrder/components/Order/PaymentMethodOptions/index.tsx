import { PaymentMethod } from "./styles";
import { Cards } from 'phosphor-react'
import { ReactNode } from "react";

interface PaymentProps{
    icon: ReactNode;
    text: string
}

export function PaymentMethodOptions({ icon, text}:PaymentProps) {
    return (
        <PaymentMethod>
            {icon}
            <p>{text}</p>
        </PaymentMethod>
    )
}