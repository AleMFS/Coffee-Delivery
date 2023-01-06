import { useContext, useState, } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import { Coffees } from "./Coffees";
import { CheckOut, CheckOutContainer, ConfirmButton, SelectedCoffeesContainer, Shipping, Total, TotalItens, TotalPrice } from "./styles";




export function SelectedCoffees() {
    const { cartItems ,priceTotal} = useContext(CartContext)
    const frete = priceTotal ? 3.5 : 0

    return (
        <SelectedCoffeesContainer>
            <h1>Cafés selecionados</h1>
            <CheckOut>
                <CheckOutContainer>
                    {cartItems.map((productSelected) => (
                        <Coffees coffeSelected={productSelected} key={productSelected.id} />
                    ))}


                </CheckOutContainer>
                <TotalPrice>
                    <TotalItens>
                        <h3>Total de itens</h3>
                        <p>R${priceTotal.toFixed(2).replace('.', ',')}</p>
                    </TotalItens>
                    <Shipping>
                        <h3>Entrega</h3>
                        <p>R${priceTotal ? frete.toFixed(2).replace('.', ','): 0}</p>
                    </Shipping>
                    <Total>
                        <h3>Total </h3>
                        <p>R${(priceTotal + frete).toFixed(2).replace('.', ',')}</p>
                    </Total>
                </TotalPrice>

                <ConfirmButton form="my-form"> CONFIRMAR PEDIDO</ConfirmButton>

            </CheckOut>
        </SelectedCoffeesContainer>
    )
}