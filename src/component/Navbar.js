import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import logo from "../logo.svg";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Product
                        </Link>
                    </li>
                </ul>
                <Link to="/chart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                        </span>
                        MY CHART
                    </ButtonContainer>
                </Link>
            </nav>
        )
    }
}

export default Navbar;




