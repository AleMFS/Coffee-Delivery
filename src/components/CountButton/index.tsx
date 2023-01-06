import { CountContainer, LessQuantitySelect, MoreQuantitySelect } from "./styles";
import { Plus, Minus } from 'phosphor-react'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

interface QuantityProps {
    changeQuantity: (number: number) => void;
    count: number;
    id?: any
}

export function CountButton({ changeQuantity, count, id }: QuantityProps) {
    const { changeQuantityInCart, removeCartItem } = useContext(CartContext)

    function handleChangeQuantity(number: number, id: number) {
        changeQuantity(number)
        changeQuantityInCart(number, id)

        if (number === 0) {
            removeCartItem(id)
        }

    }



    return (
        <CountContainer>
            <MoreQuantitySelect type="button" onClick={() => count > 0 && handleChangeQuantity(count - 1, id)}>
                <Minus size={14} weight="bold" />
            </MoreQuantitySelect>

            {count}

            <LessQuantitySelect type="button" onClick={() => handleChangeQuantity(count + 1, id)}>
                <Plus size={14} weight="bold" />
            </LessQuantitySelect>
        </CountContainer>
    )
}