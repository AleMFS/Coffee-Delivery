import { DataContent, DeliveryContainer, DeliveryData } from "./styles";
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import delivery from '../../assets/Delivery.svg'
import { BenefitsIcons } from "../../components/BenefitsIcons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export function Delivery() {
    const {dataForm ,paymentValue} = useContext(CartContext)

    
   
    
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
                                <span>Entrega em <strong>: {dataForm.rua}, {dataForm.numero} </strong>
                                    <br />
                                    {dataForm.bairro} - {dataForm.cidade}, {dataForm.uf}
                                </span>
                            }
                        />
                    </DeliveryData>

                    <DeliveryData >
                        <BenefitsIcons
                            icon={<Timer size={16} weight='fill' />}
                            statusColor='yellow'
                            text={
                                <span> Previsão de entrega
                                    <br />
                                    <strong>20 min - 30 min </strong></span>

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
                                    <strong>{paymentValue} </strong>
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