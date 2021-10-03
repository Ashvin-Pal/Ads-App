import { NavLink } from "react-router-dom";
import { APP_ROUTE } from "../config";
import "../css/Navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar primary-color-dark">
            <div className="navbar-content">
                <NavLink className="active" to={APP_ROUTE.HOME}>
                    Admobs
                </NavLink>
            </div>
        </div>
    );
};
