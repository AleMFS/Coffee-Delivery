import { Cart, CartArea, HeaderContainer, HeaderContent, Locale } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'

import { NavLink } from 'react-router-dom'
import { useState } from "react";

export function Header() {
    const [cont,setcont] = useState(2)

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
                        <NavLink to='/completeorder'>
                            <ShoppingCart weight="fill" size={22} /> 
                                                     
                        </NavLink>
                        <div>2</div> 

                    </Cart>


                </CartArea>
            </HeaderContent>
        </HeaderContainer>
    )
}