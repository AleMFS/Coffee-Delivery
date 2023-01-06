import { useForm } from "react-hook-form";
import { FormProvider } from 'react-hook-form'
import { Order } from "./components/Order";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";


export interface AdrressForm {
    cep: number
    rua: string
    numero: string;
    bairro: string;
    cidade: string;
    complemento: string
    uf: string
   
}

export function CompleteOrder() {

    const adrressAndPaymentForm = useForm<AdrressForm>()



    return (
        <CompleteOrderContainer>
            <FormProvider {...adrressAndPaymentForm}>
                <Order />
                <SelectedCoffees />
            </FormProvider>

        </CompleteOrderContainer>
    )
}