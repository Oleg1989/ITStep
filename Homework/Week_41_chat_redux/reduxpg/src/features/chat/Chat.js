import { Rooms } from './Rooms';
import { Message } from './Message';
import { Users } from './Users';
import { SendMessage } from './SendMessage';

export function Chat() {

    return (
        <div className="row">
            <div className="col s12">
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
                                    <Message />
                                </div>
                            </div>
                            <div className="col s2 z-depth-1">
                                <Users />
                            </div>
                        </div>
                        <div className="card-action">
                            <div className="row">
                                <SendMessage />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}