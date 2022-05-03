import {Link} from 'react-router-dom';
import React from "react";

import classes from './MainNavigation.module.css';
import * as routes from "../../const/Routes";


const MainNavigation = () => {


    const logoutHandler = () => {
    };

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to={routes.home_route}>Home</Link>
                    </li>
                    <li>
                        <Link to={routes.add_competitor_route}>Add competitor</Link>
                    </li>
                    <li>
                        <button>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
