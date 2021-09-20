import {
    selectChatRooms,
    socket,
    joinRoomChat,
    selectChatRoomActive,
    disabled
} from './chatSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ItemRoom } from './ItemRoom';

export function Rooms() {
    const rooms = useSelector(selectChatRooms);
    const roomActive = useSelector(selectChatRoomActive);
    const dispatch = useDispatch();
    const liItems = rooms.map((room, index) => <ItemRoom room={room.title} id={room.id} key={index}></ItemRoom>);

    const joinRoom = (event) => {
        event.preventDefault();
        if (event.target.id) {
            if (roomActive) {
                socket.emit('leave_room', roomActive.id);
            }
            socket.emit('join_room', event.target.id);
            dispatch(joinRoomChat(event.target.id));
            dispatch(disabled());
            socket.emit('get_users_for_room', event.target.id);
        }

        // if (roomActive !== '') {
        //     socket.emit('join_room', event.target.id);
        //     dispatch(joinRoomChat(event.target.id));
        //     dispatch(disabled());
        //     socket.emit('get_users_for_room', event.target.id);
        // } else {
        //     socket.emit('leave_room', event.target.id);
        //     socket.emit('join_room', event.target.id);
        //     dispatch(joinRoomChat(event.target.id));
        //     dispatch(disabled());
        //     socket.emit('get_users_for_room', event.target.id);
        // }
    }

    return (
        <>
            <h5 className="header center-align"><span className="teal-text">Rooms</span></h5>
            <div className="col s12">
                <ul className="collection" onClick={joinRoom}>
                    {liItems}
                </ul>
            </div>
        </>
    );
}