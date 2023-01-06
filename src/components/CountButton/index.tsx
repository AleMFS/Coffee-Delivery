import { CountContainer, LessQuantitySelect, MoreQuantitySelect } from "./styles";
import { Plus, Minus } from 'phosphor-react'

interface QuantityProps {
    changeQuantity: (number: number) => void;
    count: number;
}

export function CountButton({ changeQuantity, count }: QuantityProps) {

    


    return (
        <CountContainer>
            <MoreQuantitySelect type="button" onClick={() => count > 0 && changeQuantity(count - 1)}>
                <Minus size={14} weight="bold" />
            </MoreQuantitySelect>

            {count}

            <LessQuantitySelect type="button" onClick={() => changeQuantity(count + 1)}>
                <Plus size={14} weight="bold" />
            </LessQuantitySelect>
        </CountContainer>
    )
}