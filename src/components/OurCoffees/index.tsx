
import { Coffees } from "../../Data/Coffees";
import { CoffeeList } from "../../Pages/Home/components/CoffeeList/CoffeeList";
import { CoffeeContainer, CoffeeContent, CoffeeInfo } from "./styles";




export function OurCoffees() {
    return (
        <CoffeeContainer>
            <CoffeeContent>
                <h1>Nossos Cafés</h1>
                <CoffeeInfo>
                    {Coffees.map(coffee => (
                        <CoffeeList key={coffee.id} coffee={coffee} />
                    ))}
             
                </CoffeeInfo>
            </CoffeeContent>
        </CoffeeContainer>
    )
}