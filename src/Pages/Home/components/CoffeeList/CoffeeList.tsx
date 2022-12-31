import cafe from '../../../../assets/cafe.svg'
import { CountButton } from '../../../../components/CountButton'
import { ButtonCartBuy, Buy, CartBuy, CoffeeListContainer, CountArea, Price, Tags } from './styles'
import { ShoppingCartSimple, Target } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatter';
import { FormProvider, useForm } from 'react-hook-form'
import { FormEvent, useEffect, useState } from 'react';




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

interface CountCoffeForm {
    coffees: number
}


interface CartCoffes {
    id: number
    name: string
    quantity: number
    img: string
}

export function CoffeeList({ coffee }: CoffeeDataProps) {
    const formattedPrice = formatMoney(coffee.price)
    const [cart, setCart] = useState<CartCoffes[]>([])
    let total:any = []
    const [cont, setCont] = useState(1)

    const countForm = useForm<CountCoffeForm>()

    const { watch, reset, handleSubmit, setValue } = countForm



    function handleAddCart(data: any) {
        const DateCoffe = {
            id: coffee.id,
            name: coffee.name,
            img: coffee.image,
            quantity: data.coffees
        }
        setCart(state => [...state, DateCoffe])
        total.push(DateCoffe)
        console.log(cart)
        console.log(total)
    }
    



    function adicionar() {
        setCont(state => state + 1)
        setValue("coffees", cont + 1)
    }

    function remover() {
        if (cont > 0) {
            setCont(state => state - 1)
            setValue("coffees", cont - 1)
        } else {
            setCont(0)
        }
    }



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
                <CartBuy onSubmit={handleSubmit(handleAddCart)}>
                    <FormProvider {...countForm}>
                        <CountButton adicionar={adicionar} remover={remover} cont={cont} />
                    </FormProvider>


                    <ButtonCartBuy type="submit">
                        <ShoppingCartSimple size={22} weight="fill" />
                    </ButtonCartBuy>
                </CartBuy>
            </Buy>

        </CoffeeListContainer>

    )
}