import { DataContent, DeliveryContainer, DeliveryData } from "./styles";
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import delivery from '../../assets/Delivery.svg'
import { BenefitsIcons } from "../../components/BenefitsIcons";


export function Delivery() {
    
    return (
        <DeliveryContainer>
            <h3>Uhu! Pedido confirmado</h3>
            <p>Agora é só aguardar que logo o café chegará até você</p>
            <div>
                <DataContent>
                    <DeliveryData>
                        <BenefitsIcons
                            icon={<MapPin size={16} weight='fill' />}
                            statusColor='purple'
                            text={
                                <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                                    <br />
                                    Farrapos - Porto Alegre, RS
                                </span>
                            }
                        />
                    </DeliveryData>

                    <DeliveryData >
                        <BenefitsIcons
                            icon={<Timer size={16} weight='fill' />}
                            statusColor='yellow'
                            text={
                                <span> Pagamento na entrega
                                    <br />
                                    <strong>Cartão de Crédito </strong></span>

                            }
                        />
                    </DeliveryData>

                    <DeliveryData>

                        <BenefitsIcons
                            icon={<CurrencyDollar size={16} weight='fill' />}
                            statusColor='yellowDark'
                            text={
                                <span>Pagamento na entrega
                                    <br />
                                    <strong>Cartão de Crédito </strong>
                                </span>
                            }
                        />
                    </DeliveryData>
                </DataContent>
                <img src={delivery} alt="" />
            </div>
        </DeliveryContainer>
    )
}