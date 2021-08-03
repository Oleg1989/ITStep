import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Item } from './Item';
import { getData } from './data';

export function Container() {
    const [data, setData] = useState([{}]);
    console.log(data);
    useEffect(() => {
        let timerId = setInterval(getData().then((body) => { setData(body) }), 5000);
        return () => {
            clearInterval(timerId);
        }
    }, data);
    return (
        <div className="container">
            <ul className="collection">
                {data.map((element) => {
                    return <Item city={element.city} temperature={element.temperature} key={element.id} />
                })}
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