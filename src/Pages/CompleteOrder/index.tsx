import { Order } from "./components/Order";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder() {
    return (
        <CompleteOrderContainer>
            <Order />
            <SelectedCoffees />
        </CompleteOrderContainer>
    )
}