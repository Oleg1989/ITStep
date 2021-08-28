import React, { useState } from 'react';
import { Item } from './Item';

export function Rooms() {
    // const [rooms, setRooms] = useState(async () => {
    //     let response = await window.fetch('https://bt-21-playground-vppfc.ondigitalocean.app/rooms');
    //     if (response.ok) {
    //         // let roomsList = await response.json();
    //         setRooms(await response.json());
    //     } else {
    //         alert("Ошибка HTTP: " + response.status);
    //     }
    // });
    // console.log(rooms);
    // const ListRooms = rooms.map((i) => <Item title={i.title} key={i.id} />);
    return (
        <>
            <h5 className="header center-align"><span className="teal-text">Rooms</span></h5>
            <div className="col s12">
                <ul className="collection" id='rooms'>

                </ul>
            </div>
        </>
    );
}