
import React, { Component } from 'react'

export default class Checkout extends Component {
    render() {
        return (
            <form onSubmit={this.props.createOrder} className='form'>
                <ul>
                    <li>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type='text'
                            name='name'
                            onChange={this.props.handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email'
                            name='email'
                            onChange={this.props.handleChange} 
                        />
                    </li>
                    <li>
                        <label htmlFor='address'>Address</label>
                        <input 
                            type='text'
                            name='address'
                            onChange={this.props.handleChange}
                        />
                    </li>
                    <li>
                        <button type='submit' className='button full'>Checkout</button>
                    </li>
                </ul>  
            </form>
        )
    }
}
