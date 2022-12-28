import { CountContainer } from "./styles";
import { Plus, Minus } from 'phosphor-react'

export function CountButton() {

    return (
        <CountContainer>
            <button><Minus size={14} weight="bold" /></button>
            <input value={1} type="number" />
            <button><Plus size={14} weight="bold" /></button>
        </CountContainer>
    )
}