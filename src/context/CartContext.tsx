import { createContext, ReactNode, useState } from "react";
import { produce } from 'immer'
import { CreateProductsSelectedData } from "../Pages/Home/components/CoffeeList";
import { Coffees } from "../Data/Coffees";





interface CartContextType {
    createProductsSelecteds: (
        product: Coffees,
        count: number
    ) => void;
    removeCartItem: (cartItemId: number) => void
    totalCoffees: number
    cartItems: Coffees[]


}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {

    const [cartItems, setCartItems] = useState<Coffees[]>([])
    const totalCoffees = cartItems.length



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
            let coffeeExistInCart = cartItems.findIndex(obj => obj.id === coffeData.id);

            if (coffeeExistInCart > -1) {
                cartItems[coffeeExistInCart].quantity += count;
            } else {
                setCartItems(state => [...state, coffeData])
            }
        }


    }


    /*function changeCartItemQuantity(cartItemId: number, count: number) {
        const coffeeExistInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);
            console.log('ola')
       
    };*/

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





    return (
        <CartContext.Provider value={{
            createProductsSelecteds,
            totalCoffees,
            cartItems,
            removeCartItem

        }}>
            {children}
        </CartContext.Provider>
    )
}

export type { CreateProductsSelectedData };