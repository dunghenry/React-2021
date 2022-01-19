import React from 'react';
import Products from './section/Products';
import Details from './section/Details';
import Cart from './section/Cart';
import Payment from './section/Payment';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import {Route} from 'react-router-dom';

class Section extends React.Component {
    render() { 
        return(
            <section>
                    <Route path="/" component={Products} exact/>   
                    <Route path="/product" component={Products} exact/>
                    <Route path="/product/:id" component={Details} exact/>
                    <Route path="/cart" component={Cart} exact/>
                    <Route path="/contact" component={Contact} exact/>
                    <Route path="/about" component={About} exact/>
                    <Route path="/login" component={Login} exact/>
                    <Route path="/payment" component={Payment} exact/>
            </section>
        )
    }
}
 
export default Section;