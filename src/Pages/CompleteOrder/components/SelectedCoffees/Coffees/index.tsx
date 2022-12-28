import { CoffeesContainer } from "./styles";
import americano from '../../../../../assets/coffee/Americano.svg'
import { CountButton } from "../../../../../components/CountButton";
import { Remove } from "./Remove";

export function Coffees() {
    return (
        <CoffeesContainer>
            <div className="container">
                <div className="primeiro">
                    <img src={americano} alt="" />
                    <div className="textos">
                        <p>Expresso tradicional</p>
                        <div className="segundo">
                            <CountButton />
                            <Remove />
                        </div>
                    </div>
                </div>
                <h2>R$9,90</h2>
            </div>

        </CoffeesContainer>
    )
}