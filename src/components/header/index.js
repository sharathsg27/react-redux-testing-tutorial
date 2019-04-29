import React from 'react';
import './styles.scss';

const Header = () =>
    <header data-test="headerComponent">
        <div className="wrapper">
            <div className="logo">
                <h3 data-test="logoHeader">Logo</h3>
            </div>
        </div>
    </header>;

export default Header;
