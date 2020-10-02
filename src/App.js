import React from 'react';
import './index.scss';
import data from './data.json';
import Products from './components/Products';

class App extends React.Component {
    state = {
        products: data.products,
        sizes: "",
        sort: "",
    };

    render() {
        return(
            <div className='grid-container'>
                <header>
                    <a href='/'> Fast Checkout </a>
                </header>
                <main>
                    <div className='content'>
                    <div className='main'>
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