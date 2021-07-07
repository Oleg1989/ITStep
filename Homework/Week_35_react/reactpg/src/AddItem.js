
export function AddItem() {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s8">
                        <input id="add_item" type="text" className="validate" />
                        <label for="add_item">Add item</label>
                    </div>
                    <div className="col s4 valign-wrapper">
                        <p>
                            <button className="btn waves-effect waves-light" type="button" name="action">Add
                            <i className="material-icons right">send</i>
                            </button>
                        </p>
                    </div>
                </div>
            </form>
        </div>)

    // <div className="add-item">
    //     <input type="text" id="title-item" placeholder="Title item" />
    //     <button id="btn-add">Add</button>
    // </div>;
}