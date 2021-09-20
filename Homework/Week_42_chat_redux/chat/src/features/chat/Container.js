import 'materialize-css/dist/css/materialize.min.css';
import { RegisterForm } from './RegisterForm';
import { Chat } from './Chat';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    notAuthenticated,
    selectChatAuth,
    selectChatUser,
    selectChatRoomActive
} from './chatSlice';

export function Container() {
    const user = useSelector(selectChatUser);
    const auth = useSelector(selectChatAuth);
    const roomActive = useSelector(selectChatRoomActive);
    const dispatch = useDispatch();

    if (auth) {
        return (
            <>
                <p>
                    <button
                        className="modal-close btn waves-effect waves-light"
                        type="button"
                        name="action"
                        id="add-nick"
                        onClick={() => dispatch(notAuthenticated())}>
                        Sing out
                        <i className="material-icons right">send</i>
                    </button>
                </p>
                <h2 className="header center-align"><span className="teal-text text-darken-4">Chat (user: {user}) {roomActive ? roomActive.title : ''}</span></h2>
                <Chat />
            </>
        );
    } else {
        return (
            <>
                <RegisterForm />
                <h2 className="header center-align"><span className="teal-text text-darken-4">Chat</span></h2>
                <h3 className="header center-align"><span className="teal-text text-darken-4">You need to register!!!</span></h3>
            </>
        );
    }
}