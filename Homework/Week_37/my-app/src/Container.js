import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Book from './components/Book';
import Band from './components/Band';
import Dish from './components/Dish';

export default function Container() {
    const [state, setState] = useState();
    function showBook() {
        setState(<Book />);
    }
    function showBand() {
        setState(<Band />);
    }
    function showDish() {
        setState(<Dish />);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col s4">
                    <button id="Book" className="waves-effect waves-light btn" type="button" name="action" alt="Book" onClick={showBook}>Улюблена книга</button>
                </div>
                <div className="col s4">
                    <button id="Band" className="waves-effect waves-light btn" type="button" name="action" onClick={showBand}>Улюблена музикальна група</button>
                </div>
                <div className="col s4">
                    <button id="Dish" className="waves-effect waves-light btn" type="button" name="action" onClick={showDish}>Улюблена кулінарна страва</button>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    {state}
                </div>
            </div>
        </div>
    );
}