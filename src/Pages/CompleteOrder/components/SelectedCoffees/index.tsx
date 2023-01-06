import { useContext, useState, } from "react";
import { useFormContext } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import { Coffees } from "./Coffees";
import { CheckOut, CheckOutContainer, ConfirmButton, SelectedCoffeesContainer, Shipping, Total, TotalItens, TotalPrice } from "./styles";

interface DataForm {
    cep: string    
}


export function SelectedCoffees() {
    const { handleSubmit } = useFormContext()
    const { cartItems, totalCoffees, createFormAdrress } = useContext(CartContext)
   
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
                        <p>R$</p>
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
              
                    <ConfirmButton form="my-form"> CONFIRMAR PEDIDO</ConfirmButton>
                
            </CheckOut>
        </SelectedCoffeesContainer>
    )
}