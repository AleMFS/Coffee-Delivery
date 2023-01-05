import { RemoveContainer } from "./styles";
import { Trash } from 'phosphor-react'

interface RemoveItem {
    removeItemCart: () => void
}

export function Remove({ removeItemCart }: RemoveItem) {
    return (
        <RemoveContainer onClick={removeItemCart}>
            <Trash size={16} />
            REMOVER
        </RemoveContainer>
    )
}