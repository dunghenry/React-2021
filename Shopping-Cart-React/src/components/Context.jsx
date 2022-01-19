import React from 'react';
export const DataContext = React.createContext();
export class DataProvider extends React.Component {
    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefctFD1yY3ORqoer4ewPCjcqbkq5x6l6AnQ&usqp=CAU",
                "description": "UI/UX designing, html css tutorials",
                "content": "Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfQsPhvkSo5Us5K_xW61sK0Y0zvWuI8v3lA&usqp=CAU",
                "description": "UI/UX designing, html css tutorials",
                "content": "Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTsl5QLgCTToiiO2Y1gR9WbhcoQoXKs1GVw&usqp=CAU",
                "description": "UI/UX designing, html css tutorials",
                "content": "Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9orJou_tDcl1CEGXYXu2Rd89A_qqSprVUg&usqp=CAU",
                "description": "UI/UX designing, html css tutorials",
                "content": "Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABjZnOth9MN77RQijhS_ryl2u0vKnw5XFng&usqp=CAU",
                "description": "UI/UX designing, html css tutorials",
                "content": "Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTBAMSc37Z4urWLl2nB9izhIocTYClMOrrQ&usqp=CAU",
                "description": "UI/UX designing, html css tutorials",
                "content": "Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   
    render() { 
        const {products, cart, total} = this.state;
        const {addCart, reduction, increase, removeProduct, getTotal} = this;
        return(
            <div>
               <DataContext.Provider value={{products, addCart, cart, reduction, increase, removeProduct, getTotal, total}}>
                   {this.props.children}
               </DataContext.Provider>
            </div>

        )
    }
}
