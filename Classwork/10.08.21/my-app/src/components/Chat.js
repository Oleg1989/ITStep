import { Rooms } from './Rooms';
import { Massage } from './Massage';
import { Users } from './Users';
import { SendMassage } from './SendMassage';

export function Chat() {

    return (
        <div className="row">
            <div className="col s12">
                <h2 className="header center-align"><span className="teal-text text-darken-4">Chat</span></h2>
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="col s2 z-depth-1">
                                <div className="row">
                                    <Rooms />
                                </div>
                            </div>
                            <div className="col s8 z-depth-1">
                                <div className="row">
                                    <Massage />
                                </div>
                            </div>
                            <div className="col s2 z-depth-1">
                                <Users />
                            </div>
                        </div>
                        <div className="card-action">
                            <div className="row">
                                <SendMassage />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}