import { CountContainer } from "./styles";
import { Plus, Minus } from 'phosphor-react'
import { useFormContext } from "react-hook-form";

interface teste {
    adicionar: () => void
    remover: () => void
    cont: number
}

export function CountButton({ adicionar, remover ,cont}: teste) {
    const { register } = useFormContext()
    return (
        <CountContainer>
            <button onClick={remover} type="button" ><Minus size={14} weight="bold" /></button>
            <input type="number"  {...register('coffees', { valueAsNumber: true })} value={cont} />
            <button onClick={adicionar} type="button"><Plus size={14} weight="bold" /></button>
        </CountContainer>
    )
}