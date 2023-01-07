import { useFormContext } from 'react-hook-form'
import { InputArea, InputCEPForm, InputCityForm, InputComplementForm, InputDistrictForm, InputNumberForm, InputStreetForm, InputUFForm } from "./styles";
import { AdrressForm } from '../..';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';




export function AddressForm() {

    const { register, handleSubmit } = useFormContext<AdrressForm>()
    const {createFormAdrress} = useContext(CartContext)

    function handleSubmitForm(data: AdrressForm) {
        createFormAdrress(data)
        
    }

    return (

        <InputArea id="my-form" onBlur={handleSubmit(handleSubmitForm)}>


            <InputCEPForm placeholder="CEP" id='cep' type="text" className="cep"  {...register('cep', { valueAsNumber: true })} required />

            <InputStreetForm placeholder="Rua" id='rua' className="street" required {...register("rua")} />

            <InputNumberForm placeholder="Número" id='numero' type="text" required {...register("numero")} />

            <InputComplementForm id='complemento' className="complement" {...register("complemento")} placeholder="Complemento                                                            Opcional" />

            <InputDistrictForm placeholder="Bairro" id='bairro' required {...register("bairro")} />

            <InputCityForm placeholder="Cidade" id='cidade' required {...register("cidade")} />

            <InputUFForm placeholder="UF" id='uf' required {...register("uf")} maxLength={2} />



        </InputArea>
    )
}