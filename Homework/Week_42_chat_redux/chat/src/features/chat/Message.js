import { useSelector } from 'react-redux';
import {
    selectChatMessageRooms,
    selectChatRoomActive
} from './chatSlice';
import { ItemMessage } from './ItemMessage';
import { ItemDate } from './ItemDate';

export function Message() {
    const messageRooms = useSelector(selectChatMessageRooms);
    const roomActive = useSelector(selectChatRoomActive);

    const liItemsMessage = null;
    const liItemsDate = null;

    const liItemMessageRoom = (liItemsMessage) => {
        if (roomActive) {
            messageRooms.forEach((room) => {
                if (room.id === roomActive.id && room.userMessages.length !== 0) {
                    liItemsMessage = room.userMessages.map((r, index) =>
                        <ItemMessage
                            user={r.user}
                            message={r.message}
                            key={index}
                        ></ItemMessage>
                    );
                }
            });
            return liItemsMessage;
        }
    }

    const liItemDateRoom = (liItemsDate) => {
        if (roomActive) {
            messageRooms.forEach((room) => {
                if (room.id === roomActive.id && room.userMessages.length !== 0) {
                    liItemsDate = room.userMessages.map((r, index) =>
                        <ItemDate
                            date={r.date}
                            key={index}
                        ></ItemDate>);
                }
            });
            return liItemsDate;
        }
    }

    const divStyle = {
        minHeight: '400px',
        height: '400px',
        overflowY: 'auto'
    }

    return (
        <div className="col s8 z-depth-1" style={divStyle}>
            <div className="row">
                <h5 id="connected" className="center-align">Message</h5>
                <div className="col s9">
                    <ul className="collection">
                        {liItemMessageRoom(liItemsMessage)}
                    </ul>
                </div>
                <div className="col s3">
                    <ul className=" collection" id='time'>
                        {liItemDateRoom(liItemsDate)}
                    </ul>
                </div>
            </div>
        </div>
    );
}