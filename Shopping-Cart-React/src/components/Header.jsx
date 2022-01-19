import React from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import {Link, NavLink} from "react-router-dom";
import { DataContext } from './Context';
import './css/Header.css';
class Header extends React.Component {
    static contextType = DataContext;
    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render() { 
        const {toggle} = this.state;
        const {cart} = this.context;
        return(
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="menu" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to="/">Nike</Link></h1>
                </div>
                <nav>
                    <ul  className={toggle ? "toggle" : ""}>
                        <li><NavLink exact={true} to="/" activeClassName="active-link">Home</NavLink></li>
                        <li><NavLink to="/product" activeClassName="active-link">Product</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
                        <li><NavLink to="/login" activeClassName="active-link">Login / Register</NavLink></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <NavLink to="/cart" activeClassName="active-link">
                            <img src={CartIcon} alt="" width="20"/>
                        </NavLink>
                    </div>
                </nav>
            </header>
        )
    }
}
 
export default Header;