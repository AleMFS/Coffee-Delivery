import { PaymentMethod } from "./styles";
import { Cards } from 'phosphor-react'
import { ReactNode } from "react";

interface PaymentProps{
    icon: ReactNode;
    text: "CARTÃO DE CRÉDITO" | "CARTÃO DE DÉBITO" | "DINHEIRO"
}

export function PaymentMethodOptions({ icon, text}:PaymentProps) {
    return (
        <PaymentMethod value={text} required>
            {icon}
            <p>{text}</p>
        </PaymentMethod>
    )
}