import React, { useEffect } from 'react';
import { Rooms } from './Rooms';
import { Message } from './Message';
import { Users } from './Users';
import { SendMessage } from './SendMessage';
import { useSelector, useDispatch } from 'react-redux';
import {
    getRooms,
    getUsersChat,
    selectChatUser,
    socket,
    newUserConnectedChat,
    userDisconnectedChat,
    newUserRegisterChat,
    userJoinedRoom,
    userLeftRoom,
    getUsersForRoomChat
} from './chatSlice';

export function Chat() {
    const dispatch = useDispatch();
    const user = useSelector(selectChatUser);

    useEffect(() => {
        dispatch(getRooms('https://bt-21-playground-vppfc.ondigitalocean.app/rooms'));

        dispatch(getUsersChat());

        socket.on("new_user_connected", (socketId) => {
            dispatch(newUserConnectedChat(socketId));
        });

        socket.on('user_disconnected', (socketId) => {
            dispatch(userDisconnectedChat(socketId));
        });

        socket.on("user_registered", (username, socketId) => {
            dispatch(newUserRegisterChat({ id: socketId, nick: username }));
        });

        socket.on('users_list_for_room', (users, roomId) => {
            dispatch(getUsersForRoomChat({ users: users, id: roomId }));
        });

        socket.on('join_success', (roomId) => {
            dispatch(userJoinedRoom({ userId: socket.id, roomId: roomId }));
        });

        socket.on('leave_success', (roomId) => {
            dispatch(userLeftRoom({ userId: socket.id, roomId: roomId }));
        });

        socket.on('user_joined_room', (userId, roomId) => {
            dispatch(userJoinedRoom({ userId: userId, roomId: roomId }));
        });

        socket.on('user_left_room', (userId, roomId) => {
            dispatch(userLeftRoom({ userId: userId, roomId: roomId }));
        });

    }, [dispatch, user]);

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