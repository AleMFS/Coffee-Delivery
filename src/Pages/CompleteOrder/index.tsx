import { useForm } from "react-hook-form";
import { FormProvider } from 'react-hook-form'
import { Order } from "./components/Order";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder() {

    const adrressAndPaymentForm = useForm<any>()



    return (
        <CompleteOrderContainer>
            <FormProvider {...adrressAndPaymentForm}>
                <Order />
                <SelectedCoffees />
            </FormProvider>

        </CompleteOrderContainer>
    )
}