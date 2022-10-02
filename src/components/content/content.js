import React from 'react';
import './content.css';
import { Link } from "react-router-dom";
import bed from '../../assets/bed-solid.png';
import bath from '../../assets/icons8-bath-48.png';
import area from '../../assets/icons8-surface-48.png';



function Content(props) {
    function handleClick() {
        let info = {
            "id": props.data.id,
            "image": props.data.image,
            "price": props.data.price,
            "name": props.data.name,
            "location": props.data.location,
            "type": props.data.type,
            "address": props.data.address,
            "room_details": {
                "beds": props.data.room_details.beds,
                "bath": props.data.room_details.bath,
                "area": props.data.room_details.area
            }
        }
        if (localStorage.getItem('info')) {
            let flag = true;
            let temp = JSON.parse(localStorage.getItem('info'));
            console.log(temp, 'temp')
            temp.forEach(i => {
                if (i.id === info.id) {
                    flag = false;
                }
            })
            if (flag) {
                temp.push(info);
            }
            localStorage.setItem('info', JSON.stringify(temp));
        }
        else {
            let arr = [];
            arr.push(info);
            localStorage.setItem('info', JSON.stringify(arr));
        }
    }
    return (
        <a onClick={handleClick} href='/favorites' className="card" id={`${props.data.id}`}>
            <div className="img-wrapper"><img src={props.data.image} alt="" /></div>
            <div className="card-content">
                <div className="banner">
                    <span>{'\u2728'}</span>POPULAR
                </div>
                <div className="price">
                    <span className='price-span'>${props.data.price}</span>/month</div>
                <h3 className="card-heading">{props.data.name}</h3>
                <div className="address">{props.data.address}</div>
                <div className="room-details">
                    <div className="beds">
                        <img height="25px" src={bed}></img>
                        <span>{props.data.room_details.beds} beds</span>
                    </div>
                    <div className="bath">
                        <img height="25px" src={bath}></img>
                        <span>{props.data.room_details.bath} bathrooms</span>
                    </div>
                    <div className="area">
                        <img height="25px" src={area}></img>
                        <span>{props.data.room_details.area} m<sup>2</sup></span>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Content