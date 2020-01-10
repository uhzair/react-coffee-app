import React from 'react';

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">Coffee App</a>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;