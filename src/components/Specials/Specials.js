import Card from "../Card/Card";
import greekSalad from "../../assets/greek salad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";

const Specials = () => {
    const foodItems = [
        {
            name: "Greek Salad",
            price: "12.99",
            description: "Lorem ipsum",
            image: greekSalad,
        },
        {
            name: "Bruchetta",
            price: "5.99",
            description: "Lorem ipsum",
            image: bruchetta,
        },
        {
            name: "Lemon Dessert",
            price: "5.00",
            description: "Lorem ipsum",
            image: lemonDessert,
        },
    ];

    return (
        <div className="container">
            <h2>Specials</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {foodItems.map((item) => {
                    return (
                        <div className="col">
                            <Card
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Specials;
