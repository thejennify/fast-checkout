import React, { Component } from 'react';
import '../Filter.scss';

class Filter extends Component {

    render() {
        return (
            <div className='filter'>
                <div className='filter-result'> 
                    {`${this.props.count} ${this.props.item}`} 
                </div>
                <div className='filter-sort'> order
                    <select value={this.props.sortRange} onChange={this.props.sortProducts} className='standard-select'>
                        <option value=''>Latest</option>
                        <option value='lowest'>lowest</option>
                        <option value='highest'>highest</option>
                    </select>
                </div>
                <div className='filter-type'>Filter
                    <select value={this.props.type} onChange={this.props.filterProducts} className='standard-select'>
                        <option value=''>ALL</option>
                        <option value='dress'>dresses</option>
                        <option value='tops'>tops</option>
                        <option value='jacket'>jackets</option>
                        <option value='jumpsuite'>jumpsuites</option>
                        <option value='bags'>bags</option>
                    </select>
                    </div>
            </div>
        )
    }
};



export default Filter;