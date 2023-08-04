import Restaurant from "../../assets/restaurant.jpg";

const Header = () => {
    return (
        <header className="bg-green">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src={Restaurant}
                            className="d-block mx-lg-auto img-fluid"
                            alt="Restaurant"
                            width="700"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">
                            Little Lemon
                        </h1>
                        <p className="lead">
                            Based in Chicago, Illinois, Little Lemon is a
                            family-owned Mediterranean restaurant, focused on
                            traditional recipes served with a modern twist. The
                            chefs draw inspiration from Italian, Greek, and
                            Turkish culture and have a menu of 12–15 items that
                            they rotate seasonally. The restaurant has a rustic
                            and relaxed atmosphere with moderate prices, making
                            it a popular place for a meal any time of the day.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg px-4 me-md-2"
                            >
                                Reserve a Table
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
