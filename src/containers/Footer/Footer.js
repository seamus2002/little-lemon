import LittleLogo from "../../assets/Little Logo.png";

const Footer = () => {
    return (
        <footer className="bg-green">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
                    <div className="col mb-3">
                        <a
                            href="/"
                            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
                        >
                            <img
                                src={LittleLogo}
                                alt="Logo"
                                className="bi me-2"
                                width="100"
                                height="176"
                            />
                        </a>
                    </div>

                    <div className="col mb-3"></div>

                    <div className="col mb-3">
                        <h5>Navigation</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    About
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    Menu
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    Reservations
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    Order Online
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    Log In
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Contact</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    Address
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    Phone Number
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Social Media</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    Instagram
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    Facebook
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 text-reset">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
