import { Cart, CartArea, HeaderContainer, HeaderContent, Locale } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'

import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header() {
    const { totalCoffees , cartItems} = useContext(CartContext)

    


    return (
        <HeaderContainer>
            <HeaderContent>
                <NavLink to='/'>
                    <img src={Logo} alt="" />
                </NavLink>

                <CartArea>
                    <Locale>
                        <MapPin weight="fill" size={22} />
                        <span>Salvador, BA</span>
                    </Locale>

                    <Cart>

                        <NavLink to='/completeOrder'>
                            <ShoppingCart weight="fill" size={22} />
                        </NavLink>

                        {totalCoffees > 0 ? <div>{totalCoffees}</div> : ''}

                    </Cart>



                </CartArea>
            </HeaderContent>
        </HeaderContainer>
    )
}