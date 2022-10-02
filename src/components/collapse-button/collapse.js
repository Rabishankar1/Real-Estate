import React, { useState } from 'react';
import "./collapse.css";


export default function Collapse(props) {
    // const [toggle, updateToggle] = useState(false);

    // function myFunction() {
    //     updateToggle(!toggle)
    // }
    if (props.clicked) {
        return (
            <div className="container change">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        )
    }
}
