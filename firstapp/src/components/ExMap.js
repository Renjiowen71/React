const data = [
    {
        id: 1,
        title: "Tiramisu",
        description: "Tiramisu is a cake",
        calories: 300,
        price: 5.0
    },
    {
        id: 2,
        title: "Apple",
        description: "Apple is a fruit",
        calories: 30,
        price: 4.0
    },
    {
        id: 3,
        title: "Ice Cream",
        description: "I like ice cream",
        calories: 400,
        price: 3.0
    },
    {
        id:4,
        title: "Burger",
        description: "I love burger",
        calories: 500,
        price: 7.0
    },
    {
        id:5,
        title: "Veggies",
        description: "I hate veggies",
        calories: 50,
        price: 2.0
    }
]

function ExMap(){
    const foods = data
    .filter(food =>{
        return food.price>3.0;
    })
    .sort((a,b) => {
        return a.price>b.price;
    })
    .map(food =>{
        const content = `${food.title} - ${food.description}`;
        return (
            <li key={food.id}>
                {content}
                <ul>
                    <li>Calories : {food.calories} cal</li>
                    <li>Price : ${food.price}</li>
                </ul>
            </li>
        )
    })
    return (
        <ol>
            {foods}
        </ol>
    )
}

export default ExMap;