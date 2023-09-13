import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";

const Nav = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                HOME
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">
                                ABOUT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                MENU
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/booking">
                                RESERVATIONS
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">
                                ORDER ONLINE
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                LOG IN
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
