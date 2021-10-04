import React from "react";
import classes from './NavBar.module.scss'
import {NavLink} from "react-router-dom";

let NavBar = () => {
    return(
        <nav className="navBar">
            <div className={classes.menu}>
                <NavLink className={classes.item} to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.menu}>
                <NavLink className={classes.item} to="/messages" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.menu}>
                <NavLink className={classes.item} to="/photo" activeClassName={classes.active}>Photo</NavLink>
            </div>
            <div className={classes.menu}>
                <NavLink className={classes.item} to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.menu}>
                <NavLink className={classes.item} to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
          <div className={classes.menu}>
                <NavLink className={classes.item} to="/users" activeClassName={classes.active}>Users</NavLink>
            </div>
        </nav>
    );
};

export default NavBar