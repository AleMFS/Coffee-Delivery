
import { useState } from "react";
import { Coffees } from "../../../../Data/Coffees";
import { CoffeeList } from "../CoffeeList";

import { CoffeeContainer, CoffeeContent, CoffeeInfo } from "./styles";




export function OurCoffees() {

    const [selectedOption, setSelectedOption] = useState('Todos');

    const filteredProducts = Coffees.filter(product => product.tags.includes(`${selectedOption}`));

    return (
        <CoffeeContainer>
            <CoffeeContent>
                <div className="title">
                    <h2>Nossos Cafés</h2>
                    <div>
                        <label className={selectedOption === 'Todos' ? 'active' : ''}>
                            <input
                                type="radio"
                                value="Todos"
                                checked={selectedOption === 'Todos'}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            Todos
                        </label>
                        <label className={selectedOption === 'Tradicional' ? 'active' : ''}>
                            <input
                                type="radio"
                                value="Tradicional"
                                checked={selectedOption === 'Tradicional'}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            Tradicional
                        </label>
                        <label className={selectedOption === 'Especial' ? 'active' : ''}>
                            <input
                                type="radio"
                                value="Especial"
                                checked={selectedOption === 'Especial'}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            Especial
                        </label>
                    </div>
                </div>

                <CoffeeInfo>

                    {selectedOption === 'Todos' ? Coffees.map(coffee => (
                        <CoffeeList coffee={coffee} key={coffee.id} />
                    )) : filteredProducts.map(coffee => (
                        <CoffeeList coffee={coffee} key={coffee.id} />
                    ))}
                </CoffeeInfo>

            </CoffeeContent>
        </CoffeeContainer>
    )
}