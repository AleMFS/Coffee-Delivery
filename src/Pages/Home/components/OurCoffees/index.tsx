
import { Coffees } from "../../../../Data/Coffees";
import { CoffeeList } from "../CoffeeList";

import { CoffeeContainer, CoffeeContent, CoffeeInfo } from "./styles";




export function OurCoffees() {
    return (
        <CoffeeContainer>
            <CoffeeContent>
                <h2>Nossos Cafés</h2>
                
                    <CoffeeInfo>
                        {Coffees.map(coffee => (
                            <CoffeeList coffee={coffee} key={coffee.id} />

                        ))}

                    </CoffeeInfo>
                
            </CoffeeContent>
        </CoffeeContainer>
    )
}