import React from 'react';
import './index.scss';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';


class App extends React.Component {
    state = {
        products: data.products,
        type: '',
        sortRange: '',
        item: ''
    };
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
                    <Products products={this.state.products} />
                    </div>
                    <div className='sidebar'>Shopping cart</div>
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
