import React, { Component } from 'react'
import formatCurrency from './util'
import '../Cart.scss'

 class Cart extends Component {
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
                    <ul className='cart-items'>
                    {cartItems.map(cartItem => (
                        <li key={cartItem._id}>
                            <div className ='cart-item'>
                                <img src={cartItem.image} alt={cartItem.title} />
                            </div>
                            <div>
                                <div>{cartItem.title}</div>
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
                </div>
                {cartItems.length !== 0 && (
                <div className='cart'>
                    <div className='total'>
                        <div>
                        Total: {''}
                        {formatCurrency(
                            cartItems.reduce((a, c) => a + (c.price * c.count), 0)
                        )}
                        </div>
                        <button className='button primary'>
                        Proceed
                        </button>
                    </div>
                </div>
                )}
            </div>
        );
    }
}
export default Cart;
