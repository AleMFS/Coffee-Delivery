import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from 'immer'
import { CreateProductsSelectedData } from "../Pages/Home/components/CoffeeList";
import { Coffees } from "../Data/Coffees";
import { AdrressForm } from "../Pages/CompleteOrder";





interface CartContextType {
    createProductsSelecteds: (
        product: Coffees,
        count: number
    ) => void;
    removeCartItem: (cartItemId: number) => void
    totalCoffees: number
    cartItems: Coffees[]
    createFormAdrress: (dataForm: AdrressForm) => void
    dataForm: any
    changeQuantityInCart: (number: number, id: number) => void
    priceTotal: number
    meansOfPayment: (value: any) => void,
    paymentValue:string
    clearCart: () =>void





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

    console.log(dataForm)

    function clearCart(){
        setCartItems([])
    }

    function update() {

        const contagem = cartItems.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0)
        setPriceTotal(contagem)

    }

    useEffect(() => {
        update()
    }, [cartItems])

        


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

    function changeQuantityInCart(countCoffees: number, coffeID: number) {

        if (totalCoffees) {
            const coffeeExistInCart = cartItems.findIndex(obj => obj.id === coffeID);

            if (coffeeExistInCart > -1) {
                cartItems[coffeeExistInCart].quantity = countCoffees;

                update()

            }
        }

    }



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

    function createFormAdrress(data: any) {

        setDataForm(data)
        
    }

    function meansOfPayment(value: any) {
        setPaymentValue(value.currentTarget.value)
    }
    

    return (
        <CartContext.Provider value={{
            createProductsSelecteds,
            totalCoffees,
            cartItems,
            removeCartItem,
            createFormAdrress,
            dataForm,
            changeQuantityInCart,
            priceTotal,
            meansOfPayment,
            paymentValue,
            clearCart




        }}>
            {children}
        </CartContext.Provider>
    )
}

export type { CreateProductsSelectedData };