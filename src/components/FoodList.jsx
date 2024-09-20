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
                return <p>{food}</p>
            })}
        </section>
    )
}