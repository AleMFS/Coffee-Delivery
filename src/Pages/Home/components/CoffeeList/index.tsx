import { CountButton } from '../../../../components/CountButton'
import { ButtonCartBuy, Buy, CartBuy, CoffeeListContainer, Price, Tags } from './styles'
import { ShoppingCartSimple, } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatter';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../context/CartContext';



export interface CreateProductsSelectedData {
    price: number;
    image?: string;
    name: string;    
    id: number;
}

interface CoffeeProps {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tags: string[]
    quantity: number
}

interface CoffeeDataProps {
    coffee: CoffeeProps
}




export function CoffeeList({ coffee }: CoffeeDataProps) {
    const { createProductsSelecteds, } = useContext(CartContext)

    const formattedPrice = formatMoney(coffee.price)

    const [count, setCount] = useState(0)

    function handleChangeQuantity(quantity: number) {
        setCount(quantity);
       
    }
    


    return (
        <CoffeeListContainer >

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

                    <CountButton changeQuantity={handleChangeQuantity} count={count} />

                    <ButtonCartBuy
                        disabled={count == 0}
                        type="button"
                        onClick={() => {
                            createProductsSelecteds(coffee, count)
                        }}
                    >
                        <ShoppingCartSimple  weight="fill" />
                    </ButtonCartBuy>
                </CartBuy>
            </Buy>

        </CoffeeListContainer>

    )

}