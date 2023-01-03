import { CoffeesContainer } from "./styles";
import americano from '../../../../../assets/coffee/Americano.svg'
import { CountButton } from "../../../../../components/CountButton";
import { Remove } from "./Remove";
import { CreateProductsSelectedData } from "../../../../../context/CartContext";
import { formatMoney } from "../../../../../utils/formatter";

interface CoffeesSelectedProps {
    coffeSelected: CreateProductsSelectedData
}

export function Coffees({ coffeSelected }: CoffeesSelectedProps) {
    const formattedPrice = formatMoney(coffeSelected.price)

    return (
        <CoffeesContainer>
            <div className="container">
                <div className="primeiro">
                    <img src={americano} alt="" />
                    <div className="textos">
                        <p>{coffeSelected.name}</p>
                        <div className="segundo">
                            {coffeSelected.quantity}
                            {/*<CountButton />*/}
                            <Remove />
                        </div>
                    </div>
                </div>
                <h2>{`R$${formattedPrice}`}</h2>
            </div>

        </CoffeesContainer>
    )
}