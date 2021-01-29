import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function Header(props) {
    const {branding} = props;
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        {branding}
                    </Link>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home" /> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link">
                        <i className="fas fa-plus" /> Add 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                        <i className="fas fa-question" /> About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    branding : "My App"
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;
