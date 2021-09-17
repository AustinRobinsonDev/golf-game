import React, {Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {

    const guestLinks = (
        <Fragment>
                
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>About</button>
                </li>
        </Fragment>
    )
    return (
        <div className='navbar bg-primary'>
            <h1>{title}{' '}</h1>
            <ul>
{guestLinks}
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Golf, uht!',
}

export default Navbar