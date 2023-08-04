import LittleLogo from "../../assets/Little Logo.png";

const Footer = () => {
    return (
        <footer className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
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
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Menu
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Reservations
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Order Online
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Log In
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Contact</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Address
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Phone Number
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Email
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Social Media</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Instagram
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Facebook
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a
                                href="/"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
