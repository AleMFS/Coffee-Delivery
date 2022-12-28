import { RemoveContainer } from "./styles";
import { Trash } from 'phosphor-react'

export function Remove() {
    return (
        <RemoveContainer>
            <Trash size={16} />
            REMOVER
        </RemoveContainer>
    )
}