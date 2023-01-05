import { CoffeesContainer } from "./styles";
import americano from '../../../../../assets/coffee/Americano.svg'
import { CountButton } from "../../../../../components/CountButton";
import { Remove } from "./Remove";
import { CartContext } from "../../../../../context/CartContext";
import { formatMoney } from "../../../../../utils/formatter";
import { useContext, useState } from "react";

interface CoffeesSelectedProps {
    coffeSelected: any
}

export function Coffees({ coffeSelected }: CoffeesSelectedProps) {

    const formattedPrice = formatMoney(coffeSelected.price)
    const { removeCartItem } = useContext(CartContext)
    const [count, setCount] = useState(coffeSelected.quantity);

    const changeQuantityCart = (quantity: number) => {
        setCount(quantity);

    };

    const handleRemoveItemCart = () => {
        removeCartItem(coffeSelected.id)
    }
    return (
        <CoffeesContainer>
            <div className="container">
                <div className="primeiro">
                    <img src={americano} alt="" />
                    <div className="textos">
                        <p>{coffeSelected.name}</p>
                        <div className="segundo">

                            {<CountButton count={count} changeQuantity={changeQuantityCart} />}
                            <Remove removeItemCart={handleRemoveItemCart} />
                        </div>
                    </div>
                </div>
                <h2>R${formattedPrice}</h2>
            </div>

        </CoffeesContainer>
    )
}