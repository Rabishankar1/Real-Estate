import React, { useState } from 'react';
import './filters.css';
import clear from '../../assets/icons8-clear-filters-32.png'


function Filters(props) {
    const [price, updatePrice] = useState('');
    const [type, updateType] = useState('');

    function changePrice(e) {
        updatePrice(e.target.value)
    }

    function changeType(e) {
        updateType(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        let data;
        console.log('price:', price, 'type', type, 'location:', props.location)

        if (!price && !type && !props.location) {
            data = props.data;
        }
        else {
            if (price && type && props.location) {

                let priceFiltered = [...props.data].filter(i => {
                    return ((i.price < parseInt(price.split('-')[1])) && (i.price > parseInt(price.split('-')[0])));
                })

                let typeFiltered = priceFiltered.filter(i => i.type === type)

                data = typeFiltered.filter(i => i.location === props.location.value)

            }
            else {
                if (price) {
                    if (!props.location && !type) {
                        // console.log('inside', price)
                        data = [...props.data].filter(i => ((i.price < parseInt(price.split('-')[1])) && (i.price > parseInt(price.split('-')[0]))));
                        // console.log(data,'data')
                    }
                    else if (props.location) {
                        data = [...props.data].filter(i => i.location === props.location.value).filter(i => ((i.price < parseInt(price.split('-')[1])) && (i.price > parseInt(price.split('-')[0]))));
                    }
                    else {
                        data = [...props.data].filter(i => i.type === type).filter(i => ((i.price < parseInt(price.split('-')[1])) && (i.price > parseInt(price.split('-')[0]))));

                    }
                }
                else {
                    if (!props.location) {
                        data = [...props.data].filter(i => i.type === type)
                    }
                    else if (!type) {
                        data = [...props.data].filter(i => i.location === props.location.value)
                    }
                    else {
                        data = [...props.data].filter(i => i.type === type).filter(i => i.location === props.location.value)
                    }
                }
            }
        }
        props.updateData(data)
    }

    function handleClear() {
        document.getElementById('price').selectedIndex = 0;
        document.getElementById('type').selectedIndex = 0;
        props.updateData(props.data)
        updatePrice('')
        updateType('')
        props.updateLocation('')
    }

    return (
        <form className="tiles-wrapper" id="myForm" onSubmit={e => handleSubmit(e)}>
            <div className='filter-container'>
                <div className='left-tile'>
                    <label>Location</label>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', opacity: '0.8' }}>{props.location.value}</div>
                </div>
                {/* <div className='tile'>
                    <label>When</label>
                    <br />
                    <input type="datetime-local" name="" id="" />
                </div> */}
                <div className='tile'>
                    <label>Price</label>
                    <br />
                    <select
                        name='price'
                        id='price'
                        onChange={e => changePrice(e)}>
                        <option value="" disabled selected>Select Your Price Range </option>
                        <option value="0-1000">
                            &lt;$1000
                        </option>
                        <option value="1000-2000">$1000-$2000</option>
                        <option value="2000-3000">$2000-$3000</option>
                        <option value="3000-4000">$3000-$4000</option>
                        <option value="4000-5000">$4000-$5000</option>
                    </select>
                </div>
                <div className='tile'>
                    <label>Property Type</label>
                    <br />
                    <select name="type" id="type" onChange={e => changeType(e)} >
                        <option value="" disabled selected>Select Your Property Type</option>
                        <option value="house">Houses</option>
                        <option value="office">Offices</option>
                        <option value="apartment">Apartments</option>
                        <option value="studio">Studios</option>
                    </select>
                </div>
                <div className='tile' style={{ display: "flex" }}>
                    <input type='submit' className='btn' value='Search' />
                    <div
                        onClick={handleClear}
                        className='clear-filters'
                        style={{ height: "38.4px", position: "relative", top: "0.3rem", marginLeft: "0.25rem" }}>
                        <img style={{ height: "100%" }} src={clear} />
                    </div>
                </div>
            </div>
        </form >
    )
}

export default Filters