import './navbar.css';
import Collapse from '../collapse-button/collapse';
import { useState } from 'react';
import { Link } from "react-router-dom";


export default function Navbar(props) {
    const [toggle, updateToggle] = useState(false);

    async function myFunction() {
        await updateToggle(!toggle);
        localStorage.setItem("toggle", JSON.stringify(toggle));
        if (!toggle) {
            document.getElementsByClassName('mobile-menu')[0].classList.add('collapse-clicked');
        }
        else {
            document.getElementsByClassName('mobile-menu')[0].classList.remove('collapse-clicked');
        }

    }
    props.transition(toggle)
    return (
        <div className='wrap'>
            <nav>
                <div className="left">
                    <Link to="" className="home">
                        <img src="./image.png" alt="" />
                        <h1>Estatery</h1>
                    </Link>
                    <div className="left-item collapsible"><Link to="">Rent</Link></div>
                    <div className="left-item collapsible"><Link to="">Buy</Link></div>
                    <div className="left-item collapsible"><Link to="">Sell</Link></div>
                    <div className="left-item collapsible"><Link to="">Manage Property</Link></div>
                    <div className="left-item collapsible"><Link to="/favorites">Favorites</Link></div>
                </div>
                <div className="right">
                    <div className="right-item"><button className='btn'>Login</button></div>
                    <div className="right-item"><button className='btn'>Sign Up</button></div>
                    <div className="collapse-button" onClick={myFunction}>
                        <Collapse clicked={toggle} />
                    </div>
                </div>
            </nav>
            <div className='mobile-menu'>
                <div className="left-item"><Link to="">Rent</Link></div>
                <div className="left-item"><Link to="">Buy</Link></div>
                <div className="left-item"><Link to="">Sell</Link></div>
                <div className="left-item"><Link to="">Manage Property</Link></div>
                <div className="left-item"><Link to="/favorites">Favorites</Link></div>
            </div>
        </div>
    )
}