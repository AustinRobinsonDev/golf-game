import React, {Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import WaypointContext from '../../context/waypoint/waypointContext';

const Navbar = ({ title }) => {
    const authContext = useContext(AuthContext);
    const waypointContext = useContext(WaypointContext);
    const { clearWaypoints } = waypointContext;
    const { isAuthenticated, logout, user} = authContext;
    const onLogout = () => {
        logout();
        clearWaypoints();
    }

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
            <a onClick={onLogout} href="#!">
                <span className="hide-sm">Logout</span>
            </a>
                
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
                
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
        </Fragment>
    )
    return (
        <div className='navbar bg-primary'>
            <h1>{title}{' '}{icon}</h1>
            <ul>
{isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Waypoint Keeper',
}

export default Navbar