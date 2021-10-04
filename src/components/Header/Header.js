import React from "react";
import classes from './Header.module.scss'

let Header = () => {
    return(
            <header className="header">
                <div className="header_title">
                    <img src="https://i.ya-webdesign.com/images/abstract-design-png-5.png"                          alt="header-logo" className="header_title-logo"/>
                    <p className="header_title-text">
                        Header
                    </p>
                </div>

            </header>
        );

};

export default Header