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
    const { removeCartItem,  } = useContext(CartContext)
    const [count, setCount] = useState(coffeSelected.quantity);

    function handleChangeQuantity(quantity: number) {
        setCount(quantity)
        
    }
   


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

                            {<CountButton count={count} changeQuantity={handleChangeQuantity} id={coffeSelected.id} />}
                            <Remove removeItemCart={handleRemoveItemCart} />
                        </div>
                    </div>
                </div>
                <h2>{`R$${(count * coffeSelected.price).toFixed(2).replace('.', ',')}`}</h2>
            </div>

        </CoffeesContainer>
    )
}