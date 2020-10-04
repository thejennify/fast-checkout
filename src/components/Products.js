import React, { Component } from 'react';
import '../Products.scss';
import '../index.scss';
import formatCurrency from './util';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';

class Products extends Component {
    state={
        product: null
    };

    openModal = (product) =>{
        this.setState({product});
    };

    closeModal =() =>{
        this.setState({product: null})
    }

    render() {
        const product= this.state.product
        return (
            <div>
            <Fade bottom cascade>
              <ul className='products'>
                {this.props.products.map(product => (
                    <li key={product._id}>
                    <div className ='product'>
                    <a href={'#'+ product._id} onClick={() => this.openModal(product)}>
                        <img src={product.image} alt={product.title} />
                        <p className='title'>{product.title}</p>
                    </a>
                    <div className='product-price'>
                    <div className='price'>{formatCurrency(product.price)}</div>
                    <button onClick={() => this.props.addToCart(product)} 
                        className='button primary'> Add to cart</button>
                    </div>
                    </div>
                    </li>
                ))}
              </ul>  
              </Fade>
              {product && (
                  <Modal isOpen ={true} onRequestClose={this.closeModal}>
                    <Zoom>
                    <button className='button' onClick={this.closeModal}>X</button>
                    <div className='product-info'>
                        <img src={product.image} alt={product.title}/>
                        <div className='info-right'>
                            <div className='info-top'>
                                <p class='title'>{product.title}</p>
                                <p>{formatCurrency(product.price)}</p>
                            </div>
                            <div>
                                <p className='info-size'>
                                    Size:{product.sizes.map(size =>(
                                        <span>
                                            <button className='button size'>{size}</button>
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <button className='button full' onClick={() => {
                                this.props.addToCart(product);
                                this.closeModal();
                            }}>
                                {'add to cart'.toLocaleUpperCase()}
                            </button>
                            <div className='product-info-description'>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                    </Zoom>
                </Modal>)}
            </div>
        )
    }
}

export default Products;
