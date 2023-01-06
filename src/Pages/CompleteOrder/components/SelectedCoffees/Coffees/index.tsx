import { CoffeesContainer } from "./styles";

import { CountButton } from "../../../../../components/CountButton";
import { Remove } from "./Remove";
import { CartContext } from "../../../../../context/CartContext";
import { formatMoney, priceFormatter } from "../../../../../utils/formatter";
import { useContext, useEffect, useState } from "react";

interface CoffeesSelectedProps {
    coffeSelected: any
}

export function Coffees({ coffeSelected }: CoffeesSelectedProps) {
    const formattedPrice = formatMoney(coffeSelected.price)
    const { removeCartItem, modificar } = useContext(CartContext)
    const [count, setCount] = useState(coffeSelected.quantity);

    const changeQuantityCart = (quantity: number) => {
        setCount(quantity);

    };

    useEffect(() => {
        modificar(count)
    }, [count])




    const handleRemoveItemCart = () => {
        removeCartItem(coffeSelected.id)
    }
    return (
        <CoffeesContainer>
            <div className="container">
                <div className="primeiro">
                    <img src={coffeSelected.image} alt="" />
                    <div className="textos">
                        <p>{coffeSelected.name}</p>
                        <div className="segundo">

                            {<CountButton count={count} changeQuantity={changeQuantityCart} />}
                            <Remove removeItemCart={handleRemoveItemCart} />
                        </div>
                    </div>
                </div>
                <h2>{`R$${(count * coffeSelected.price).toFixed(2).replace('.', ',')}`}</h2>
            </div>

        </CoffeesContainer>
    )
}