import { useContext, useEffect, useState, } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import { Coffees } from "./Coffees";
import { CartEmpty, CheckOut, CheckOutContainer, ConfirmButton, SelectedCoffeesContainer, Shipping, Total, TotalItens, TotalPrice } from "./styles";




export function SelectedCoffees() {
    const { cartItems, priceTotal, dataForm, paymentValue ,clearCart} = useContext(CartContext)
    const frete = priceTotal ? 3.5 : 0

    const [dataFormEmpty, setDataFormEmpty] = useState(true);

    //verificar se o objeto está vazio

    useEffect(() => {
        if (Object.keys(dataForm).length === 0) {
            setDataFormEmpty(true);
        }

        if (Object.keys(dataForm).length > 0) {
            setDataFormEmpty(false);
        }
    }, [dataForm]);

    function handleAlertForm() {
        if (dataFormEmpty === true) {
            alert("Preencha os dados de entrega para seguir! 🏠");
        } else if (paymentValue === "") {
            alert("Por favor, escolha uma forma de pagamento!");
        }else{
            clearCart()
        }
    }



    return (
        <>
            {priceTotal > 0 ? (
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
                                <p>R${priceTotal ? frete.toFixed(2).replace('.', ',') : 0}</p>
                            </Shipping>
                            <Total>
                                <h3>Total </h3>
                                <p>R${(priceTotal + frete).toFixed(2).replace('.', ',')}</p>
                            </Total>
                        </TotalPrice>
                        <NavLink to={`${dataFormEmpty === true || paymentValue === ""
                            ? "/completeOrder"
                            : "/orderConfirmed"
                            }`} >
                            <ConfirmButton form="my-form" onClick={handleAlertForm} > CONFIRMAR PEDIDO</ConfirmButton>
                        </NavLink>


                    </CheckOut>
                </SelectedCoffeesContainer>
            ) : (
                <CartEmpty>Nenhum produto selecionado</CartEmpty>
            )}
            

        </>
    )
}