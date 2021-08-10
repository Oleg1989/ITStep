
export function Users() {
    return (
        <>
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="col s12">
                            <h6 className="header center-align"><span className="teal-text"
                                id="users">Users</span></h6>
                            <ul className="collection" id='nicks'>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <hr />
                <div className="col s12">
                    <div className="row">
                        <div className="col s12">
                            <ul className="collection" id='anonym'>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}