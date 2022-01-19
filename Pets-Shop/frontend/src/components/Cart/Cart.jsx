import {useContext} from 'react';
import {useNavigate} from 'react-router';
import { CartContext } from '../../Contexts/CartContext';
const Cart = () => {
    const {myCart, total, setTotal, addToCart} = useContext(CartContext)
    const handleCheckout = () =>{
        setTotal(0);
        addToCart([{}])
    }
    const navigate = useNavigate();
    const handleHome = () =>{
        navigate('/');
    }
    return (
        <>
            <section className="cart-container">
                <section  className="cart-header">
                    
                </section>
                <section  className="cart-items">
                    { 
                        myCart.slice(1).map((item, index) =>{
                            return(
                                <div className="cart-item" key={index}>
                                    <img src={item.imageUrl} className="cart-item-img" alt="Error"/>
                                    {item.name} : {item.price}$
                                </div>
                            )
                        })
                    }
                    <div className="cart-total">TOTAL: {total}$</div>
                </section>
                <button className="cart-checkout" onClick={handleCheckout}>Done</button>
                <button className="cart-gohome" onClick={handleHome}>Go Home</button>
            </section>
        </>
    )
}

export default Cart
