import React, {useState, useContext} from 'react';
import { CartContext } from '../../Contexts/CartContext';
const DogsCar = (props) => {
    const {name, breed, description, price, imageUrl} = props;
    const [isAdded, setAdded] = useState(false);
    const {myCart, addToCart, setTotal} = useContext(CartContext)
    const handleClick = () =>{
        setAdded(true)
        const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl,
        }
        addToCart((item) =>[...item, newItems]);
        setTotal((total) => (total += Number(price)));
    }
    
    return (
        <>
           <section className="dogs">
               <div className="dogs-info">
                    <p>{name}</p>
                    <p>{breed}</p>
               </div>
               <div className="dogs-img-container">
                    <img className="dog-img" src={imageUrl}/>
               </div>
               <div className="dogs-desc">
                    {description}
               </div>
               <div className="dogs-price">
                    {price}$
               </div>
               {
                   isAdded ?
                    (<button disabled className="dogs-btn-disabled">ADDED</button>) : (<button className="dogs-btn" onClick={handleClick}>ADD TO CART</button>)
               }
               
           </section>
        </>
    )
}

export default DogsCar
