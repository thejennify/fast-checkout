import React from 'react';
import './index.scss';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart'


class App extends React.Component {

    state = {
        products: data.products,
        type: '',
        sortRange: '',
        item: '',
        cartItems: localStorage.getItem('cartItems') ?
                   JSON.parse(localStorage.getItem('cartItems')) 
                   :[]
    };

    //############ functions #############
    createOrder = (order) => {
        alert('Need to save order for' + order.name);
    };

    addToCart=(product)=>{
    //clone cart items
    const cartItems = this.state.cartItems.slice();
    let itemInCart = false;

    cartItems.forEach(item => {
        if (item._id === product._id){
            item.count++;
            itemInCart = true;
        }
    });
        if (!itemInCart){
            cartItems.push({...product, count: 1})
        }
        this.setState({cartItems});
        //converst cart item from onject to string and tore it in DB
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    removeFromCart = (product) =>{
        //creare a new instance of cartitems inside this function 
        const cartItems = this.state.cartItems.slice();
        const savedItem = cartItems.filter(item => item._id !== product._id);
        this.setState({
            cartItems: savedItem
        });
        localStorage.setItem('cartItems', JSON.stringify(savedItem));
    }

    //lowest to highest and higest to lowest sorting 
    sortProducts = (e) =>{
        const sortValue = e.target.value;
        this.setState({
            sortRange: sortValue,
            products: this.state.products.slice().sort((a, b) => 
            sortValue === 'lowest'? 
                a.price > b.price? 1: -1
           :sortValue === 'highest' ? 
                a.price < b.price? 1: -1
            :a._id > b._id ?
                1 : -1

            ),
        })    
    } 

    //sort Items by type
    filterProducts = (e) => {
        //if any value is not selected, al products will be displayed
        if(e.target.value === ''){
            this.setState({
                type:e.target.value, product:data.products
            })
        } else {
            this.setState({
                type: e.target.value,
                products: data.products.filter(product =>
                product.type.indexOf(e.target.value)>=0)
            })
        }

    }
    
    render() {
        return(
            <div className='grid-container'>
                <header>
                    <a href='/'> Fast Checkout </a>
                </header>
                <main>
                    <div className='content'>
                        <div className='main'>
                            <Filter 
                                count={this.state.products.length}
                                type={this.state.type} 
                                item={this.state.type}
                                sortRange={this.state.sortRange}
                                filterProducts={this.filterProducts}
                                sortProducts={this.sortProducts}
                            />
                            <Products 
                                products={this.state.products}
                                addToCart={this.addToCart}
                             />
                        </div>
                        <div className='sidebar'>
                            <Cart 
                                cartItems={this.state.cartItems}
                                removeFromCart={this.removeFromCart}
                                createOrder={this.createOrder}
                            />
                        </div>
                    </div>
                </main>
                <footer>
                    Footer 
                </footer>
            </div>
        );
    }
}

export default App;
