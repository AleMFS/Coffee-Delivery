import { Coffees } from "./Coffees";
import { CheckOut, CheckOutContainer, ConfirmButton, SelectedCoffeesContainer, Shipping, Total, TotalItens, TotalPrice } from "./styles";

export function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>
            <h1>Cafés selecionados</h1>
            <CheckOut>
                <CheckOutContainer>
                    <Coffees />
                    <Coffees />
                </CheckOutContainer>
                <TotalPrice>
                    <TotalItens>
                        <h3>Total de itens</h3>
                        <p>R$19,80</p>
                    </TotalItens>
                    <Shipping>
                        <h3>Entrega</h3>
                        <p>R$ 3,50</p>
                    </Shipping>
                    <Total>
                        <h3>Total </h3>
                        <p>R$ 23,30</p>
                    </Total>
                </TotalPrice>
                <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
            </CheckOut>
        </SelectedCoffeesContainer>
    )
}