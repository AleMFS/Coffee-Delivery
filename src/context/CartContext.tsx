import { createContext, ReactNode, useState } from "react";
import { produce } from 'immer'
import { CreateProductsSelectedData } from "../Pages/Home/components/CoffeeList";



export interface CartItemsProps extends CreateProductsSelectedData {
    quantity: number
}

interface CartContextType {
    createProductsSelecteds: (
        product: CartItemsProps,
        count: number
    ) => void;
    changeCartItemQuantity: (cartItemId: number, newQuantity: number) => void
    removeCartItem: (cartItemId: number) => void
    totalCoffees: number
    cartItems: CartItemsProps[]


}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {

    const [cartItems, setCartItems] = useState<CartItemsProps[]>([])
    const totalCoffees = cartItems.length



    function createProductsSelecteds(product: CartItemsProps, count: number) {

        const coffeeAlreadyExistInCart = cartItems.findIndex((cartItem) => cartItem.id === product.id);

        const newCart = produce(cartItems, (draft) => {
            if (coffeeAlreadyExistInCart < 0) {
                draft.push(product)
                product.quantity = count

            } else {
                draft[coffeeAlreadyExistInCart].quantity += count
            }
        })

        setCartItems(newCart)
    }

    function changeCartItemQuantity(cartItemId: number, count: number) {
        const coffeeExistInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);

        const newCart = produce(cartItems, (draft) => {
            if (draft[coffeeExistInCart].quantity == 0) {
                console.log('ola')
            }

            draft[coffeeExistInCart].quantity = count

        })
        setCartItems(newCart)
    };

    function removeCartItem(cartItemId: number) {
        
        const coffeeExistInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);  
        const newCart = produce(cartItems, (draft) => {
             draft.splice(coffeeExistInCart,1)
            
        })
        setCartItems(newCart)
       
        /* const removeCoffeInCar = cartItems.filter((cartItem) => {
            return cartItem.id !== cartItemId;
        });
        
        setCartItems(removeCoffeInCar)
        console.log(removeCoffeInCar)*/

    }






    return (
        <CartContext.Provider value={{
            createProductsSelecteds,
            totalCoffees,
            cartItems,
            changeCartItemQuantity,
            removeCartItem

        }}>
            {children}
        </CartContext.Provider>
    )
}

export type { CreateProductsSelectedData };