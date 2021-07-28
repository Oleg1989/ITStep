
export function Search(props) {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">search</i>
                        <input onInput={props.onGetName} id="icon_prefix" type="text" className="validate" />
                        <label htmlFor="icon_prefix">Search by name</label>
                    </div>
                    <div className="s2">
                        <p>
                            <button onClick={props.onFindByName} className="waves-effect waves-light btn" >Serch</button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}