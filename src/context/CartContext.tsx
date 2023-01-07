import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from 'immer'
import { CreateProductsSelectedData } from "../Pages/Home/components/CoffeeList";
import { Coffees } from "../Data/Coffees";
import { AdrressForm } from "../Pages/CompleteOrder";





interface CartContextType {
    createProductsSelecteds: ( product: Coffees,count: number ) => void;
    removeCartItem: (cartItemId: number) => void
    createFormAdrress: (dataForm: AdrressForm) => void
    changeQuantityInCart: (number: number, id: number) => void
    meansOfPayment: (value: any) => void
    clearCart: () => void

    totalCoffees: number
    cartItems: Coffees[]    
    dataForm: any    
    priceTotal: number    
    paymentValue: string    

}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {

    const [cartItems, setCartItems] = useState<Coffees[]>([])
    const [dataForm, setDataForm] = useState({})
    const [priceTotal, setPriceTotal] = useState(0)
    const [paymentValue, setPaymentValue] = useState("")
    const totalCoffees = cartItems.length


    // função para limpar o carrinho depois de completado o pedido.
    function clearCart() {
        setCartItems([])
    }

    // função que atualiza o valor total do pedido e da compra
    function update() {

        const contagem = cartItems.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0)
        setPriceTotal(contagem)

    }

    useEffect(() => {
        update()
    }, [cartItems])



    // função para guardar no state quais foram os pedidos escolhidos e suas quantidades
    function createProductsSelecteds(product: Coffees, count: number) {

        const coffeData = {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            tags: product.tags,
            description: product.description,
            quantity: count

        }

        if (!totalCoffees) {
            setCartItems(state => [...state, coffeData])

        } else {

            const coffeeExistInCart = cartItems.findIndex(obj => obj.id === coffeData.id);

            if (coffeeExistInCart > -1) {
                cartItems[coffeeExistInCart].quantity += count;


            } else {
                setCartItems(state => [...state, coffeData])

            }
        }
    }

    // Função para modificar a quantidade dos pedidos
    function changeQuantityInCart(countCoffees: number, coffeID: number) {

        if (totalCoffees) {
            const coffeeExistInCart = cartItems.findIndex(obj => obj.id === coffeID);

            if (coffeeExistInCart > -1) {
                cartItems[coffeeExistInCart].quantity = countCoffees;

                update()

            }
        }

    }


    // Função para remover pedido do carrinho
    function removeCartItem(cartItemId: number) {

        // USANDO IMMER
        /*const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);
            if (coffeeExistsInCart >= 0) {
                draft.splice(coffeeExistsInCart, 1)
            }
 
        })
        setCartItems(newCart)*/

        const removeCoffeInCar = cartItems.filter((cartItem) => {
            return cartItem.id !== cartItemId;
        });
        setCartItems(removeCoffeInCar)



    }

    // Criada para guardar informações do formulário de endereço
    function createFormAdrress(data: any) {

        setDataForm(data)

    }

    // para saber qual meio de pagamento foi escolhido
    function meansOfPayment(value: any) {
        setPaymentValue(value.currentTarget.value)
    }


    return (
        <CartContext.Provider value={{
            createProductsSelecteds,
            removeCartItem,
            createFormAdrress,
            changeQuantityInCart,
            meansOfPayment,
            clearCart,
            totalCoffees,
            cartItems,            
            dataForm,            
            priceTotal,            
            paymentValue
            




        }}>
            {children}
        </CartContext.Provider>
    )
}

export type { CreateProductsSelectedData };