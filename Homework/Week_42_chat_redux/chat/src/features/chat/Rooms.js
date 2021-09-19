import React, { useEffect } from 'react';
import {
    selectChatRooms,
    socket,
    joinRoomChat,
    selectChatRoomActive,
    disabled,
    getUsersForRoomChat,
    userJoinedRoom,
    userLeftRoom
} from './chatSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ItemRoom } from './ItemRoom';

export function Rooms(props) {
    const rooms = useSelector(selectChatRooms);
    const roomActive = useSelector(selectChatRoomActive);
    const dispatch = useDispatch();
    const liItems = rooms.map((room, index) => <ItemRoom room={room.title} id={room.id} key={index}></ItemRoom>);

    const joinRoom = (event) => {
        if (roomActive !== '') {
            socket.emit('join_room', event.target.id);
            dispatch(joinRoomChat(event.target.id));
            dispatch(disabled());
            socket.emit('get_users_for_room', event.target.id);
            socket.on('users_list_for_room', (users, roomId) => {
                dispatch(getUsersForRoomChat(users));
            });
        } else {
            socket.emit('leave_room', event.target.id);
            socket.emit('join_room', event.target.id);
            dispatch(joinRoomChat(event.target.id));
            dispatch(disabled());
            socket.emit('get_users_for_room', event.target.id);
            socket.on('users_list_for_room', (users, roomId) => {
                dispatch(getUsersForRoomChat(users));
            });
        }
    }

    useEffect(() => {
        socket.on('user_joined_room', (userId, roomId) => {
            dispatch(userJoinedRoom(userId));
            console.log(userId);
        });

        socket.on('user_left_room', (userId, roomId) => {
            dispatch(userLeftRoom(userId));
            console.log(userId);
        });
    }, [dispatch, roomActive]);

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