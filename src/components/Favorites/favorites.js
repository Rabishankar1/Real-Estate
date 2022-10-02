import React from 'react';
import Content from '../content/content';
import "./favorites.css";

function Favorites(props) {
    let data;
    if (JSON.parse(localStorage.getItem('info'))) {
        data = JSON.parse(localStorage.getItem('info'));
    }
    else {
        data = []
    }
    return (
        <>
            {props.state && <div className='space'></div>}
            <div className="favorite-wrap">
                <div className='grid-container'>
                    {data && (data.map(i => {
                        return (
                            <div className="grid-item">
                                <Content data={i} />
                            </div>)
                    }))}
                </div>
                {!data.length && (
                    <>
                        <h1 style={{ color: "rgba(0, 0, 0, 0.6)", margin: "auto" }}>Favorites that get added will appear here</h1>
                        <br />
                        <h1 style={{ color: "rgba(0, 0, 0, 0.6)", margin: "auto" }}> Go to home page and add a property to see it</h1>
                    </>
                )}
            </div>
        </>
    )
}

export default Favorites