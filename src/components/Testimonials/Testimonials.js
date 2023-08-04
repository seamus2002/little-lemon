import Testimony from "../Testimony/Testimony";

const Testimonials = () => {
    const testimonyData = [
        {
            name: "Adam",
            rating: 5,
            review: "Lorem ipsum",
            // image: greekSalad,
        },
        {
            name: "Bianca",
            rating: 5,
            review: "Lorem ipsum",
            // image: bruchetta,
        },
        {
            name: "Cole",
            rating: 4.5,
            review: "Lorem ipsum",
            // image: lemonDessert,
        },
        {
            name: "Dana",
            rating: 5,
            review: "Lorem ipsum",
            // image: lemonDessert,
        },
    ];
    return (
        <div className="bg-green">
            <div className="container">
                <div className="px-4 py-5 my-5 text-center">
                    <h2>Testimonials</h2>
                </div>
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3">
                    {testimonyData.map((item) => {
                        return (
                            <div className="col">
                                <Testimony
                                    name={item.name}
                                    rating={item.rating}
                                    review={item.review}
                                    image={item.image}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
