import { Link } from "react-router-dom";
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
                                <Link
                                    to="/"
                                    className="nav-link p-0 text-reset"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link
                                    to="/"
                                    className="nav-link p-0 text-reset"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link
                                    to="/"
                                    className="nav-link p-0 text-reset"
                                >
                                    Menu
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link
                                    to="/booking"
                                    className="nav-link p-0 text-reset"
                                >
                                    Reservations
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link
                                    to="/"
                                    className="nav-link p-0 text-reset"
                                >
                                    Order Online
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link
                                    to="/"
                                    className="nav-link p-0 text-reset"
                                >
                                    Log In
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Contact</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                123 S. Citrus Avenue
                                <br />
                                Chicago, IL 60610
                            </li>
                            <li className="nav-item mb-2">(312) 555-1234</li>
                            <li className="nav-item mb-2">
                                contact@littlelemonchicago.com
                            </li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Social Media</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link p-0 text-reset"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link p-0 text-reset"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link p-0 text-reset"
                                >
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
