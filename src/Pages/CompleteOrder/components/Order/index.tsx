import { OrderOrPay } from "../OrderOrPay";
import { Adreess, InputArea, OrderContainer, Payment } from "./styles";
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { AddressForm } from "./AddressForm";
import { OptionsPayment } from "./OptionsPayment";

export function Order() {

    return (
        <OrderContainer>
            <h1>Complete seu pedido</h1>
            <Adreess>
                <OrderOrPay
                    icon={<MapPinLine size={22} />}
                    statusColor="yellow"
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                />
                <AddressForm />
            </Adreess>
            <Payment>
                <OrderOrPay
                    icon={<CurrencyDollar size={22} />}
                    statusColor="purple"
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                />
                <OptionsPayment />
            </Payment>


        </OrderContainer>
    )
}