import { PaymentMethodOptions } from "./PaymentMethodOptions";
import { OptionsPaymentContainer } from "./styles";
import { Bank, Money, CreditCard } from 'phosphor-react'
import { Controller } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import { useRef } from "react";

export function OptionsPayment() {
    const { control } = useFormContext()

    
   

    return (
        <Controller
            control={control}
            name="Pagamento"
            render={({ field }) => {

                return (
                    <OptionsPaymentContainer
                        
                        onValueChange={field.onChange}
                        value={field.value}
                        required={true}


                    >
                        
                        <PaymentMethodOptions icon={<CreditCard size={16} />} text="Cartão de crédito" />

                        <PaymentMethodOptions icon={<Bank size={16} />} text="Cartão de débito" />

                        <PaymentMethodOptions icon={<Money size={16} />} text="Dinheiro" />

                    </OptionsPaymentContainer>
                )
            }}
        />
    )



}