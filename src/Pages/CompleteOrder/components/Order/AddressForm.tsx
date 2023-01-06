import { useFormContext } from 'react-hook-form'
import { Input } from "../../../../components/Input";
import { InputArea } from "./styles";



export function AddressForm() {
    const { register } = useFormContext()

   

    return (
        
        <InputArea>
            <Input placeholder="CEP" id='cep' type="number" className="cep" required {...register("cep", { valueAsNumber: true })} />

            <Input placeholder="Rua" id='rua' className="street" required {...register("rua")} />

            <Input placeholder="Número" id='numero' type="text" required {...register("numero", { valueAsNumber: true })} />

            <Input placeholder="Complemento" id='complemento' className="complement" {...register("complemento")} />

            <Input placeholder="Bairro" id='bairro' required {...register("bairro")} />

            <Input placeholder="Cidade" id='cidade' required {...register("cidade")} />

            <Input placeholder="UF" id='uf' required {...register("uf")} />

        </InputArea>
    )
}