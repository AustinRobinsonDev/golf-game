import React from 'react';
import {Nav} from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{marginTop: '-50px'}} className='w-100 d-flex justify-content-center footer-container'>
            <Nav defaultActiveKey="/home" as="ul" fixed='bottom'>
                <Nav.Item as="li">
                    <Nav.Link bsPrefix='m-footer' href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link bsPrefix='m-footer' className='m-footer' eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link bsPrefix='m-footer' eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Footer
