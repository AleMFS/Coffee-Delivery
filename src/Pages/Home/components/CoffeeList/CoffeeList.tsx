import cafe from '../../../../assets/cafe.svg'
import { CountButton } from '../../../../components/CountButton'
import { ButtonCartBuy, Buy, CartBuy, CoffeeListContainer, CountArea, Price, Tags } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatter';




interface CoffeeProps {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tags: string[]
}

interface CoffeeDataProps {
    coffee: CoffeeProps
}

export function CoffeeList({ coffee }: CoffeeDataProps) {
    const formattedPrice = formatMoney(coffee.price)

    return (
        <CoffeeListContainer>

            <img src={coffee.image} alt="" />
            <Tags>
                {coffee.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </Tags>
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
            <Buy>
                <Price>
                    <span>R$</span>
                    {formattedPrice}</Price>
                <CartBuy>
                    <CountButton />

                    <ButtonCartBuy>
                        <ShoppingCartSimple size={22} weight="fill" />
                    </ButtonCartBuy>
                </CartBuy>
            </Buy>

        </CoffeeListContainer>

    )
}