import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectChatDisabled,
    socket,
    selectChatRoomActive,
    sendMessagToRoom
} from './chatSlice';

export function SendMessage() {
    const disabled = useSelector(selectChatDisabled);
    const roomActive = useSelector(selectChatRoomActive);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const sendMessage = () => {
        if (inputValue !== '') {
            socket.emit('msg_to_room', inputValue, roomActive.id);
            dispatch(sendMessagToRoom({ message: inputValue, roomId: roomActive.id, userId: socket.id }));
        }
        setInputValue('');
    }

    return (
        <>
            <div className="col s11">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">textsms</i>
                                <textarea
                                    id="textarea1"
                                    className="materialize-textarea"
                                    disabled={disabled}
                                    value={inputValue}
                                    onChange={(event) => { setInputValue(event.target.value) }}></textarea>
                                <label htmlFor="textarea1">Massage</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col s1">
                <div className="row">
                    <button
                        className=" btn waves-effect waves-light btn-large"
                        type="submit"
                        name="action"
                        id="message"
                        disabled={disabled}
                        onClick={sendMessage}
                    >Send</button>
                </div>
            </div>
        </>
    );
}