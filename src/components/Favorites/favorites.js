import React from 'react';
import Content from '../content/content';
import "./favorites.css";

function Favorites(props) {
    const data = JSON.parse(localStorage.getItem('info'));
    return (
        <>
            {props.state && <div className='space'></div>}
            <div className="favorite-wrap">
                <div className='grid-container'>
                    {data.map(i => {
                        return (
                            <div className="grid-item">
                                <Content data={i} />
                            </div>)
                    })}
                </div>
            </div>
        </>
    )
}

export default Favorites