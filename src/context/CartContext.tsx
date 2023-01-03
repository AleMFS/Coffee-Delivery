import { createContext, ReactNode, useState } from "react";
import { current, produce } from 'immer'



export interface CreateProductsSelectedData {
    price: number;
    image?: string;
    name: string;
    quantity: number;
    id: number;
}

interface CartContextType {
    createProductsSelecteds: (
        product: CreateProductsSelectedData,
        count: number
    ) => void;
    totalCoffees: number
    cartItems: CreateProductsSelectedData[]


}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {

    const [cartItems, setCartItems] = useState<CreateProductsSelectedData[]>([])
    const totalCoffees = cartItems.length



    function createProductsSelecteds(product: CreateProductsSelectedData, count: number) {

        const coffeeAlreadyExistInCart = cartItems.findIndex((cartItem) => cartItem.id === product.id);



        const newCart = produce(cartItems, (draft) => {
            if (coffeeAlreadyExistInCart < 0) {
                draft.push(product)

            } else {
                draft[coffeeAlreadyExistInCart].quantity += count
            }
        })

        setCartItems(newCart)









        /* const newProductsSelected: CreateProductsSelectedData = {
             price: product.price,
             image: product.image,
             name: product.name,
             quantity: count,
             id: product.id,
         };*/

    }




    return (
        <CartContext.Provider value={{
            createProductsSelecteds,
            totalCoffees,
            cartItems

        }}>
            {children}
        </CartContext.Provider>
    )
}