export interface Coffees {
   id:number;
   name:string;
   description:string;
   price:number;
   image:string
   tags:string[],
   quantity:number
}

export const Coffees:Coffees[] = 
[
   {
      id: 0,
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos", 
      price: 9.90,
      image: "src/assets/coffee/Expresso.svg",
      tags: [
         "Tradicional"
      ],
      quantity: 0
   },
   {
      id: 1,
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.90,
      image: "src/assets/coffee/Americano.svg",
      tags: [
         "Tradicional"
      ],
      quantity: 0
   },    
      {
         id: 2,
         name: "Expresso Cremoso",
         description: "Café expresso tradicional com espuma cremosa",
         price: 9.90,
         image: "src/assets/coffee/ExpressoCremoso.svg",
         tags: [
            "Tradicional"
         ],
         quantity: 0
      },
      {
         id: 3,
         name: "Expresso Gelado",
         description: "Bebida preparada com café expresso e cubos de gelo",
         price: 9.90,
         image: "src/assets/coffee/CafeGelado.svg",
         tags: [
            "Tradicional",
            "Gelado"
         ],
         quantity: 0
      },
      {
         id: 4,
         name: "Café com Leite",
         description: "Meio a meio de expresso tradicional com leite vaporizado",
         price: 9.90,
         image: "src/assets/coffee/CafeComLeite.svg",
         tags: [
            "Tradicional",
            "Com leite"
         ],
         quantity: 0
      },
      {
         id: 5,
         name: "Latte",
         description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
         price: 9.90,
         image: "src/assets/coffee/Latte.svg",
         tags: [
            "Tradicional",
            "Com leite"
         ],
         quantity: 0
      },
      {
         id: 6,
         name: "Capuccino",
         description: "Bebida com canela feita de doses iguais de café, leite e espuma",
         price: 9.90,
         image: "src/assets/coffee/Capuccino.svg",
         tags: [
            "Tradicional",
            "Com leite"
         ],
         quantity: 0
      },
      {
         id: 7,
         name: "Macchiato",
         description: "Café expresso misturado com um pouco de leite quente e espuma",
         price: 9.90,
         image: "src/assets/coffee/Macchiato.svg",
         tags: [
            "Tradicional",
            "Com leite"
         ],
         quantity: 0
      },
      {
         id: 8,
         name: "Mocaccino",
         description: "Café expresso com calda de chocolate, pouco leite e espuma",
         price: 9.90,
         image: "src/assets/coffee/Mocaccino.svg",
         tags: [
            "Tradicional",
            "Com leite"
         ],
         quantity: 0
      },
      {
         id:9,
         name: "Chocolate Quente",
         description: "Bebida feita com chocolate dissolvido no leite quente e café",
         price: 9.90,
         image: "src/assets/coffee/ChocolateQuente.svg",
         tags: [
            "Especial",
            "Com leite"
         ],
         quantity: 0
      },
      {
         id: 10,
         name: "Cubano",
         description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
         price: 9.90,
         image: "src/assets/coffee/Cubano.svg",
         tags: [
            "Especial",
            "Alcoólico",
            "Gelado"
         ],
         quantity: 0
      },
      {
         id: 11,
         name: "Havaiano",
         description: "Bebida adocicada preparada com café e leite de coco",
         price: 9.90,
         image: "src/assets/coffee/Havaiano.svg",
         tags: [
            "Especial"
         ],
         quantity: 0
      },
      {
         id: 12,
         name: "Árabe",
         description: "Bebida preparada com grãos de café árabe e especiarias",
         price: 9.90,
         image: "src/assets/coffee/Arabe.svg",
         tags: [
            "Especial"
         ],
         quantity: 0
      },
      {
         id: 13,
         name: "Irlandês",
         description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
         price: 9.90,
         image: "src/assets/coffee/Irlandes.svg",
         tags: [
            "Especial",
            "Alcoólico"
         ],
         quantity: 0
      }
]