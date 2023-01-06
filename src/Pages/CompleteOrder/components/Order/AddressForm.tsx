import { useFormContext } from 'react-hook-form'
import { Input } from "../../../../components/Input";
import { useForm, SubmitHandler } from 'react-hook-form'
import { InputArea, InputCEPForm, InputCityForm, InputComplementForm, InputDistrictForm, InputNumberForm, InputStreetForm, InputUFForm } from "./styles";


interface AdrressForm {
    cep: number
    rua: string
    numero: string;
    bairro: string;
    cidade: string;
    complemento: string
    uf: string
}

export function AddressForm() {
    
    const { register, handleSubmit } = useForm<AdrressForm>()

    function handleSubmitForm(data: AdrressForm) {
        console.log(data)
    }





    return (

        <InputArea id="my-form" onSubmit={handleSubmit(handleSubmitForm)}>


            <InputCEPForm placeholder="CEP" id='cep' type="text" className="cep"  {...register('cep', { valueAsNumber: true })} />

            <InputStreetForm placeholder="Rua" id='rua' className="street" required {...register("rua")} />

            <InputNumberForm placeholder="Número" id='numero' type="text" required {...register("numero")} />

            <InputComplementForm  id='complemento' className="complement" {...register("complemento")}  placeholder="Complemento                                                            Opcional"/>

            <InputDistrictForm placeholder="Bairro" id='bairro' required {...register("bairro")} />

            <InputCityForm placeholder="Cidade" id='cidade' required {...register("cidade")} />

            <InputUFForm placeholder="UF" id='uf' required {...register("uf")} maxLength={2} />



        </InputArea>
    )
}