import React, { Component } from 'react';
import formatCurrency from './util';
import Checkout from './Checkout';
import '../Cart.scss';
import '../Checkout.scss';
import Fade from 'react-reveal/Fade';

class Cart extends Component {
    state = {
        email: '',
        name: '',
        address: '',
        displayCheckoutForm: false
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    createOrder = (e) => {
        e.preventDefault();
            const order = {
                name: this.state.name,
                email: this.state.email,
                address: this.state.address,
                cartItems: this.props.cartItems
            };
        this.props.createOrder(order);
    }
    

    render() {
        const {cartItems} = this.props;
        return (
            <div>
                <div>
                    {cartItems.length === 0? (<div className='cart cart-header'>Cart is empty</div> )
                    : (<div className='cart cart-header'>You have {cartItems.length} in your cart {' '}</div>
                    )}
                </div>
                <div className='cart'>
                <Fade left cascade>
                {cartItems.length === 0? 
                (<img src="https://img.icons8.com/ios/100/000000/favorite-cart.png" alt='empty shopping cart' className='cart-svg'/>) :
                    (<ul className='cart-items'>
                    {cartItems.map(cartItem => (
                        <li key={cartItem._id}>
                            <div className ='cart-item'>
                                <img src={cartItem.image} alt={cartItem.title} />
                            </div>
                            <div>
                                <div className='title'>{cartItem.title}</div>
                                <div className='right price'> 
                                    {formatCurrency(cartItem.price)} x {cartItem.count}{' '}
                                    <button onClick={() => this.props.removeFromCart(cartItem)} className='button'>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                    )}
                    </ul>
                    )}
                    </Fade>
                </div>
                <div>
                    {cartItems.length !== 0 && (
                        <div className='cart'>
                            <div className='total'>
                                <div>
                                Total: {''}
                                {formatCurrency(
                                    cartItems.reduce((a, c) => a + (c.price * c.count), 0)
                                )}
                                </div>
                                <button onClick={() => {this.setState({displayCheckoutForm: true});
                                }}
                                className='button outline' >
                                Continue
                                </button>
                            </div>
                            {this.state.displayCheckoutForm && (
                                <div className='form-container'>
                                    <Checkout 
                                        handleChange={this.handleChange}  
                                        createOrder={this.createOrder}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Cart;
