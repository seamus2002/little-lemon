import Testimony from "../Testimony/Testimony";
import man1 from "../../assets/man1.jpg";
import woman1 from "../../assets/woman1.jpg";
import woman2 from "../../assets/woman2.jpg";
import woman3 from "../../assets/woman3.jpg";

const Testimonials = () => {
    const testimonyData = [
        {
            name: "Jessica P.",
            rating: "★★★★★",
            review: "I celebrated my anniversary there, and it turned out to be an exceptional evening. The ambiance is romantic and cozy, setting the stage for an intimate dinner.",
            image: woman1,
        },
        {
            name: "Michael R.",
            rating: "★★★★★",
            review: "The consistency in their high-quality ingredients and innovative recipes keeps me coming back for more. The staff is always going the extra mile to make you feel like a cherished guest.",
            image: man1,
        },
        {
            name: "Emily L.",
            rating: "★★★★★",
            review: "As a food enthusiast, I'm always on the lookout for unique dining experiences, and Little Lemon exceeded my expectations. This hidden gem is a treasure trove of delightful surprises.",
            image: woman2,
        },
        {
            name: "Sarah T.",
            rating: "★★★★★",
            review: "I've fallen in love with the charming ambiance and delectable dishes at Little Lemon! The menu is a delightful journey through culinary creativity, and every bite is a burst of flavors.",
            image: woman3,
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
