import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Item } from './Item';
// const axios = require('axios');
// import cuid from 'cuid';
// import { getData } from './Data';

export function Container() {
    const [data, setData] = useState([]);

    useEffect(() => {
        let timerId = setInterval(async () => {
            let response = await window.fetch('https://bt-21-playground-vppfc.ondigitalocean.app/forecast');
            if (response.ok) {
                let data = await response.json();
                setData(data);
            } else {
                alert("Ошибка HTTP: " + response.status);
            }

        }, 10000);
        return () => {
            clearInterval(timerId);
        }
    });
    const liItems = data.map((element) => <Item city={element.city} temperature={element.temperature} key={element.id}></Item>);
    return (
        <div className="container">
            <ul className="collection">
                {liItems}
            </ul>
        </div>
    );

}

// import { useState } from 'react';

// export function Container() {
//     const [isLogin, setLogin] = useState(false);

//     if (isLogin) {
//         return (
//             <div className="container">
//                 <button onClick={() => setLogin(false)}>Logout</button>
//             </div>
//         );
//     } else {
//         return (
//             <div className="container">
//                 <button onClick={() => setLogin(true)}>Login</button>
//             </div>
//         );
//     }

// }