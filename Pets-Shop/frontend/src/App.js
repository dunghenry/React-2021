import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import DogsPage from './components/Dogs/DogsPage';
import Cart from './components/Cart/Cart';
import NavBar from './Navbar/NavBar';
import {useEffect, useState} from 'react';
import axios from 'axios';

import { CartContext } from "./Contexts/CartContext";

import './App.css';
function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0)
  useEffect(()=>{
    async function getData(){
      const res = await axios.get("https://pets-shop-apis.herokuapp.com/v1/dogs");
      return res;
    }
    getData().then((res) => setAllDogs(res.data))
    getData().catch((error) => console.log(error))
    
  }, [])
  
  return (
    <div className="App">
      <CartContext.Provider value={{myCart, addToCart, total, setTotal}}>
        <Router>
          <NavBar/>
          <div className="page-container">
            <Routes>
              <Route index path="/" element={<Home/>}></Route>
              <Route index path="/dogs" element={<DogsPage allDogs={allDogs}/>}></Route>
              <Route index path="/cart" element={<Cart/>}></Route>
            </Routes>
          </div>
        </Router>
      </CartContext.Provider>
      
    </div>
  );
}

export default App;
