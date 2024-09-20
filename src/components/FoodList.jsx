import FoodCard from "./FoodCard"

let foods = [
    "chicken nugget",
    "cookie",
    "sphaghettie",
    "kfc",
    "mcdonalds",
    "burger"
]

export default function FoodList() {
    return (
        <section>
            {foods.map(food => {
                return <FoodCard foodName={food}/>
            })}
        </section>
    )
}