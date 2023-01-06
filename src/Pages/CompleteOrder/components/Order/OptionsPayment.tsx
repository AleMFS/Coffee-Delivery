import { PaymentMethodOptions } from "./PaymentMethodOptions";
import { OptionsPaymentContainer } from "./styles";
import { Bank, Money, CreditCard } from 'phosphor-react'
import { Controller } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

export function OptionsPayment() {
    const { control } = useFormContext()
    return (
        <Controller
            control={control}
            name="type"
            render={({ field }) => {
                console.log(field)
                return (
                    <OptionsPaymentContainer
                        onValueChange={field.onChange}
                        value={field.value}
                    >
                        <PaymentMethodOptions icon={<CreditCard size={16} />} text="CARTÃO DE CRÉDITO" />

                        <PaymentMethodOptions icon={<Bank size={16} />} text="CARTÃO DE DÉBITO" />

                        <PaymentMethodOptions icon={<Money size={16} />} text="DINHEIRO" />

                    </OptionsPaymentContainer>
                )
            }}
        />
    )



}