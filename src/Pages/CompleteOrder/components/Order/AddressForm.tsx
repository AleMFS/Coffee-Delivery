import { Input } from "../../../../components/Input";
import { InputArea } from "./styles";

export function AddressForm() {
    return (
        <InputArea>
            <Input placeholder="CEP" type="number" className="cep" />
            <Input placeholder="Rua" className="street" />
            <Input placeholder="Número" type="number" />
            <Input placeholder="Complemento" className="complement" />
            <Input placeholder="Bairro" />
            <Input placeholder="Cidade" />
            <Input placeholder="UF" />

        </InputArea>
    )
}