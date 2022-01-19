import {  NavLink } from 'react-router-dom'
import './navbar.css';
import {useContext} from 'react';
import {CartContext} from '../Contexts/CartContext';
const NavBar = () => {
    const {myCart} = useContext(CartContext)
    
    return (
        <>
            <nav className="navbar">
                <NavLink to="/" activeclassname="active">Home</NavLink>
                <NavLink to="/dogs" activeclassname="active">Dogs</NavLink>
                <NavLink to="/cart" activeclassname="active">My Cart<span className="cart-number">{myCart.length -1}</span></NavLink>
            </nav>
        </>
    )
}

export default NavBar;
