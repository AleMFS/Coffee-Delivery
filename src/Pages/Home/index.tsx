import { Benefits, HomeContainer, IntroContainer, IntroContent, IntroDetails, IntroInfo, IntroSubTitle, IntroTitle } from "./styles";
import Introimg from '../../assets/Coffee.svg'

import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

import { BenefitsIcons } from "../../components/BenefitsIcons";
import { OurCoffees } from "./components/OurCoffees";

export function Home() {
    return (
        <HomeContainer>
            <IntroContainer>
                <IntroContent>
                    <IntroDetails>
                        <IntroInfo>
                            <IntroTitle>Encontre o café perfeito para qualquer hora do dia</IntroTitle>
                            <IntroSubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</IntroSubTitle>
                        </IntroInfo>
                        <Benefits>
                            <div className="icons1">
                                <BenefitsIcons
                                    icon={<ShoppingCart size={16} weight="fill" />}
                                    text="Compra simples e segura"
                                    statusColor="yellowDark"
                                />                                
                                <BenefitsIcons icon={<Timer size={16} weight="fill" />}
                                    text="Entrega rápida e rastreada"
                                    statusColor="yellow"
                                />
                            </div>
                            <div className="icons2">
                                <BenefitsIcons icon={<Package size={16} weight="fill" />}
                                    text="Embalagem mantém o café intacto"
                                    statusColor="black"
                                />

                                <BenefitsIcons icon={<Coffee size={16} weight="fill" />}
                                    text="O café chega fresquinho até você"
                                    statusColor="purple"
                                />
                            </div>
                        </Benefits>
                    </IntroDetails>
                    <img src={Introimg} alt="" />
                </IntroContent>
            </IntroContainer>
            <OurCoffees />
        </HomeContainer>
    )
}