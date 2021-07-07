
function Item() {
    return (
        <div className="row">
            <div className="col s12">
                <ul className="collection with-header col s12">
                    <li className="collection-header"><h4 className="teal-text text-darken-2">To do list</h4></li>
                    <li className="collection-item left-align">
                        <div>
                            <label>
                                <input type="checkbox" />
                                <span>Item 1</span>
                            </label>
                            <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
                        </div>
                    </li>
                    <li className="collection-item left-align">
                        <div>
                            <label>
                                <input type="checkbox" />
                                <span>Item 2</span>
                            </label>
                            <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
                        </div>
                    </li>
                    <li className="collection-item left-align">
                        <div>
                            <label>
                                <input type="checkbox" />
                                <span>Item 3</span>
                            </label>
                            <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
                        </div>
                    </li>
                    <li className="collection-item left-align">
                        <div>
                            <label>
                                <input type="checkbox" />
                                <span>Item 4</span>
                            </label>
                            <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export { Item };
