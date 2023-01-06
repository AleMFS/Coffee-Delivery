import { Input } from "../../../../components/Input";
import { InputArea } from "./styles";

export function AddressForm() {
    return (
        <InputArea>
            <Input placeholder="CEP" type="number" className="cep" required />
            <Input placeholder="Rua" className="street" required />
            <Input placeholder="Número" type="number" required />
            <Input placeholder="Complemento" className="complement" required />
            <Input placeholder="Bairro" required />
            <Input placeholder="Cidade" required />
            <Input placeholder="UF" required />

        </InputArea>
    )
}