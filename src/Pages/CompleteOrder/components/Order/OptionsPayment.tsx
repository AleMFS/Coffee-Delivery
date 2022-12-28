import { PaymentMethodOptions } from "./PaymentMethodOptions";
import { OptionsPaymentContainer } from "./styles";
import {Bank,Money, CreditCard} from 'phosphor-react'

export function OptionsPayment() {
    return (
        <OptionsPaymentContainer>
            <PaymentMethodOptions icon={<CreditCard size={16}/>} text="CARTÃO DE CRÉDITO" />
            <PaymentMethodOptions icon={<Bank size={16}/>} text="CARTÃO DE DÉBITO"/>
            <PaymentMethodOptions icon={<Money size={16}/>} text="DINHEIRO"/>
        </OptionsPaymentContainer>
    )
}