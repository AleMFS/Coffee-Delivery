import { PaymentMethod } from "./styles";
import { Cards } from 'phosphor-react'
import { ReactNode, useContext } from "react";
import { CartContext } from "../../../../../context/CartContext";

interface PaymentProps {
    icon: ReactNode;
    text: "CARTÃO DE CRÉDITO" | "CARTÃO DE DÉBITO" | "DINHEIRO"
}

export function PaymentMethodOptions({ icon, text }: PaymentProps) {
    const { meansOfPayment} = useContext(CartContext)

    function handleMeansOfPayment(value:any){
        meansOfPayment(value)
    }

    return (
        <PaymentMethod value={text} onClick={handleMeansOfPayment}>
            {icon}
            <p>{text}</p>
        </PaymentMethod>
    )
}