import { Children, createContext, ReactNode } from "react";

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

}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {

    function createProductsSelecteds(product: CreateProductsSelectedData, count: number) {
        const newProductsSelected: CreateProductsSelectedData = {
            price: product.price,
            image: product.image,
            name: product.name,
            quantity: count,
            id: product.id,
        };

    }
    return (
        <CartContext.Provider value={{
            createProductsSelecteds,

        }}>
            {children}
        </CartContext.Provider>
    )
}