import React, { useContext } from "react";

import AuthContext from "../../store/AuthContext";
import classes from "./Navigation.module.css";

const Navigation = () => {
    const contextObject = useContext(AuthContext);
    return (
        <nav className={classes.nav}>
            <ul>
                {contextObject.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {contextObject.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {contextObject.isLoggedIn && (
                    <li>
                        <button onClick={contextObject.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
