
import { Coffees } from "../../../../Data/Coffees";
import { CoffeeList } from "../CoffeeList";

import { CoffeeContainer, CoffeeContent, CoffeeInfo } from "./styles";




export function OurCoffees() {
    return (
        <CoffeeContainer>
            <CoffeeContent>
                <h1>Nossos Cafés</h1>
                <CoffeeInfo>
                    {Coffees.map(coffee => (
                        <CoffeeList coffee={coffee} key={coffee.id} />                      
                        
                    ))}
             
                </CoffeeInfo>
            </CoffeeContent>
        </CoffeeContainer>
    )
}